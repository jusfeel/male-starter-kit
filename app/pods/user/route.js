import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const userId = params.user_id;
    console.log(userId);
    if(userId !== "wanghao") {
      this.transitionTo('about');
    }else{
      this.transitionTo('search');
    }
  }
});
