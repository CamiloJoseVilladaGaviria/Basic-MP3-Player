document
  .getElementById("audioFile")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const audioPlayer = document.getElementById("player");
      audioPlayer.src = URL.createObjectURL(file);
      audioPlayer.play();
    }
  });
