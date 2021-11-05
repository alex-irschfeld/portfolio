makeResizableDiv('.resizable');
function makeResizableDiv(div) 
{
  const element  = document.querySelector(div);
  const about    = document.querySelector('#about-wrapper');
  const resizers = document.querySelectorAll(div + ' .resizer')

  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) 
    {
      e.preventDefault()
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) 
    {
      if (currentResizer.classList.contains('right')) 
      {
        element.style.width = e.pageX - element.getBoundingClientRect().left + 'px';
        about.style.width = about.getBoundingClientRect().left + (window.innerWidth - (e.pageX - element.getBoundingClientRect().left) * 2) + 'px';
        // console.log(about.getBoundingClientRect().right);
        
        let bodyTag = document.querySelector('body');
        bodyTag.style.cursor = 'url("/../images/scaler.svg"), auto';
      }
    }
    
    function stopResize() 
    {
      window.removeEventListener('mousemove', resize)
      let bodyTag = document.querySelector('body');
        bodyTag.style.cursor = 'url("/../images/cursor.svg"), auto';
    }
  }
}
