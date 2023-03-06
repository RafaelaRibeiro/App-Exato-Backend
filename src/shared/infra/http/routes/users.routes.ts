import { Router } from 'express';
import { CreateUserController } from 'src/modules/users/useCases/createUsers/CreateUsersController';
import { GetUserByIdController } from 'src/modules/users/useCases/getUserById/GetUserByIdController';

// import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const usersRouter = Router();

const createUserController = new CreateUserController();

const getUserByIdController = new GetUserByIdController();

usersRouter.post('/create', createUserController.handle);

usersRouter.get('/:id', getUserByIdController.handle);

export default usersRouter;
