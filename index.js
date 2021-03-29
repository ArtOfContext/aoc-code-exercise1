for (var i == 0; i < 3; i++) {
  for (var j == 0; j < 3; j++) {
      var tile = document.createElement("div");
      tile.style.left = i * 300;
      tile.style.top = j * 300;
      tile.className = 'tile';
      document.body.appendChild(tile);
  }
}