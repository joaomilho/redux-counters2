import express from 'express';
import render from './render'
import logger from './helpers/logger'
import errorHandler from './helpers/errorHandler'
import Counter from './models/Counter';

express()
  .use(logger)
  .use('/static', express.static('static'))
  .get('/', (req, res) => res.type('html').send(render()))
  .post('/inc', (req, res) => {
    const result = Counter.update(+1);
    if(req.headers.accept.match(/application\/json/)){
      res.sendStatus(result ? 200 : 500)
    } else {
      res.redirect('/');
    }
  })
  .post('/dec', (req, res) => {
    const result = Counter.update(-1);
    if(req.headers.accept.match(/application\/json/)){
      res.sendStatus(result ? 200 : 500);
    } else {
      res.redirect('/');
    }
  })
  .use(errorHandler)
  .listen(3000, 'localhost', () => console.log('API listening at http://localhost:3000'));
