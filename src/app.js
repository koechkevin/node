import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'please check the route'
  });
});
export default app;
