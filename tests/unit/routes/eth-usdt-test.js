import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | eth-usdt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:eth-usdt');
    assert.ok(route);
  });
});
