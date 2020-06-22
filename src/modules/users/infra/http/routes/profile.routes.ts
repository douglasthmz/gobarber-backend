import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profilesController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.put('/', profilesController.update);
profileRouter.get('/', profilesController.show);

export default profileRouter;
