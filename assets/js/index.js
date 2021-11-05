function cursorLight(event)
{
  let light        = document.querySelector('#light');
  let indexText    = document.querySelector('#index-wrapper h1');
  let bodyTag      = document.querySelector('body');
  let indexWrapper = document.querySelector('#index-wrapper');

  let mouseX = event.clientX;
  let mouseY = event.clientY;

  light.style.left = mouseX + 'px';
  light.style.top  = mouseY + 'px'; 

  let wdthAxis    = map(mouseY, 0, window.innerHeight, 200, 1);
  // let italAxis = map(mouseX, 0, window.innerWidth, 12, 0);
  let wghtAxis    = map(mouseX, 0, window.innerWidth, 950, 1);
  let letterSpace = map(mouseY, 0, window.innerHeight, 0.005, 0.015);
  let line        = map(mouseY, 0, window.innerHeight, 0.95, 1.15);

  let r = map(mouseX, 0, window.innerWidth, 0, getRandomArbitrary(0, 255));
  let g = map(mouseX, 0, window.innerWidth, 0, getRandomArbitrary(0, 50));
  let b = map(mouseY, 0, window.innerHeight, 200, getRandomArbitrary(200, 255));
  let a = map(mouseY, 0, window.innerHeight, 1, 1);
  // let cntrAxis = map(mouseY, 0, window.innerHeight, 100, 0);

  // light.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  indexWrapper.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  indexText.style.color         = `rgba(${r}, ${g}, ${b}, ${a})`;

  indexText.style.fontVariationSettings = `"wdth" ${wdthAxis}, "wght" ${wghtAxis}`;

  indexText.style.letterSpacing = `${letterSpace}` + 'em';
  indexText.style.lineHeight = `${line}`;
}

function zoomOnClick()
{
  let light = document.querySelector('#light');
  let bodyTag = document.querySelector('body');
  let indexWrapper = document.querySelector('#index-wrapper');

  light.style.transform = 'scale(10)';

  if(light.style.transform == 'scale(10)')
  {
    indexWrapper.style.opacity    = '0';
    setTimeout(function()
    {
      indexWrapper.style.display = 'none';
      light.style.display        = 'none';
      window.location.href = "start.html";
    }, 500);
  };

  
}



