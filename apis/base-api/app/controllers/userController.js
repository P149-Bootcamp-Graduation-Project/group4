const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');

exports.getAllUser = async (req, res, next) => {
    try {
        const userDtoList = await userService.getAllUser();
        res.json({data: userDtoList, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}