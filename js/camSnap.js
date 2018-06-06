AFRAME.registerComponent('cam-snap', {
  init: function() {
    // The camera and the spot that was viewed
    var el = this.el.parentElement;
    var cameraEl = document.querySelector('#camera');

    // Contingency in case the user moves instead of closing the hud first
    var outerC = document.getElementById('outerCircle');
    var hud = document.querySelector('#hudGroup');
    this.el.addEventListener('click', function(evt) {

      outerC.setAttribute('position', '0 0 -.5');
      hud.object3D.position.y = 2;
      // Moves camera towards that photo and levels with the image itself
      var artSpotChoice = el;
      var artSpotWorldPosition = new THREE.Vector3();
      var artSpotWorldPostion = artSpotChoice.object3D.getWorldPosition(artSpotWorldPostion);
      cameraEl.object3D.position.y = 0;
      cameraEl.object3D.position.x = 0;
      cameraEl.object3D.position.z = artSpotChoice.object3D.getWorldPosition().z;
    });
  }
});
