const errorHandler = function (err, req, res, next) {
  console.log("err.message: ", err.message);
  res.status(500).send('algo salio mal en el server..');

};

// server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

module.exports = errorHandler