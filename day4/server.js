var
  express = require("express"),
  path = require("path"),
  nedb = require('nedb'),
  patientDBUrl = "db/patient.db";


var db = {
  patient: new nedb({ filename: patientDBUrl, autoload: true })

};

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser()),
  app.use(express.static(path.join(__dirname, 'public')));
});

//Patient api
app.get('/api/patient', function (req, res) {
  db.patient.find({}, function(err, result) {
    res.send(result);
  });
});

app.post('/api/patient', function (req, res) {
    console.log(req.body);
  var item = req.body;
  db.patient.insert(item, function (err, result) {
    if (err) {
      res.send({'error':'An error has occurred'});
    } else {
      console.log('Success: ' + JSON.stringify(result));
      res.send(result);
    }
  });
});

app.listen(app.get('port'));
console.log('Server listening on port ' + app.get('port'));
