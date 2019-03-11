'use strict';



;define("insta-story-ui/app", ["exports", "insta-story-ui/resolver", "ember-load-initializers", "insta-story-ui/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("insta-story-ui/components/story-slide", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    init() {
      this._super();

      this.setProperties({
        carousel_pause: false
      });
    },

    /**
    * Ember didRender hook define to make sure DOM rending is completed
    * Using jQuery to force focus on each render of the filter-checkboxes
    */
    didRender() {
      $('.carousel').carousel({
        pause: 'cycle'
      });
    },

    actions: {
      /**
       * Starts/Stops the slide of GIF as stories.
       * Also pauses the GIF from display.
       * @param {Object} - story - GIF data from  
       */
      stopAutoPlay(story) {
        console.log(story);
        this.toggleProperty('carousel_pause');
        console.log(this.get('carousel_pause'));
        const control_value = this.get('carousel_pause') ? 'pause' : 'cycle';
        $('#carouselExampleControls').carousel(control_value);
      }

    }
  });

  _exports.default = _default;
});
;define("insta-story-ui/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("insta-story-ui/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("insta-story-ui/helpers/app-version", ["exports", "insta-story-ui/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("insta-story-ui/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("insta-story-ui/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("insta-story-ui/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("insta-story-ui/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("insta-story-ui/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("insta-story-ui/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("insta-story-ui/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("insta-story-ui/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("insta-story-ui/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("insta-story-ui/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("insta-story-ui/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("insta-story-ui/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("insta-story-ui/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("insta-story-ui/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("insta-story-ui/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "insta-story-ui/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("insta-story-ui/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("insta-story-ui/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("insta-story-ui/initializers/export-application-global", ["exports", "insta-story-ui/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("insta-story-ui/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("insta-story-ui/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("insta-story-ui/router", ["exports", "insta-story-ui/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('stories');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("insta-story-ui/routes/stories", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    run,
    $,
    RSVP
  } = Ember;

  var _default = Ember.Route.extend({
    model() {
      console.log('model');
      const giffy_url = 'http://api.giphy.com/v1/gifs/trending?api_key=HavydXS9H2lPO3UOYtqf6SRT7C6sD0zQ';
      console.log(giffy_url);
      return new Promise((response, reject) => {
        $.ajax({
          url: giffy_url,
          type: 'GET',
          datatype: 'json',
          crossOrigin: true,
          context: this,
          crossDomain: true,
          timeout: 60000
        }).done(resp => {
          run(() => {
            console.log(resp);
            this.set('stories_data', resp.data);
            response(resp);
          });
        }).fail(resp => {
          run(() => {
            console.log('throw error ' + resp);
            reject(resp);
          });
        }).always(() => {
          run(() => {
            console.log('if spinner close it');
          });
        });
      });
    },

    afterModel(data) {
      this.set('stories_data', !Ember.isEmpty(data.data));
    },

    renderTemplate() {
      if (this.get('stories_data')) {
        return this.render();
      } else {
        console.log('else'); // return this.render('not-found');
      }
    }

  });

  _exports.default = _default;
});
;define("insta-story-ui/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("insta-story-ui/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Mxb0zXbt",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "insta-story-ui/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("insta-story-ui/templates/components/story-slide", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WPySxBHZ",
    "block": "{\"symbols\":[\"story\",\"index\"],\"statements\":[[7,\"main\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"carouselExampleControls\"],[11,\"class\",\"carousel slide\"],[11,\"data-ride\",\"carousel\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"carousel-inner\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"-each-in\",[[23,[\"story_data\"]]],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[27,\"if\",[[27,\"eq\",[[22,2,[]],\"0\"],null],\"carousel-item active\",\"carousel-item\"],null]],[9],[0,\"\\n                    \"],[7,\"img\"],[11,\"class\",\"d-block w-100 h-100\"],[12,\"src\",[22,1,[\"images\",\"fixed_height\",\"url\"]]],[9],[3,\"action\",[[22,0,[]],\"stopAutoPlay\",[22,1,[]]]],[10],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"carousel-control-prev\"],[11,\"href\",\"#carouselExampleControls\"],[11,\"role\",\"button\"],[11,\"data-slide\",\"prev\"],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"carousel-control-prev-icon\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Previous\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"carousel-control-next\"],[11,\"href\",\"#carouselExampleControls\"],[11,\"role\",\"button\"],[11,\"data-slide\",\"next\"],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"carousel-control-next-icon\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Next\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "insta-story-ui/templates/components/story-slide.hbs"
    }
  });

  _exports.default = _default;
});
;define("insta-story-ui/templates/header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+mWvD3UL",
    "block": "{\"symbols\":[],\"statements\":[[7,\"header\"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"div\"],[11,\"class\",\"container bg-dark\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-12\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"text-white\"],[9],[0,\"About\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "insta-story-ui/templates/header.hbs"
    }
  });

  _exports.default = _default;
});
;define("insta-story-ui/templates/stories", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/Xm+4qKh",
    "block": "{\"symbols\":[],\"statements\":[[15,\"header\",[]],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"            \\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-12\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"                \"],[1,[27,\"story-slide\",null,[[\"story_data\"],[[23,[\"model\",\"data\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":true}",
    "meta": {
      "moduleName": "insta-story-ui/templates/stories.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('insta-story-ui/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("insta-story-ui/app")["default"].create({"name":"insta-story-ui","version":"0.0.0"});
          }
        
//# sourceMappingURL=insta-story-ui.map
