const jwt = require('jsonwebtoken');

module.exports = async (ctx, next) => {

  const publicRoutes = ['/', '/login', '/register', '/health',];
  if (publicRoutes.includes(ctx.path)) {
    return next();
  }


  const authHeader = ctx.headers.authorization;
  if (!authHeader) {
    ctx.status = 401;
    ctx.body = { error: 'Authorization header missing' };
    return;
  }

  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    user.password = null;
    ctx.state.user = user;
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = { error: 'Invalid token' };
  }
};
