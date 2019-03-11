import Route from '@ember/routing/route';
const {run, $, RSVP} = Ember;

export default Route.extend({

    model() {
        console.log('model');
        const giffy_url = 'http://api.giphy.com/v1/gifs/trending?api_key=HavydXS9H2lPO3UOYtqf6SRT7C6sD0zQ';
        console.log(giffy_url); 

        return new Promise ((response, reject)=> {
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
                console.log(resp);
                this.set('stories_data', resp.data);
                response(resp);
            });
        })
        .fail( resp => {
            run(() => {
                console.log('throw error ' + resp); 
                reject(resp);            
            });
        })
        .always(()=> {
            run(() => {
                console.log('if spinner close it');         
            });
        });
        });
    },
      
    afterModel(data) {
        this.set('stories_data',  !( Ember.isEmpty(data.data)) );
    },

	renderTemplate() {
		if( this.get('stories_data') ) {
			return this.render();
		} else {
            console.log('else');
			// return this.render('not-found');
		}
	},
     
});
