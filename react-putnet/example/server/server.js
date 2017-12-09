import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import AppContainer from './App';

const app = express();

app.get('*', (req, res) => {
  res.send(`<!doctype html>${
    ReactDOMServer.renderToString(
    <AppContainer />
  )}`);
});

app.listen(3000, () => console.log('Listening on localhost:3000'));