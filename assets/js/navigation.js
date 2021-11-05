function toggleNav()
{
  let nav = document.querySelector('#menu ul');
  let menuBtn = document.querySelector('#menu button');

  nav.classList.toggle('show');
  
  if(nav.classList.contains('show'))
  {
    menuBtn.innerHTML = 'close';
  } else {
    menuBtn.innerHTML = 'menu';
  }
}

setRandomColorOnHover();
function setRandomColorOnHover()
{
  let listTags = document.querySelectorAll('nav li a');
  listTags.forEach(element => 
  {
    element.addEventListener('mouseenter', function()
    {
      let r = getRandomArbitrary(0, 255);
      let g = getRandomArbitrary(0, 255);
      let b = getRandomArbitrary(0, 255);
      let a = 1;

      element.style.color = `rgba(${r}, ${g}, ${b}, ${a})`;
    });

    element.addEventListener('mouseleave', function()
    {
      element.style.color = 'white';
    }) 
  });
}

// changeMenuToClose();
// function changeMenuToClose()
// {
//   let nav = document.querySelector('#menu ul');
  
// }