import express from 'express';

import { addUser, loginUser} from '../Controller/userController.js';

const route = express.Router();

route.post('/add', addUser);
route.post('/signin', loginUser);



export default route;
