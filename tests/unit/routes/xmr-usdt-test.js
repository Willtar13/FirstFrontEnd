import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | xmr-usdt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:xmr-usdt');
    assert.ok(route);
  });
});
