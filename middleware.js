module.exports.isLoggedIn = (req, res, next) => {
    const user = require('./db/user.json');
    const { username, password } = req.body
    if(user.username !== username || user.password !== password) {
       return res.redirect('/login')
    }
    next(); 
}