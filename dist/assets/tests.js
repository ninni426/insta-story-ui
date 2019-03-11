'use strict';

define("insta-story-ui/tests/integration/components/story-slide-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | story-slide', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "pQ/+fl69",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"story-slide\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "71Z1OCt7",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"story-slide\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("insta-story-ui/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/story-slide.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/story-slide.js should pass ESLint\n\n16:3 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n16:3 - \'$\' is not defined. (no-undef)\n28:13 - Unexpected console statement. (no-console)\n30:13 - Unexpected console statement. (no-console)\n32:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n32:13 - \'$\' is not defined. (no-undef)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/stories.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/stories.js should pass ESLint\n\n2:8 - Use import { run } from \'@ember/runloop\'; instead of using Ember destructuring (ember/new-module-imports)\n2:13 - Use import $ from \'jquery\'; instead of using Ember destructuring (ember/new-module-imports)\n2:16 - Use import RSVP from \'rsvp\'; instead of using Ember destructuring (ember/new-module-imports)\n2:16 - \'RSVP\' is assigned a value but never used. (no-unused-vars)\n2:24 - \'Ember\' is not defined. (no-undef)\n7:9 - Unexpected console statement. (no-console)\n9:9 - Unexpected console statement. (no-console)\n23:17 - Unexpected console statement. (no-console)\n30:17 - Unexpected console statement. (no-console)\n36:17 - Unexpected console statement. (no-console)\n43:38 - Use import { isEmpty } from \'@ember/utils\'; instead of using Ember.isEmpty (ember/new-module-imports)\n43:38 - \'Ember\' is not defined. (no-undef)\n50:13 - Unexpected console statement. (no-console)');
  });
});
define("insta-story-ui/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('insta-story-ui/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'insta-story-ui/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('insta-story-ui/templates/components/story-slide.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'insta-story-ui/templates/components/story-slide.hbs should pass TemplateLint.\n\ninsta-story-ui/templates/components/story-slide.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<div>` beginning at L3:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<a>` beginning at L10:C8. Expected `<a>` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:8  error  Incorrect indentation for `<a>` beginning at L14:C8. Expected `<a>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `{{#each-in}}` beginning at L4:C12. Expected `{{#each-in}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:16  error  Incorrect indentation for `<div>` beginning at L5:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  6:20  error  Incorrect indentation for `<img>` beginning at L6:C20. Expected `<img>` to be at an indentation of 18 but was found at 20.  block-indentation\n  11:12  error  Incorrect indentation for `<span>` beginning at L11:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:12  error  Incorrect indentation for `<span>` beginning at L12:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:12  error  Incorrect indentation for `<span>` beginning at L15:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:12  error  Incorrect indentation for `<span>` beginning at L16:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  6:20  error  img tags must have an alt attribute  img-alt-attributes\n  6:91  error  Interaction added to non-interactive element  no-invalid-interactive\n  5:42  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('insta-story-ui/templates/header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'insta-story-ui/templates/header.hbs should pass TemplateLint.\n\ninsta-story-ui/templates/header.hbs\n  2:4  error  Incorrect indentation for `{{! <div class="bg-dark"> }}` beginning at L2:C4. Expected `{{! <div class="bg-dark"> }}` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<div>` beginning at L3:C8. Expected `<div>` to be at an indentation of 2 but was found at 8.  block-indentation\n  10:4  error  Incorrect indentation for `{{! </div> }}` beginning at L10:C4. Expected `{{! </div> }}` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:12  error  Incorrect indentation for `<div>` beginning at L4:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:12  error  Incorrect indentation for `<div>` beginning at L5:C12. Expected `<div>` to be at an indentation of 14 but was found at 12.  block-indentation\n  6:16  error  Incorrect indentation for `<h4>` beginning at L6:C16. Expected `<h4>` to be at an indentation of 14 but was found at 16.  block-indentation\n');
  });
  QUnit.test('insta-story-ui/templates/stories.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'insta-story-ui/templates/stories.hbs should pass TemplateLint.\n\ninsta-story-ui/templates/stories.hbs\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<div>` beginning at L4:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:12  error  Incorrect indentation for `{{#if}}` beginning at L5:C12. Expected `{{#if}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  6:16  error  Incorrect indentation for `{{story-slide}}` beginning at L6:C16. Expected `{{story-slide}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  1:0  error  Unexpected {{partial}} usage.  no-partial\n');
  });
});
define("insta-story-ui/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/story-slide-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/story-slide-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/stories-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/stories-test.js should pass ESLint\n\n');
  });
});
define("insta-story-ui/tests/test-helper", ["insta-story-ui/app", "insta-story-ui/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("insta-story-ui/tests/unit/routes/stories-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | stories', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:stories');
      assert.ok(route);
    });
  });
});
define('insta-story-ui/config/environment', [], function() {
  var prefix = 'insta-story-ui';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('insta-story-ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
