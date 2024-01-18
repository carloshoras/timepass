const validateHourMiddleware = (req, res, next) => {
    if (res.locals.hours>=12 && res.locals.hours<=24) {
        next()
    } else {
        res.redirect('/error')
    }
}
;
  
module.exports = validateHourMiddleware;