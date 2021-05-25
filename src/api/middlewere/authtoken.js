var jwt = require('jsonwebtoken');

exports.isLoggedIn = ( req, res, next ) => {
    const token = req.header('auth-token');

    if(!token) return res.status(401).json({eroor: " Acess Denied"})

    try {
        const verfied = jwt.verify(token,process.env.SECRET_KEY_JWT);
        req.user = verfied.user;
        next();
    } catch (error) {
        let msg = '';
        if(!req.user) msg = 'Session Time Out';
        else msg = error;
        res.status(500).json({eroor: msg});
    }
}