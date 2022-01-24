import EmberRouter from '@embroider/router';
import config from 'embroider-pods/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('app');
  this.route('home');
});
