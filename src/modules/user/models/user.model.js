import mongoose from "mongoose";
import jwtHelper from "../../../utils/jwt.utils";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserModel = new Schema({
    name: String,
    email: String,
    password: String,
    token: String
});

UserModel.pre('save', function(next) {
    const data = Object.assign({}, this);
    this.token = jwtHelper.generateToken(data); //.catch(console.log);
    next();
});

export const User = mongoose.model('User', UserModel);