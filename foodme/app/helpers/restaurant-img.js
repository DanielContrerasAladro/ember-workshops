import Ember from 'ember';

export function restaurantImg(params/*, hash*/) {
  return `img/restaurants/${params}.jpg`;
}

export default Ember.Helper.helper(restaurantImg);
