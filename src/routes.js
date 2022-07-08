import { Router } from 'express';
import * as MessageController from './controllers/message.js'

const routes = Router();

routes.post('/send', MessageController.sendMessage);

export { routes };
