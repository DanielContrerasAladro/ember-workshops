import Ember from 'ember';

export default Ember.Route.extend({
	model({id}){
		const parentModel = this.modelFor('restaurants') || [];
		return parentModel.findBy('id', id);
	}	
});
