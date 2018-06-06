AFRAME.registerComponent('photozoom', {
  init: function() {
    // The camera and the spot that was viewed
    var el = this.el;
    var cameraEl = document.querySelector('#camera');
    this.el.addEventListener('click', function(evt) {

      // When looking at photo make cursor only the black dot, when it is closed make the cursor normal sized
    });
  }
});
// code from missing project, work it into this one
/*function showPoster(src) {

  var id =getIdFromSrc(src);

  var poster = document.getElementById('posterHud')

  poster.setAttribute("visible", true);
  poster.emit('hudShow');
  poster.setAttribute('src',getItem(markers[id].src).path+posterExtension );
  console.log(markers[id].src ,getItem(markers[id].src) )
  poster.setAttribute('rotation', {
    x: markers[id].x,
    y: markers[id].y

  });
//recreateCamera(startingAngle)
}*/
