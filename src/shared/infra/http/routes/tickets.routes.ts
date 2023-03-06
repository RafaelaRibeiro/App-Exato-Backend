import { Router } from 'express';
import { CreateTicketsController } from 'modules/tickets/useCases/createTickets/CreateTicketsController';
import { GetTicketByIdController } from 'modules/tickets/useCases/getTicketById/GetTicketByIdController';
import { ListTicketController } from 'modules/tickets/useCases/ListTickets/ListTicketsController';
import { UpdateTicketController } from 'modules/tickets/useCases/updateTicket/UpdateTicketController';
import { UpdateTicketContentController } from 'modules/tickets/useCases/updateTicketContent/UpdateTicketContentController';

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const ticketsRouter = Router();

const createTicketController = new CreateTicketsController();
const listTicketsController = new ListTicketController();
const getTicketByIdController = new GetTicketByIdController();
const updateTicketController = new UpdateTicketController();
const updateTicketContentController = new UpdateTicketContentController();

ticketsRouter.post('/create', ensureAuthenticate, createTicketController.handle);
ticketsRouter.get('/', listTicketsController.handle);
ticketsRouter.get('/:id', getTicketByIdController.handle);
ticketsRouter.put('/:id/update', updateTicketController.handle);
ticketsRouter.put('/:content_id/content', updateTicketContentController.handle);
export default ticketsRouter;
