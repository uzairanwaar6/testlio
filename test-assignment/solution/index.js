'use strict';

require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const errorHandler = require('./middleware/errorHandler')
const config = require('./config');
const router = require('./routes');
const authMiddleware = require('./middleware/auth');
const { koaSwagger } = require('koa2-swagger-ui');
const swaggerSpec = require('./swagger/swagger');


const app = new Koa();

app.use(errorHandler);
app.use(bodyParser());

// Swagger JSON route
router.get('/swagger.json', (ctx) => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = swaggerSpec;
});

// Swagger UI route
app.use(
  koaSwagger({
    routePrefix: '/docs', // Swagger UI will be at /docs
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
);



app.use(authMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(config.port, () => {
  console.log('Listening on http://localhost:%s/', config.port);
  console.log('Swagger docs at http://localhost::%s/docs', config.port);
});


