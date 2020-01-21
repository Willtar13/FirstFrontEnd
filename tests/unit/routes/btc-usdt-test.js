import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | btc-usdt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:btc-usdt');
    assert.ok(route);
  });
});
