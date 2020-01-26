import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | iota-eth-full', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:iota-eth-full');
    assert.ok(route);
  });
});
