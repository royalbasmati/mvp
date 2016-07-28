var routes = require('./routes.js');
var bodyParser  = require('body-parser');
var ref = require('../server.js').ref;



module.exports = function (app, express) {
  
  //route for client
  // var listRouter = express.Router();

  //parse json
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  //serve index
  app.use(express.static(__dirname + '/../../client'));


  // app.use('/api/list', listRouter);

  // routes(listRouter);
  app.get('/api/list', function(req, res) {
    res.send({
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
      databaseURL: process.env.DBURL,
      storageBucket: process.env.STORAGEBUCKET
    });
  });
  
};
