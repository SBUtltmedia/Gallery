AFRAME.registerComponent('wallblock', {
  tick: function()
  {
    var cameraEl = document.querySelector('#camera');
      console.log(cameraEl.object3D.position);
      if(cameraEl.object3D.position.x > .875)
      {
        cameraEl.object3D.position.x = .875;
      }
      if(cameraEl.object3D.position.x < -.875)
      {
        cameraEl.object3D.position.x = -.875;
      }
      if(cameraEl.object3D.position.z > .75)
      {
        cameraEl.object3D.position.z = .75;
      }

  }
});
