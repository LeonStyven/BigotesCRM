const ModalStatus = false;

document.getElementById("product-card").addEventListener('click', toggleModal);
document.getElementById("close-modal-button").addEventListener('click', toggleModal);


function toggleModal(){
    document.getElementById("modal-background").classList.toggle('modal-display')
    if(ModalStatus){
        disableScroll;
    }else{
        enableScroll;
    }
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}