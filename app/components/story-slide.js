import Ember from 'ember';
import Component from '@ember/component';

const {$, computed} = Ember;
const document = window.document;
export default Component.extend({

    init(){
        this._super();
        this.setProperties({
            toggle_view: true,
        });
    },

    /**
	 * Ember didRender hook define to make sure DOM rending is completed
	 * Using jQuery to force focus on each render of the filter-checkboxes
	 */
	didRender() {
		$('.carousel').carousel({
            pause: 'cycle',
        });
    },


	toggle_display: computed('toggle_view', function() {
        const bg_color = this.get('toggle_view') ? "000" : "fff";
        const text_color = this.get('toggle_view') ? "fff" : "000";
        $('body').append(`<style type="text/css">body{background:#${bg_color};color:#${text_color}}</style>`);
        return this.get('toggle_view');
    }),

    actions: {

        /**
         * Starts/Stops the slide of GIF as stories.
         * Also pauses the GIF from display.
         * @param {String} - id - specific gif id
         */
        stopAutoPlay( id ) {
            const myVideo = document.getElementById(id);
            if ( myVideo.paused ) {
                myVideo.play(); 
                $('#carouselID').carousel('cycle');
            } else {
                myVideo.pause();
                $('#carouselID').carousel('pause');
            }
        }
    }
});
