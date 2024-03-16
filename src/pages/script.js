import JSConfetti from 'js-confetti'

const moj = document.getElementById("collab");
if (moj !== null) {
  moj.addEventListener('click', () => {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    // show modalpopup
    modal.style.display = "block";

    // close modalpopup with 'X'
    span.addEventListener('click', function() {
      modal.style.display = "none";
    });

    // closing modalpopup window even when clicking outside the window
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
}



const jsConfetti = new JSConfetti()
let pressKey = '';
window.addEventListener('keypress', (e)=> {
  pressKey += e.key;
  pressKey = pressKey.slice(-5);
  if(pressKey ==='magic'){
    //first confetti
    jsConfetti.addConfetti({
      confettiRadius: 2,
      confettiNumber: 1500
    })
    //second confetti
    .then(()=> jsConfetti.addConfetti({
      confettiColors: [
        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
      ],
      confettiRadius: 2,
      confettiNumber: 1500
    }));

  }

})
