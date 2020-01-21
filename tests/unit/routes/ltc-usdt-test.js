import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ltc-usdt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ltc-usdt');
    assert.ok(route);
  });
});
