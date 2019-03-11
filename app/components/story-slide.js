import Component from '@ember/component';

export default Component.extend({
    init(){
        this._super();
        this.setProperties({
            carousel_pause: false,
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

    actions: {
        /**
         * Starts/Stops the slide of GIF as stories.
         * Also pauses the GIF from display.
         * @param {Object} - story - GIF data from  
         */
        stopAutoPlay( story ) {
            console.log(story);
            this.toggleProperty('carousel_pause');
            console.log(this.get('carousel_pause'));
            const control_value = this.get('carousel_pause') ? 'pause' : 'cycle';
            $('#carouselExampleControls').carousel(control_value);
        }
    }
});
