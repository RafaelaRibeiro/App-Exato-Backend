import { Router } from 'express';
import { DeleteTimesheetController } from 'modules/timesheet/useCases/deleteTimesheet/DeleteTimesheetController';
import { ListTimesheetsController } from 'modules/timesheet/useCases/listTimesheets/ListTimesheetsController';
import { ListTimesheetsByDateController } from 'modules/timesheet/useCases/listTimesheetsByDate/ListTimesheetsByDateController';
import { RegisterTimesheetController } from 'modules/timesheet/useCases/registerTimesheet/RegisterTimeSheetController';
import { TimesheetByIdController } from 'modules/timesheet/useCases/timesheetById/TimesheetByIdController';
import { UpdateTimesheetController } from 'modules/timesheet/useCases/updateTimesheet/UpdateTimesheetController';

const timesheetRouter = Router();

const registerTimesheetController = new RegisterTimesheetController();
const listTimesheetsController = new ListTimesheetsController();
const updateTimesheetController = new UpdateTimesheetController();
const timesheetByIdController = new TimesheetByIdController();
const listTimesheetsByDateController = new ListTimesheetsByDateController();
const deleteTimeSheetController = new DeleteTimesheetController();

timesheetRouter.post('/register', registerTimesheetController.handle);
timesheetRouter.get('/list', listTimesheetsController.handle);
timesheetRouter.get('/:id', timesheetByIdController.handle);
timesheetRouter.get('/', listTimesheetsByDateController.handle);
timesheetRouter.put('/:id/update', updateTimesheetController.handle);
timesheetRouter.delete('/:id/delete', deleteTimeSheetController.handle);
export default timesheetRouter;
