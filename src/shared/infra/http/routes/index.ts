import { Router } from 'express';

import authRouter from './authenticate.routes';
import clientsRouter from './clients.routes';
import registrationsRouter from './registrations.routes';
import ticketsRouter from './tickets.routes';
import timesheetRouter from './timesheet.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/clients', clientsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/timesheet', timesheetRouter);
router.use('/registrations', registrationsRouter);
router.use('/tickets', ticketsRouter);
export { router };
