const ModalStatus = false;
document.getElementById("account-button").addEventListener('click', toggleAcountAccess);
document.getElementById("close-modal-button").addEventListener('click', toggleModal);
document.querySelectorAll(".product-card").forEach(element => {
    element.addEventListener('click', e =>{
        const id = e.target.getAttribute("id");
        alert('Se ha clickeado el elemento: '+id);
        toggleModal();
        
    });
})

function toggleModal(){
    document.getElementById("modal-background").classList.toggle('modal-display')
    if(ModalStatus){
        disableScroll;
    }else{
        enableScroll;
    }
}
// function disableScroll() {
//     // Get the current page scroll position
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
//         // if any scroll is attempted, set this to the previous value
//         window.onscroll = function() {
//             window.scrollTo(scrollLeft, scrollTop);
//         };
// }
  
// function enableScroll() {
//     window.onscroll = function() {};
// }

function toggleAcountAccess(){
    document.getElementById("acount-options").classList.toggle('acount-options-display')
}