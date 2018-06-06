AFRAME.registerComponent('hudcloser', {
  init: function() {

    // The hud group
    var el = this.el.parentElement;
    var outerC = document.getElementById('outerCircle');
    this.el.addEventListener('click', function(evt) {
      outerC.setAttribute('position', '0 0 -.5');
      el.object3D.position.y = 2;
    });
  }
});
