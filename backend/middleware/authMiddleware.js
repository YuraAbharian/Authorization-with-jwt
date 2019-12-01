 import { Auth } from "../model";
import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {

    try {
        // const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', ''):
        const token = req.header('Authorization');
            // req.headers.cookie.replace('Bearer%20', 'Authorization=');

        const decode = jwt.verify(token, 'newAuthSecurityWord');

        const user = await Auth.findOne({_id: decode._id, 'tokens.token': token });
        if(!user){  throw new Error('Please authenticate first.');
        }
        req.token = token;
        req.user = user;
        next();

    } catch (e) {
      const data = { message: e.message, statusCode: 1 };
      res.status(401).send(data);
    }
};
module.exports = authMiddleware;