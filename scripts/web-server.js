var application_root = __dirname,
    express = require( 'express' ),
    path = require( 'path' ),
    routes = require('./routes');


var app = express();

app.configure( function() {
  app.use( express.logger() );
  app.use( express.bodyParser() );
  app.use(express.cookieParser());
  app.use(express.session({secret: '1234567890QWERTY'}));
  app.use( express.methodOverride() );
  app.use( app.router );
  app.use( express.static( path.join( application_root, '../app') ) );
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.post('/signup', routes.signup);
var port = 4711;
app.listen(port, function() {
  console.log("started node at port "+port);
})
