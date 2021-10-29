function cursorLight(event)
{
  let light        = document.querySelector('#light');
  let startText    = document.querySelector('#start-wrapper h1');
  let bodyTag      = document.querySelector('body');
  let startWrapper = document.querySelector('#start-wrapper');

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
  startWrapper.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  startText.style.color         = `rgba(${r}, ${g}, ${b}, ${a})`;

  startText.style.fontVariationSettings = `"wdth" ${wdthAxis}, "wght" ${wghtAxis}`;

  startText.style.letterSpacing = `${letterSpace}` + 'em';
  startText.style.lineHeight = `${line}`;
}

function zoomOnClick()
{
  let light = document.querySelector('#light');
  let bodyTag = document.querySelector('body');
  let startWrapper = document.querySelector('#start-wrapper');

  light.style.transform = 'scale(10)';

  if(light.style.transform == 'scale(10)')
  {
    startWrapper.style.opacity    = '0';
    setTimeout(function()
    {
      startWrapper.style.display = 'none';
      startWrapper.style.cursor  = 'auto';
      light.style.display        = 'none';
      bodyTag.style.backgroundColor = 'black';
      
    }, 500);
  };

  
}


