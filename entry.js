
require('angular');
require("angular-ui-bootstrap");
require("angular-translate");
require('@angular/router/angular1/angular_1_router');
require('angular-modal-service');
require('ng-table');
//require('./node_modules/bootstrap/dist/js/bootstrap.min.js');
require('./node_modules/bootstrap/dist/css/bootstrap.css');
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./app', true, /\.js$/));
requireAll(require.context('./app', true, /\.css$/));
