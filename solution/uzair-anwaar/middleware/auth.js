const jwt = require('jsonwebtoken');
const { Client } = require('../models');
const { response, HttpError } = require('../utils');

const swagger = 'swagger.json';
const health = 'health';
const publicRoutes = ['/', '/users/login', '/users/register', health, swagger];

module.exports = async (context, next) => {

  if (context.path.endsWith(swagger) || context.path.endsWith(health))
    return await next();

  const clientId = context.headers['x-client-id'];
  if (!clientId)
    throw new HttpError('X-Client-ID header is missing', 401);

  const client = await Client.findOne({ where: { client_id: clientId } });
  if (!client)
    throw new HttpError('Invalid Client ID', 401);


  // 2. Skip JWT auth for public routes
  if (publicRoutes.includes(context.path)) {
    return await next();
  }

  // 3. Check JWT Token
  const authHeader = context.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw new HttpError('Authorization token is missing or malformed', 401);


  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const { password, ...safeUser } = decoded;
  context.state.user = safeUser;

  await next();
};
