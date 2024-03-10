let gif = document.getElementById('gif');

setInterval(() => {
    let blurAmount = Math.random() * 10;
    gif.style.filter = `blur(${blurAmount}px)`;
}, 100);

setInterval(() => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    gif.style.position = 'absolute';
    gif.style.left = `${x}px`;
    gif.style.top = `${y}px`;
}, 300);

document.addEventListener('mousemove', function(e) {
  let percentage = e.clientY / window.innerHeight;
  let colorValue = interpolateColor("#1b1919", "#262525", percentage);
  document.body.style.backgroundColor = colorValue;
});

function interpolateColor(color1, color2, factor) {
  let result = "#";
  for(let i = 1; i <= 5; i += 2) {
      let color1Value = parseInt(color1.slice(i, i + 2), 16);
      let color2Value = parseInt(color2.slice(i, i + 2), 16);
      let interpolatedValue = Math.round(color1Value + (color2Value - color1Value) * factor);
      result += ("0" + interpolatedValue.toString(16)).slice(-2);
  }
  return result;
}

let visualArchiveText = document.getElementById('visual-archive-text');
let selectedImage = document.getElementsByClassName('selected-image')[0];
visualArchiveText.style.cursor = 'pointer';


let isImageVisible = false;

visualArchiveText.addEventListener('click', function () {
  if (!isImageVisible) {
    visualArchiveText.style.filter = 'blur(1px)';
    selectedImage.style.display = 'block';
    visualArchiveText.setAttribute('title', 'close');
    isImageVisible = true;
  } else {
    visualArchiveText.style.filter = 'none';
    selectedImage.style.display = 'none';
    visualArchiveText.setAttribute('title', 'reveal');
    isImageVisible = false;
  }
});

