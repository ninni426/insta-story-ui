import Route from '@ember/routing/route';
const {$} = Ember;

export default Route.extend({

    init() {
        this._super();
        $('body').append('<style type="text/css">body{background:#000;color:#fff}</style>');
    }
    
});
