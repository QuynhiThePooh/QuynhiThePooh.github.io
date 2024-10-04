const navbar = document.querySelector('header')
const links = document.querySelectorAll('.linky')





document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }



const griditem = document.querySelectorAll('#mywork .grid-item');
const a = document.querySelectorAll('a');
const cursor = document.querySelector('.cursor');

griditem.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('gridhovered');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('gridhovered');
    });
});

a.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('linkhovered');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('linkhovered');
    });
});

// console.log('The value is:', value);
