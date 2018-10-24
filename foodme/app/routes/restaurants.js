import Ember from 'ember';

const host = 'https://raw.githubusercontent.com/shokmaster/ember-workshops/master/';
const restaurantsUrl = `${host}resources/restaurants.json`;

export default Ember.Route.extend({
	i18n: Ember.inject.service(),
	model: function() {
		const i18nService = this.get('i18n'); 
		i18nService.set('locale', 'es');		
		return Ember.$.getJSON(restaurantsUrl);
	}	
});
