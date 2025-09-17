function handleBtnClick() {
  console.log('in btnClicky event');
  alert("Message Has Been Sent!!!");
  console.log('after message sent');
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("document succesfully loaded, baby!");
  const btnClicky = document.getElementById('btnClicky'); 
  btnClicky.addEventListener('click', handleBtnClick);
});
