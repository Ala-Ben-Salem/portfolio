const togglebtn = document.querySelector('.toggle_btn');
const togglebtnicon = document.querySelector('.toggle_btn i');
const dropdownmenu = document.querySelector('.dropdown_menu');
togglebtn.onclick =function(){
    dropdownmenu.classList.toggle('open')
    const isOpen=dropdownmenu.classList.contains('open') // **********************************
    togglebtnicon.classList= isOpen                     // pour visible la mark X  
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars' //*******************************************************************
    
}