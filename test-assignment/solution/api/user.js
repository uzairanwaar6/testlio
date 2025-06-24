const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const respond = require('./responses');
const { User } = require('../models');


const Users = {};

Users.register = async (ctx) => {
    const { first_name, last_name, email, password } = ctx.request.body;

    const existing = await User.findOne({ where: { email } });
    if (existing) {
        respond.badRequest(context, { error: 'Email already in use' });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ first_name, last_name, email, password: hashedPassword });

    user.password = null;

    respond.success(context, { user: user });
};

Users.login = async (ctx) => {
    const { email, password } = ctx.request.body;

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        respond.unauthorized(context, { error: 'Invalid credentials' });
        return;
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
    }, process.env.JWT_SECRET, { expiresIn: '1d' });

    respond.success(context, { token: token });
};

Users.me = async (ctx) => {
    respond.success(context, { user: ctx.state.user });
};

module.exports = Users;
