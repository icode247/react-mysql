var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.json(`Account created for :${request.user}`)
 
}
exports.signin = async (req, res)=>{
    res.json(`${req.user} is logged in`)
}

exports.logout = async (req,res)=>{
    req.session.destroy();
    res.send("user Logged out")
}