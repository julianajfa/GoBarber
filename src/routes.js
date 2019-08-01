import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Juliana Fernandes',
    email: 'julianafernandes@id.uff.br',
    password_hash: '1234456',
  });

  return res.json(user);
});

export default routes;
