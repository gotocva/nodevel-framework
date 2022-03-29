import { User } from '../models/user.model';

/**
 * 
 * @param {Object} data 
 */
export const createOneUser = async(data) => {
    return new Promise((resolve, reject) => {
        const user = new User(data);
        user.save((error, savedRecord) => {
            if (error) {
                reject(error);
            } else {
                resolve(savedRecord);
            }
        })
    })
};

/**
 * 
 * @returns 
 */
export const getAllUsers = async() => {
    return new Promise((resolve, reject) => {
        User.find({}).exec((error, users) => {
            if (error) {
                reject(error);
            } else {
                resolve(users);
            }
        })
    })
}