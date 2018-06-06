AFRAME.registerComponent('loader', {
  init: function() {
    $.ajax({
        url: "data/spreadSheet.json"
      })
      .done(function(url) {
        sheetUrl = url["url"];
        $.ajax({
          url: sheetUrl
        }).done(function(url) {
          var spreadSheet = $.csv.toArrays(url);
          // Converts the array into a JSON file
          var dict = [];
          spreadSheet.forEach(function(row, index) {
            if (index != 0) {
              dict[index] = {
                "author": row[0],
                "name": row[1],
              }
            }
          });
          console.log(dict);
        });
      });

    // For each member of the gallery json a file is made
    $.get('data/gallery.json', function(data) {
      // The scene which it's all placed in and the length of that scene
      var sceneEl = document.querySelector('a-scene');
      var roomLength = Math.ceil(data.length / 2);

      // Each art piece part is made
      data.forEach(function(val, index) {
        var rot = 90 * Math.pow(-1, index % 2);
        var posterSide = -.875 * Math.pow(-1, index % 2);
        var posterMarch = Math.floor(index / 2) * -1.5;
        var poster = document.createElement('a-entity');
        var place = 'thumb/Poster_' + (index + 1) + '.png';
        var img = val['img'];
        var piece = val['title'];
        var maker = val['author'];
        poster.setAttribute("poster", {
          title: piece,
          author: maker,
          pos: {
            x: posterSide,
            y: 0,
            z: posterMarch
          },
          rot: {
            x: 0,
            y: rot,
            z: 0
          },
          placeHold: place,
          url: img


        });
        sceneEl.append(poster);
      })

      // extend the hallway
      var room = document.createElement('a-entity');
      room.setAttribute("room", {
        length: roomLength
      })
      sceneEl.append(room);


      // The ending door at the end of the hall
      var endWall = document.createElement('a-plane');
      endWall.setAttribute('position', {
        x: 0,
        y: 0,
        z: -((1.5 * roomLength - 1) + .25)
      });
      endWall.setAttribute('src', 'img/doubleDoor.jpg');
      endWall.setAttribute('width', '1.75');
      endWall.setAttribute('height', '1.25');
      endWall.setAttribute('side', 'front');
      sceneEl.append(endWall);

      // Create the Hud that the images are placed upon
      var theHud = document.createElement('a-entity');
      theHud.setAttribute('hudmade', {
        pos: {
          x: 0,
          y: 2,
          z: 0
        }
      })
      sceneEl.append(theHud);
    });

  }
});


///gproxy/?id=e/2PACX-1vTRYTjMo8H60rQLH5qRaunUdAfDumZe6xdynEL-9EzrDcIMyArxPeWzI15l6GvUHv08Mfw5OKNq0kpS&gid=0
