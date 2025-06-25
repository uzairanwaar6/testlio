const jwt = require('jsonwebtoken');
const { Client } = require('../models');
const response = require('../utils/responses'); // adjust path as needed

const publicRoutes = ['/', '/users/login', '/users/register', '/health'];

module.exports = async (ctx, next) => {
  try {
    // 1. Check Client ID
    const clientId = ctx.headers['x-client-id'];
    if (!clientId) {
      return response.unauthorized(ctx, ['X-Client-ID header is missing']);
    }

    const client = await Client.findOne({ where: { client_id: clientId } });
    if (!client) {
      return response.unauthorized(ctx, ['Invalid Client ID']);
    }

    // 2. Skip JWT auth for public routes
    if (publicRoutes.includes(ctx.path)) {
      return await next();
    }

    // 3. Check JWT Token
    const authHeader = ctx.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return response.unauthorized(ctx, ['Authorization token is missing or malformed']);
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { password, ...safeUser } = decoded;
    ctx.state.user = safeUser;

    await next();
  } catch (err) {
    return response.unauthorized(ctx, [
      err.name === 'JsonWebTokenError' ? 'Invalid token' : err.message
    ]);
  }
};
