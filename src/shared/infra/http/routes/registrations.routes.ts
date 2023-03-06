import { Router } from 'express';
import { CreateCategoryController } from 'modules/registrations/categories/useCases/createCategory/CreateCategoryController';
import { GetCategoryByIdController } from 'modules/registrations/categories/useCases/getCategoryById/GetCategoryByIdController';
import { ListCategoriesController } from 'modules/registrations/categories/useCases/listCategories/ListCategoriesController';
import { UpdateCategoryController } from 'modules/registrations/categories/useCases/updateCategory/UpdateCategoryController';
import { CreatePriorityController } from 'modules/registrations/priorities/useCases/createPriority/CreateStatusController';
import { GetPriorityByIdController } from 'modules/registrations/priorities/useCases/getPriorityById/GetPriorityByIdController';
import { ListPrioritiesController } from 'modules/registrations/priorities/useCases/listPriorities/ListPrioritiesController';
import { UpdatePriorityController } from 'modules/registrations/priorities/useCases/updatePriority/UpdatePriorityController';
import { CreateSituationController } from 'modules/registrations/situations/useCases/createSituation/CreateSituationController';
import { GetSituationByIdController } from 'modules/registrations/situations/useCases/getSituationById/GetSituationByIdController';
import { ListSituationsController } from 'modules/registrations/situations/useCases/listSituations/ListStatusController';
import { UpdateSituationController } from 'modules/registrations/situations/useCases/updateSituation/UpdateSituationController';

const registrationsRouter = Router();

const createCategoryController = new CreateCategoryController();
const getCategoryByIdController = new GetCategoryByIdController();
const listCategoriesController = new ListCategoriesController();
const updateCategoryController = new UpdateCategoryController();

const createPriorityController = new CreatePriorityController();
const getPriorityByIdController = new GetPriorityByIdController();
const listPrioritiesController = new ListPrioritiesController();
const updateSituationController = new UpdateSituationController();

const createSituationController = new CreateSituationController();
const getSituationByIdController = new GetSituationByIdController();
const listSituationsController = new ListSituationsController();
const updatePriorityController = new UpdatePriorityController();

registrationsRouter.post('/categories/create', createCategoryController.handle);
registrationsRouter.get('/categories/:id', getCategoryByIdController.handle);
registrationsRouter.get('/categories', listCategoriesController.handle);
registrationsRouter.put('/categories/:id/update', updateCategoryController.handle);

registrationsRouter.post('/priorities/create', createPriorityController.handle);
registrationsRouter.get('/priorities/:id', getPriorityByIdController.handle);
registrationsRouter.get('/priorities', listPrioritiesController.handle);
registrationsRouter.put('/priorities/:id/update', updatePriorityController.handle);

registrationsRouter.post('/situations/create', createSituationController.handle);
registrationsRouter.get('/situations/:id', getSituationByIdController.handle);
registrationsRouter.get('/situations', listSituationsController.handle);
registrationsRouter.put('/situations/:id/update', updateSituationController.handle);

export default registrationsRouter;
