'use strict';

const Router = require('koa-router');

// const discovery = require('./api/discovery');
const health = require('./controllers/health');

const users = require('./controllers/user');
const issues = require('./controllers/issues');

const router = new Router();

//router.get('/', discovery);
router.get('/health', health);


// Users
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post('/users/login', users.login);

// Issues
/**
 * @swagger
 * /issues:
 *   get:
 *     summary: List issues with optional pagination and filtering
 *     tags:
 *       - Issues
 *     parameters:
 *       - in: query
 *         name: pn
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number (default is 1)
 *       - in: query
 *         name: ps
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results per page (default is 10)
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter by title
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         description: Filter by description
 *     responses:
 *       200:
 *         description: List of issues
 */
router.get('/issues', issues.list);

/**
 * @swagger
 * /issues/{id}:
 *   get:
 *     summary: Get a single issue by ID
 *     tags:
 *       - Issues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Issue data
 *       404:
 *         description: Issue not found
 */
router.get('/issues/:id', issues.get);

/**
 * @swagger
 * /issues/{id}/{revisionA}/{revisionB}:
 *   get:
 *     summary: Compare two revisions of an issue
 *     tags:
 *       - Issues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: revisionA
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: revisionB
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Issue with the list of all revisions from revisionA to revisionB
 */
router.get('/issues/:id/:revisionA/:revisionB', issues.issue_revisions);

/**
 * @swagger
 * /issues/revisions/{id}:
 *   get:
 *     summary: Get revision history for an issue
 *     tags:
 *       - Issues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the issue
 *       - in: query
 *         name: pn
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number (default is 1)
 *       - in: query
 *         name: ps
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Page size (default is 10)
 *     responses:
 *       200:
 *         description: Returns all the revisions for specific issue
 */
router.get('/issues/revisions/:id', issues.revisions);

/**
 * @swagger
 * /issues:
 *   post:
 *     summary: Create a new issue
 *     tags:
 *       - Issues
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Issue created
 *       400:
 *         description: Validation error
 */
router.post('/issues', issues.create);

/**
 * @swagger
 * /issues/{id}:
 *   put:
 *     summary: Update an existing issue
 *     tags:
 *       - Issues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Issue updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Issue not found
 */
router.put('/issues/:id', issues.update);


module.exports = router;
