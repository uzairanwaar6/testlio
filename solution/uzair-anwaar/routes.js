'use strict';

const Router = require('koa-router');

// const discovery = require('./api/discovery');
const health = require('./api/health');

const users = require('./api/user');
const issues = require('./api/issues');

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
 * /issues/list:
 *   get:
 *     summary: List issues with optional pagination and filtering
 *     tags:
 *       - Issues
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of results per page
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
router.get('/issues/list', issues.list);

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
 *         description: Issue revision comparison
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
 *     responses:
 *       200:
 *         description: Revision history
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
 *             required: [title, description, created_by]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               created_by:
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
 *               updated_by:
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
