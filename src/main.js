import './app/signupForm.js'



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
function toggleAcountAccess(){
    document.getElementById("acount-options").classList.toggle('acount-options-display')
}
