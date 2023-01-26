const UserModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers()

        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        req.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const creatNewUser = async (req, res) => {
    const {body} = req

    try {
        await UserModel.createNewUser(body)
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        req.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const {body} = req

    try {
        await UserModel.updateUser(body, id)
        res.json({
            message: 'UPDATE user success',
            data: {
                id,
                ...body
            }
        })
    } catch (error) {
        req.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params

    try {
        await UserModel.deleteUser(id)
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        req.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    creatNewUser,
    updateUser,
    deleteUser
}