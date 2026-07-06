const asyncHandler = (requestHeader) => {
    (req, res, next) => {
        Promise.resolve(requestHeader(req, res, next)).catch(error => next(error));
    }
}  

export default asyncHandler;

/*
const asyncHandler = (fn) => async (req, res, next) => {
    try{
        await fn(req, res, next);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}
*/
