import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | zrx-eth-full', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:zrx-eth-full');
    assert.ok(route);
  });
});
