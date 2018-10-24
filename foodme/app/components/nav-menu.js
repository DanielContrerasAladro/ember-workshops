import Ember from 'ember';

const languages = [{
	name: 'Español',
	code: 'es'
}, {
	name: 'English',
	code: 'en'
}];


export default Ember.Component.extend({
	
    isMenuOpened: false,

		i18n: Ember.inject.service(),

		languages,

		selectedLanguage: languages[0],		

		onSelectedLanguageChange: Ember.observer('selectedLanguage', function() {
			this.set('i18n.locale', this.get('selectedLanguage.code'));
		}),		

    actions: {
        toggleMenu(){
            this.toggleProperty('isMenuOpened');
        }			
    }

});
