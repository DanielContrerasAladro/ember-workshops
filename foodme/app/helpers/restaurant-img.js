import Ember from 'ember';

export function restaurantImg(params/*, hash*/) {
  return `${document.location.origin}/img/restaurants/${params}.jpg`;
}

export default Ember.Helper.helper(restaurantImg);
