'use strict';

const Router = require('koa-router');

const discovery = require('./api/discovery');
const health = require('./api/health');

const users = require('./api/user');
const issues = require('./api/issues');

const router = new Router();

router.get('/', discovery);
router.get('/health', health);


// Users
router.get('/users/me', users.me);
router.get('/users/login', users.login);
router.get('/users/register', users.register);

// Issues
router.get('/issues/:id', issues.get);



module.exports = router;
