document
  .addEventListener("DOMContentLoaded", () => {
    console.log("document succesfully loaded, baby!")
    document.getElementById('btnClicky'); btnClicky.addEventListener('click', btnClicky);
  }
);

function btnClicky() {
  console.log('in btnClicky event');
  document.getElementById('btnClicky').style.transform = 'rotate(15deg)'
  console.log('after rotation');
  //querySelector('.yourClassname').
  //.forEach(el => { el.style.transform = 'rotate(15deg)'; });

}

 // const btnClicky = document.getElementById('btnClicky'); btnClicky.addEventListener('click', () => { // ...now do DOM stuff });
