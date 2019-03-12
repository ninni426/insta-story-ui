import Ember from 'ember';
import Route from '@ember/routing/route';

const {run, $} = Ember;
export default Route.extend({

    model() {
        const giffy_url = 'http://api.giphy.com/v1/gifs/trending?api_key=HavydXS9H2lPO3UOYtqf6SRT7C6sD0zQ';
        return new Promise ( (response, reject) => {
            $.ajax({ 
                url: giffy_url,
                type: 'GET',
                datatype: 'json',
                crossOrigin: true,
                context: this,
                timeout: 60000
            })
            .done( resp => {
                run( () => {
                    this.set('stories_data', resp.data);
                    response(resp);
                });
            })
            .fail( resp => {
                run( () => {
                    console.log('error scenario');
                    this.transitionTo('/not-found')
                    reject(resp);     
                });
            });
        });
    },

	renderTemplate() {
		this.render();
	},
     
});
