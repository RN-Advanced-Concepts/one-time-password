// Code here is executing on top of 'node.js', which does not yet have access to ES6 modules.

module.exports = function(req, res) {
     res.send(req.body)
}