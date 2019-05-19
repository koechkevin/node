import express from 'express';

const router = express.Router();
const UsersRouter = express.Router();
UsersRouter.get('/home', (req, res) => {
  res.status(200).json({
    name: 'koech'
  });
});

const route = [UsersRouter];

const routes = () => {
  route.forEach((each) => {
    router.use(each);
  });
  return router;
};

export default routes();
