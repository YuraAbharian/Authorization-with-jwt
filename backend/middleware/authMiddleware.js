const Auth = require('../model/auth.js');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try { 
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, 'newAuthSecurityWord');
        const user = await Auth.findOne({_id: decode._id, 'tokens.token': token });
        if(!user) throw new Error(); 

        req.token = token;
        req.user = user;
        next();

    } catch (e) {
        res.status(401).send('Please authenticate first.');
    }
};
module.exports = authMiddleware;