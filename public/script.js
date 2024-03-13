// //hamburger menu
// //viability

//     const hamburgerButton = document.querySelector('.menu-button');
//     const menu = document.querySelector('.menu-content');
//     const closeIcon = document.querySelector('.menu-close');

//     hamburgerButton.addEventListener("click", toggleMenu);

//     function toggleMenu() {
//         //Als het menu niet te zien is,  voeg showmenu toe
//         if (menu.classList.contains("showMenu")) {
//             menu.classList.remove("showMenu");
//             closeIcon.style.display = "none";
//         }
//         else {
//             menu.classList.add("showMenu")
//             closeIcon.style.display = "block"
//         }


//     }

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu-content');
    const closeIcon = document.querySelector('.menu-close');

    hamburgerButton.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);

    function toggleMenu() {
        console.log("toggle check");
        // Toggle the 'showMenu' class on the menu
        menu.classList.toggle("showMenu");
    
        // Check if 'showMenu' class is present
        if (menu.classList.contains("showMenu")) {
            // If 'showMenu' class is present, set close icon visibility to 'block'
            closeIcon.style.display = "block";
        } else {
            // If 'showMenu' class is not present, set close icon visibility to 'none'
            closeIcon.style.display = "none";
        }
    }
    
});
