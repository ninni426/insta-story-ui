import Ember from 'ember';
import Route from '@ember/routing/route';
const {run, $} = Ember;

export default Route.extend({

    model() {
        // $( '#refresh_bmp_modal' ).modal('show');
		// $( '#refresh_bmp_modal' ).modal({
		// 	backdrop: 'static',
		// 	keyboard: false
		// });
        const giffy_url = 'http://api.giphy.com/v1/gifs/trending?api_key=HavydXS9H2lPO3UOYtqf6SRT7C6sD0zQ';
        return new Promise ( (response, reject) => {
            $.ajax({ 
            url: giffy_url,
            type: 'GET',
            datatype: 'json',
            crossOrigin: true,
            context: this,
            crossDomain: true,
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
                    console.log('throw error ' + resp); 
                    reject(resp);            
                });
            })
            .always( () => {
                run( () => {
                    console.log('if spinner close it');         
                });
            });
        });
    },
      
    afterModel(response) {
        this.set('stories_data',  !( Ember.isEmpty(response.data)) );
    },

	renderTemplate() {
        // Remove loading spinner and display last fetch timestamp
		// Ember.$('#refresh_bmp_modal').modal('hide');
		if( this.get('stories_data') ) {
			return this.render();
		} else {
            console.log('else');
			// return this.render('not-found');
		}
	},
     
});
