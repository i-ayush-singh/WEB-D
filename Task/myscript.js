symbol = document.querySelector('.symbol')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
// const button=document.querySelectorAll('.mybutton')
symbol.addEventListener('click',()=>{
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');   
    

})

const squares = document.querySelectorAll('.grid-item');
      const originalColors = [];
      const clickedSquares = [];

      squares.forEach((square, index) => {
        originalColors.push(square.style.backgroundColor);

        square.addEventListener('click', () => {
          square.style.backgroundColor = 'red';
          clickedSquares.push(index);

          if (index === squares.length - 1) {
            clickedSquares.forEach((clickedSquareIndex, i) => {
              setTimeout(() => {
                squares[clickedSquareIndex].classList.add('reset');
                squares[clickedSquareIndex].style.backgroundColor = originalColors[clickedSquareIndex];

                if (i === clickedSquares.length - 1) {
                  clickedSquares.length = 0;
                }

              }, i * 1000);
            });
          }
        });
      });