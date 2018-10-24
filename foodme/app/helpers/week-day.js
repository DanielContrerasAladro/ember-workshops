import Ember from 'ember';

export function weekDay(params/*, hash*/) {
	const number = params[0];

	const names = {
		0: 'sunday',
		1: 'monday',
		2: 'tuesday',
		3: 'wednesday',
		4: 'thursday',
		5: 'friday',
		6: 'saturday',
	};

	return names[number] || '';
}

export default Ember.Helper.helper(weekDay);
