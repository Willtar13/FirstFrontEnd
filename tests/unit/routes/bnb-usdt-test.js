import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bnb-usdt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bnb-usdt');
    assert.ok(route);
  });
});
