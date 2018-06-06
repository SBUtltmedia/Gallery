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

    var posterTitle = document.createElement('a-text');
    var posterAuthor = document.createElement('a-text');
    var posterArtSpot = document.createElement('a-sphere');
    var posterPicture = document.createElement('a-plane');
    var posterFrame = document.createElement('a-plane');
    var posterZoomer = document.createElement('a-plane');

    // Store the image url for the hud Pop-up
    posterEl.setAttribute('image',this.data.url);

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
      z: .025
    });
    posterArtSpot.setAttribute('cam-snap', "");

    // Poster Picture Attributes
    posterEl.append(posterPicture);
    posterPicture.setAttribute("src", "img/" + this.data.placeHold)
    posterPicture.setAttribute("class", 'imagePosition')
    posterPicture.setAttribute('position',"");
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
