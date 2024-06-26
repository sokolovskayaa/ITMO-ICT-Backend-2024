// изменить данные о себе, посмотреть хакатоны в которых учавствует/участвовал(тогда оценки)(юзеры), посмотреть свою задачу(кураторы)
// посмотреть список хакатонов(жюри)

import { Router, Request, Response } from 'express';

const userController = require("../controller/user"); 
const userRouter = Router();

userRouter
  .route('/:id/hackathons')
  .get(userController.get_hackathons_by_user); // user himself TO DO!!!

userRouter
  .route('/:id/hackathons/active')
  .get(userController.get_active_hackathons_by_user);

export default userRouter;