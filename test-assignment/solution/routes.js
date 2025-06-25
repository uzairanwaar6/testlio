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
router.post('/users/login', users.login);
router.post('/users/register', users.register);

// Issues
router.get('/issues/list', issues.list);
router.get('/issues/:id', issues.get);
router.get('/issues/:id/:revisionA/:revisionB', issues.issue_revisions);
router.get('/issues/revisions/:id', issues.revisions);
router.post('/issues', issues.create);
router.put('/issues', issues.update);




module.exports = router;
