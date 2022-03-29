import express from "express";
const v1Router = express.Router();

import { index, store } from '../../controllers/v1/user.controller';

v1Router.get('/', [], index);
v1Router.post('/', [], store);

module.exports = v1Router;