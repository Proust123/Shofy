const isAdmin = (req, res, next) => {

    if(req.user?.role !== 'admin') {
        return res.send({message : "You are eligible for this task", success : false})
    }

    next()
}

module.exports = { isAdmin }