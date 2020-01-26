import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('bnb-usdt');
  this.route('btc-usdt');
  this.route('eth-usdt');
  this.route('iota-eth');
  this.route('ltc-usdt');
  this.route('xmr-usdt');
  this.route('iota-eth-full');
  this.route('results-totals');
  this.route('zrx-eth-full');
});
