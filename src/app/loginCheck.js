
const profilePhoto = document.querySelector(".userProfileImage");
const loggedDropdown = document.querySelector('#acount-options');

console.log(profilePhoto)
console.log(loggedDropdown)

export const loginCheck = user =>{
    if (user){
        profilePhoto.setAttribute("src", "../assets/img/user-logged-icon.jpg")
        loggedDropdown.classList.remove("notlogged")
    }else{
        profilePhoto.setAttribute("src", "../assets/img/user-not-logged-icon.jpg")
        loggedDropdown.classList.add("notlogged")
    }
}