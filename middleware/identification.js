const jwt = require('jsonwebtoken');

exports.identifier = (req, res, next) => {
    let token;

    if (req.headers.client === 'not-browser') {
        token = req.headers.authorization;
    } else {
        token = req.cookies['Authorization'];
    }

    if (!token) {
        return res.status(401).json({ success: false, message: 'Token not provided' });
    }

    try {
        const userToken = token.startsWith('Bearer ') ? token.split(' ')[1] : token;
        const jwtVerified = jwt.verify(userToken, process.env.TOKEN_SECRET);

        req.user = jwtVerified;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
};
