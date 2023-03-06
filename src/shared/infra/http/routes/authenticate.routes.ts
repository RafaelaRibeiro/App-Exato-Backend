import { Router } from 'express';
import { AuthenticateController } from 'src/modules/accounts/useCases/authenticate/AuthenticateController';
import { UserAuthenticateController } from 'src/modules/accounts/useCases/userAuthenticate/UserAuthenticateController';
import { ensureAuthenticate } from 'src/shared/infra/http/middlewares/ensureAuthenticate';

const authRouter = Router();

const authenticateController = new AuthenticateController();
const userAuthenticateController = new UserAuthenticateController();

authRouter.post('/', authenticateController.handle);
authRouter.get('/user', ensureAuthenticate, userAuthenticateController.handle);

export default authRouter;
