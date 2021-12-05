const User = require('../models/user');
const jwt = require('jsonwebtoken');

const validationToken = (req, res, next) => {
    const token = req.headers['authorization'].replace("Bearer ", "");    
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });    
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        req.userId = decoded.id;
        next();
    });
}

const authentication = (req, res, next) => {                
    User.find({ email: req.body.email, password: req.body.password })        
        .then(user => {  
            if (user.length > 0) {                              
                const id = user.id;
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 5000
                })                
                return res.json({ auth: true, token: token });
            }           
            throw new Error('Login inválido');        
        }).catch(next);
};

module.exports = { validationToken, authentication };