import route from '@ember/routing/route';

export default route.extend({

  redirect: function() {
    this.transitionTo('notebook');
  }
});