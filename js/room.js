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
