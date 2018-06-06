var coolDown = false;

AFRAME.registerComponent('cam-snap', {
  init: function() {
    // The camera and the spot that was viewed
    var el = this.el.parentElement;
    var cameraEl = document.querySelector('#camera');

    // Contingency in case the user moves instead of closing the hud first
    var outerC = document.getElementById('outerCircle');
    var hud = document.querySelector('#hudGroup');
    this.el.addEventListener('click', function(evt) {

      if (!coolDown) {
        coolDown = true;
        setTimeout(function() {
          coolDown = false;
        }, 3000)
        outerC.setAttribute('position', '0 0 -.5');
        hud.object3D.position.y = 2;
        // Moves camera towards that photo and levels with the image itself
        var artSpotChoice = el;
        var artSpotWorldPosition = new THREE.Vector3();
        var artSpotWorldPostion = artSpotChoice.object3D.getWorldPosition(artSpotWorldPostion);
        cameraEl.object3D.position.y = 0;
        cameraEl.object3D.position.x = 0;
        cameraEl.object3D.position.z = artSpotChoice.object3D.getWorldPosition().z;

      }
    });
  }
});

AFRAME.registerComponent('poster', {
  schema: {
    author: {
      type: 'string',
      default: 'John Smith'
    },
    title: {
      type: 'string',
      default: 'Lorem Ipsum'
    },
    pos: {
      type: 'vec3'
    },
    rot: {
      type: 'vec3'
    },
    url: {
      type: 'string',
      default: 'imageNotFound.png'
    },
    placeHold: {
      type: 'string',
      default: 'imageNotFound.png'
    }
  },
  init: function() {
    var sceneEl = document.querySelector('a-scene');
    var posterEl = document.createElement('a-entity');
    posterEl.setAttribute("class", "poster");
    posterEl.setAttribute("title", this.data.title);
    posterEl.setAttribute("author", this.data.author);

    var posterTitle = document.createElement('a-text');
    var posterAuthor = document.createElement('a-text');
    var posterArtSpot = document.createElement('a-sphere');
    var posterViewSpot = document.createElement('a-sphere');
    var posterPicture = document.createElement('a-plane');
    var posterFrame = document.createElement('a-plane');
    var posterZoomer = document.createElement('a-plane');

    // Store the image url for the hud Pop-up
    posterEl.setAttribute('image', this.data.url);

    // Poster Title Attibutes
    posterEl.append(posterTitle);
    posterTitle.setAttribute('align', 'center');
    posterTitle.setAttribute('width', '3');
    posterTitle.setAttribute('length', '1');
    posterTitle.setAttribute("value", this.data.title);
    posterTitle.setAttribute('position', {
      x: 0,
      y: .5,
      z: 0
    })

    // Poster Author Attibutes
    posterEl.append(posterAuthor);
    posterAuthor.setAttribute('align', 'center');
    posterAuthor.setAttribute('width', '1');
    posterAuthor.setAttribute('length', '.333333');
    posterAuthor.setAttribute('value', "By: " + this.data.author);
    posterAuthor.setAttribute('position', {
      x: 0,
      y: .4,
      z: 0
    });

    // Poster ArtSpot Attributes
    posterEl.append(posterArtSpot);
    posterArtSpot.setAttribute('radius', .05);
    posterArtSpot.setAttribute('position', {
      x: 0,
      y: -.40,
      z: .05
    });
    posterArtSpot.setAttribute('cam-snap', "");

    // Poster Picture Attributes
    posterEl.append(posterPicture);
    posterPicture.setAttribute("src", "img/" + this.data.placeHold)
    posterPicture.setAttribute("class", 'imagePosition')
    posterPicture.setAttribute('position', "");
    posterPicture.setAttribute('width', '.9');
    posterPicture.setAttribute('height', '.56');
    posterPicture.setAttribute('position', {
      x: 0,
      y: 0,
      z: .002
    });

    // Poster Zoomer Attributes
    posterZoomer.setAttribute('opacity', '.1')
    posterEl.append(posterZoomer);
    posterZoomer.setAttribute('width', '.5');
    posterZoomer.setAttribute('height', '.375');
    posterZoomer.setAttribute('posterpop', '');
    posterZoomer.setAttribute('color', '#000000');
    posterZoomer.setAttribute('position', {
      x: 0,
      y: 0,
      z: .003
    });

    // Poster Frame Attributes
    posterEl.append(posterFrame);
    posterFrame.setAttribute("src", "img/pictureFrame.jpg")
    posterFrame.setAttribute('class', 'frame');
    posterFrame.setAttribute('width', '1.065');
    posterFrame.setAttribute('height', '.7');
    posterFrame.setAttribute('position', {
      x: 0,
      y: 0,
      z: .001
    });

    sceneEl.append(posterEl);
    posterEl.setAttribute('position', this.data.pos);
    posterEl.setAttribute('rotation', this.data.rot);
  }
});

AFRAME.registerComponent('hudmade', {
  schema: {
    pos: {
      type: 'vec3',
      default: {
        x: 0,
        y: 2,
        z: 0
      }
    },
    title: {
      type: 'string',
      default: 'Lorem Ipsum'
    },
    author: {
      type: 'string',
      default: "Hud Author"
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
    var hudTitle = document.createElement('a-text');
    var hudAuthor = document.createElement('a-text');

    hudGroup.setAttribute('id', 'hudGroup');
    hudGroup.setAttribute('position', this.data.pos);

    hudGroup.append(hudTitle)
    hudTitle.setAttribute('value', this.data.title);
    hudTitle.setAttribute('width', "3.25");
    hudTitle.setAttribute('align', 'center');
    hudTitle.setAttribute('position', {
      x: 0,
      y: .535,
      z: -.225
    });
    hudTitle.setAttribute('id', 'hudTitle');

    hudGroup.append(hudAuthor)
    hudAuthor.setAttribute('value', 'By: ' + this.data.author);
    hudAuthor.setAttribute('width', "1.85");
    hudAuthor.setAttribute('align', 'center');
    hudAuthor.setAttribute('position', {
      x: 0,
      y: .425,
      z: -.225
    });
    hudAuthor.setAttribute('id', 'hudAuthor');

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
    hudScreen.setAttribute('side', 'back');
    hudScreen.setAttribute('theta-start', '-212.5');
    hudScreen.setAttribute('theta-length', '3.25');
    hudScreen.setAttribute('src', 'img/imageNotFound.png');
    hudScreen.setAttribute('radius', '30');
    hudScreen.setAttribute('id', 'hudPoster');

    sceneEl.append(hudGroup);

  }
});

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

    // The hud parts themselves
    var hudPoster = document.getElementById('hudPoster');
    var hudTitle = document.getElementById('hudTitle');
    var hudAuthor = document.getElementById('hudAuthor');


    var leftCircle = document.getElementById('leftCircle');
    var rightCircle = document.getElementById('rightCircle');

    this.el.addEventListener('click', function(evt) {

      var rotY = cameraEl.getAttribute('rotation').y % 360;
      var spawnEnd = false;
      if (rotY > 0 && rotY < 90 || rotY > 270 && rotY < 360 || rotY < -270 && rotY > -360 || rotY < 0 && rotY > -90) {
        spawnEnd = true;
      }
      if (rotY > 90 && rotY < 180 || rotY > 180 && rotY < 270 || rotY > -270 && rotY < -180 || rotY > -180 && rotY < -90) {
        spawnEnd = false;
      }

      outerC.setAttribute('position', '0 0 .01');
      var artSpotChoice = el;
      var artSpotWorldPostion = artSpotChoice.object3D.getWorldPosition();

      // Opens the viewed image in a closer position
      hudPoster.setAttribute('src', "img/" + posterPic);

      // The title of the viewed image
      var viewTitle = posterParent.getAttribute('title');
      hudTitle.setAttribute('value', viewTitle);

      // The author of the viewed image
      var viewAuthor = posterParent.getAttribute('author');
      hudAuthor.setAttribute('value', 'By: ' + viewAuthor);

      // Move the camera itself and then move the hud
      // a little off from the new camera position+
      cameraEl.object3D.position.y = 0;
      cameraEl.object3D.position.x = 0;
      cameraEl.object3D.position.z = artSpotWorldPostion.z;
      var camPos = cameraEl.object3D.getWorldPosition();
      if (spawnEnd) {
        hudMain.setAttribute('position', camPos);
        hudMain.object3D.position.z -= .260;
        hudMain.setAttribute('rotation', {
          x: 0,
          y: 0,
          z: 0
        });
      } else {
        hudMain.setAttribute('position', camPos);
        hudMain.object3D.position.z += .260;
        hudMain.setAttribute('rotation', {
          x: 0,
          y: 180,
          z: 0
        });
      }
    });
  }
});

AFRAME.registerComponent('room', {
  schema: {
    length: {
      type: 'number',
      default: 1
    }
  },
  init: function() {
    var sceneEl = document.querySelector('a-scene');
    var hallEl = document.createElement('a-entity');
    hallEl.setAttribute("class", "hall");

    var hallBackRight = document.createElement('a-plane');
    var hallBackLeft = document.createElement('a-plane');
    var hallTop = document.createElement('a-plane');
    var hallFloor = document.createElement('a-plane');

    var len = this.data.length;
    var evensLength = "" + (len * 1.5)
    var oddsLength = "" + (len * 1.5)
    var ceilingLength = "" + (len * 1.5)
    var floorLength = "" + (len * 1.5)

    hallEl.append(hallBackRight);
    hallBackRight.setAttribute('side', 'front');
    hallBackRight.setAttribute('width', evensLength);
    hallBackRight.setAttribute('height', '1.25');
    hallBackRight.setAttribute('src', 'img/woodWalls.jpeg');
    hallBackRight.setAttribute('rotation', '0 90 0');
    hallBackRight.setAttribute('position', {
      x: -.875,
      y: 0,
      z: -(len * 1.5) / 2 + .75
    });

    hallEl.append(hallBackLeft);
    hallBackLeft.setAttribute('side', 'back');
    hallBackLeft.setAttribute('width', evensLength);
    hallBackLeft.setAttribute('height', '1.25');
    hallBackLeft.setAttribute('src', 'img/woodWalls.jpeg');
    hallBackLeft.setAttribute('rotation', '0 90 0');
    hallBackLeft.setAttribute('position', {
      x: .875,
      y: 0,
      z: -(len * 1.5) / 2 + .75
    });

    hallEl.append(hallTop);
    hallTop.setAttribute('side', 'front');
    hallTop.setAttribute('width', ceilingLength);
    hallTop.setAttribute('height', 1.75);
    hallTop.setAttribute('rotation', '90 90 0');
    hallTop.setAttribute('position', {
      x: 0,
      y: .625,
      z: -((len * 1.5) / 2) + .75
    });
    hallTop.setAttribute('src', 'img/woodWalls.jpeg');

    hallEl.append(hallFloor);
    hallFloor.setAttribute('side', 'back');
    hallFloor.setAttribute('width', ceilingLength);
    hallFloor.setAttribute('height', 1.75);
    hallFloor.setAttribute('rotation', '90 90 0');
    hallFloor.setAttribute('position', {
      x: 0,
      y: -.625,
      z: -((len * 1.5) / 2) + .75
    });
    hallFloor.setAttribute('src', 'img/woodWalls.jpeg');

    sceneEl.append(hallEl);
  }
});

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

AFRAME.registerComponent('wallblock', {
  schema: {
    length: {
      type: 'number',
      default: 1
    }
  },
  tick: function() {
    var cameraEl = document.querySelector('#camera');
    if (cameraEl.object3D.position.x > .75) {
      cameraEl.object3D.position.x = .75;
    }
    if (cameraEl.object3D.position.x < -.75) {
      cameraEl.object3D.position.x = -.75;
    }
    if (cameraEl.object3D.position.z > .65) {
      cameraEl.object3D.position.z = .65;
    }
    if (cameraEl.object3D.position.z < (-1.5 * this.data.length) + .85) {
      cameraEl.object3D.position.z = (-1.5 * this.data.length) + .85;
    }
  }
});
