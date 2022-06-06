document.getElementById("button__mobile").addEventListener('click', function() {
  const modal = document.getElementById("content__mobile");
  modal.style.display = 'block';
  console.log(window.innerWidth)
})

document.getElementById("btn__close").addEventListener('click', function() {
  const modal = document.getElementById("content__mobile");
  modal.style.display = 'none';
})

function closeModal_overMobile(widthScreen) {
  if(widthScreen > 768){
    document.getElementById("content__mobile").style.display ="none"
  } 
}

window.onresize = function(){
  const widthSize = window.innerWidth
  closeModal_overMobile(widthSize)
}