import Ember from 'ember';

const CUISINE_OPTIONS = [
    { name: 'african', title: 'African' },
    { name: 'american', title: 'American' },
    { name: 'barbecue', title: 'Barbecue' },
    { name: 'cafe', title: 'Cafe' },
    { name: 'chinese', title: 'Chinese' },
    { name: 'czech/slovak', title: 'Czech / Slovak' },
    { name: 'german', title: 'German' },
    { name: 'indian', title: 'Indian' },
    { name: 'japanese', title: 'Japanese' },
    { name: 'mexican', title: 'Mexican' },
    { name: 'pizza', title: 'Pizza' },
    { name: 'thai', title: 'Thai' },
    { name: 'vegetarian', title: 'Vegetarian' }
];

export default Ember.Controller.extend({

    CUISINE_OPTIONS,

    /**
     * Filter criterias.
     */
    filterCuisins: [],
		filterName: null,
		filterRating: null,

    /**
     * Filter function.
     */
    filteredRestaurants: Ember.computed('model', 'filterCuisins', 'filterRating', 'filterName', function() {
        let filteredRestaurants = this.get('model');

        const filterCuisins = this.get('filterCuisins');

        // Filter by cuisine
        if (Ember.isPresent(filterCuisins)) {
            filteredRestaurants = filteredRestaurants.filter((item) =>
                filterCuisins.mapBy('name').includes(item.cuisine)
            );
        }

				const filterName = this.get('filterName');

				if (filterName) {
            filteredRestaurants = filteredRestaurants.filter((restaurant) =>
							restaurant.name.toLowerCase().includes(filterName.toLowerCase())
            );					
				}

				const filterRating = this.get('filterRating');

				if (filterRating) {
            filteredRestaurants = filteredRestaurants.filterBy('rating', filterRating);
        }

        return filteredRestaurants;
    }),

		actions:{
    	clear() {
    		this.set('filterCuisins', []);
    		this.set('filterRating', null);
    		this.set('filterName', null);
    		this.set('filteredRestaurants', this.get('model'));
    	},			
			updateRating: function(params){
      		var restaurant = params.item,
          		rating = params.rating;
					Ember.set(restaurant,'rating',rating);
					//return restaurant;
			},
        updateFilterRating(stars) {
            this.set('filterRating', stars.rating);
        }			

		}


});
