const hourMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    req.dateType = formattedTime;
    res.locals.hours = hours
    res.locals.minutes = minutes
    res.locals.seconds = seconds
    next()
};

module.exports = hourMiddleware;