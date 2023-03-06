import { Router } from 'express';
import { CreateClientController } from 'modules/clients/useCases/clients/createClient/CreateClientController';
import { GetClientController } from 'modules/clients/useCases/clients/getClients/getClientsController';
import { GetClientByIdController } from 'modules/clients/useCases/clients/getClientsById/getClientsByIdController';
import { UpdateClientController } from 'modules/clients/useCases/clients/updateClients/updateClientsController';
import { CreateContractController } from 'modules/clients/useCases/contracts/createContract/CreateContractController';
import { ListContractController } from 'modules/clients/useCases/contracts/listContract/ListContractController';
import { CreateDepartmentController } from 'modules/clients/useCases/departments/createDepartments/CreateDepartmentController';
import { ListDepartmentByClientController } from 'modules/clients/useCases/departments/listDepartmentByClients/ListDepartmentByClientController';
import { ListDepartmentByIdController } from 'modules/clients/useCases/departments/listDepartmentById/ListDepartmentByIdController';
import { CreateUserController } from 'modules/clients/useCases/users/createUsers/CreateUsersController';
import { UsersByClientController } from 'src/modules/clients/useCases/users/usersByClient/UsersByClientController';

const clientsRouter = Router();

const createClientController = new CreateClientController();
const getClientController = new GetClientController();
const getClientByIdController = new GetClientByIdController();
const updateClientController = new UpdateClientController();
const createUserController = new CreateUserController();
const usersByClientController = new UsersByClientController();
const createContractController = new CreateContractController();
const listContractController = new ListContractController();
const createDepartmentController = new CreateDepartmentController();
const listDepartmentController = new ListDepartmentByClientController();
const listDepartmentByIdController = new ListDepartmentByIdController();

clientsRouter.post('/create', createClientController.handle);
clientsRouter.get('/', getClientController.handle);
clientsRouter.get('/:id', getClientByIdController.handle);
clientsRouter.put('/:id/update', updateClientController.handle);
clientsRouter.post('/:id/users/create', createUserController.handle);
clientsRouter.get('/:id/users', usersByClientController.handle);
clientsRouter.post('/:id/contract/create', createContractController.handle);
clientsRouter.get('/:id/contracts/', listContractController.handle);
clientsRouter.post('/:id/department/create', createDepartmentController.handle);
clientsRouter.get('/:id/departments/', listDepartmentController.handle);
clientsRouter.get('/:client_id/departments/:id', listDepartmentByIdController.handle);

export default clientsRouter;
