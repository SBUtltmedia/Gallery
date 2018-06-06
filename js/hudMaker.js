AFRAME.registerComponent('hudmade', {
  pos: {
    type: 'vec3',
    default: {
      x: 0,
      y: 2,
      z: 0
    }
  },
  init: function() {
    // Used to find the distance between two objects
    // From there the hud display position (Left/Right) will be chosen
    //var obj1 =  document.querySelector('a-triangle').object3D.getWorldPosition();
    //var obj2 =  document.querySelector('a-triangle')object3D.getWorldPosition();
    //var camera =  document.querySelector('a-camera');

    var hudGroup = document.createElement('a-entity');
    var sceneEl = document.querySelector('a-scene');
    var hudXLeft = document.createElement('a-box');
    var hudXRight = document.createElement('a-box');
    var hudScreen = document.createElement('a-curvedImage');

    hudGroup.setAttribute('id', 'hudGroup');
    hudGroup.setAttribute('wallblock','');
    hudGroup.setAttribute('position', this.data.pos);

    hudGroup.append(hudXLeft)
    hudXLeft.setAttribute('position', {
      x: -.700,
      y: .445,
      z: -.25
    });
    hudXLeft.setAttribute('rotation', '10 15 -45');
    hudXLeft.setAttribute('scale', '.445 .115 .415');
    hudXLeft.setAttribute('depth', '0.1025');
    hudXLeft.setAttribute('height', '.8');
    hudXLeft.setAttribute('width', '.8');
    hudXLeft.setAttribute('color', '#be68e8');
    hudXLeft.setAttribute('hudcloser', '');

    hudGroup.append(hudXRight)
    hudXRight.setAttribute('position', {
      x: -.700,
      y: .445,
      z: -.25
    });
    hudXRight.setAttribute('rotation', '10 15 45');
    hudXRight.setAttribute('scale', '.445 .115 .415');
    hudXRight.setAttribute('depth', '0.1025');
    hudXRight.setAttribute('height', '.8');
    hudXRight.setAttribute('width', '.8');
    hudXRight.setAttribute('color', '#be68e8');
    hudXRight.setAttribute('hudcloser', '');

    hudGroup.append(hudScreen)
    hudScreen.setAttribute('scale', '.75 .75 .75');
    hudScreen.setAttribute('transparent', 'true');
    hudScreen.setAttribute('position', '-.36 0 22.25');
    hudScreen.setAttribute('rotation', '0 30 0');
    hudScreen.setAttribute('height', '1');
    hudScreen.setAttribute('theta-start', '-212.5');
    hudScreen.setAttribute('theta-length', '3.25');
    hudScreen.setAttribute('src', 'img/imageNotFound.png');
    hudScreen.setAttribute('radius', '30');
    hudScreen.setAttribute('id', 'hudPoster');

    sceneEl.append(hudGroup);

  }
});

// Find the closer object to the camera
function distance(obj1,obj2,camera)
{
  var camPos = camera.object3D.getWorldPosition();
  console.log(obj1,obj2,camPos);
}
