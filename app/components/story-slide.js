import Component from '@ember/component';
const {$} = Ember;
const document = window.document;
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
        stopAutoPlay( story) {
            this.toggleProperty('carousel_pause');
            console.log(story);
            const control_value = this.get('carousel_pause') ? 'pause' : 'cycle';
            $('#carouselExampleControls').carousel(control_value);
            // const myVideo = document.getElementById('gifID'); 
            // console.log('myVideo before');
            // console.log(myVideo);
            // if (myVideo.paused) {
            //     myVideo.play(); 
            //     $('#carouselExampleControls').carousel('cycle');
            // } else {
            //     myVideo.pause();
            //     $('#carouselExampleControls').carousel('pause');
            // }

            // console.log('myVideo after');
            // console.log(myVideo);
        }
    }
});
