AFRAME.registerComponent('posterpop', {
  init: function() {
    // The Zoom Spot
    var el = this.el;
    // The Poster parent
    var posterParent = this.el.parentElement;
    // The Image we take
    var posterPic = posterParent.getAttribute('image');
    // The Camera moving
    var cameraEl = document.querySelector('#camera');
    var outerC = document.getElementById('outerCircle');
    // The main Hud
    var hudMain = document.querySelector('#hudGroup');
    // The hudPoster itself
    var hudPoster = document.getElementById('hudPoster');

    this.el.addEventListener('click', function(evt) {
      outerC.setAttribute('position', '0 0 .01');
      var artSpotChoice = el;
      var artSpotWorldPostion = artSpotChoice.object3D.getWorldPosition();

      // Opens the viewed image in a closer position
      hudPoster.setAttribute('src', "img/" + posterPic);

      // Move the camera itself and then move the hud
      // a little off from the new camera position
      cameraEl.object3D.position.y = 0;
      cameraEl.object3D.position.x = 0;
      cameraEl.object3D.position.z = artSpotWorldPostion.z;

      var camPos = cameraEl.object3D.position;
      hudMain.setAttribute('position', camPos);
      hudMain.object3D.position.z -= .260;
    });
  }
});
