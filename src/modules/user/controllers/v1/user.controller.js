import { createOneUser, getAllUsers } from "../../services/user.service"


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const index = async(req, res) => {
    const users = await getAllUsers().catch((error) => { res.json({ status: false, error: error }) });
    res.json({ status: true, data: users });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const store = async(req, res) => {
    await createOneUser(req.body)
        .then((user) => {
            res.json({ status: true, data: user });
        })
        .catch((error) => { res.json({ status: false, error: error }) });
}