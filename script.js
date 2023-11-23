// Define variables for DOM elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const btn = document.querySelector("#d1");

// Handle menu icon click event
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

function createMailtoLink() {
    var name = encodeURIComponent(document.getElementById("Name").value);
    var email = encodeURIComponent(document.getElementById("Email").value);
    var mobileNumber = encodeURIComponent(document.getElementById("Mobile number").value);
    var subject = encodeURIComponent(document.getElementById("Subject").value);
    var message = encodeURIComponent(document.getElementById("Message").value);

    var mailtoLink = "mailto:jyotirmayeepriya16@gmail.com" +
        "?subject=" + subject +
        "&body=Name: " + name + "%0AEmail: " + email + "%0AMobile Number: " + mobileNumber + "%0ASubject: " + subject + "%0AMessage: " + message;

    window.location.href = mailtoLink;
}



// Scroll sections and handle header behavior
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    // Handle section scrolling
    sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Activate navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            sec.classList.add('show-animate'); // Add animation class to the active section
        } else {
            sec.classList.remove('show-animate'); // Remove animation class from other sections
        }
    });

    // Sticky header behavior
    header.classList.toggle('sticky', top > 100);

    // Remove menu icon and navbar when clicking navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animate the footer when scrolled to the end
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
});





































































// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let btn = document.querySelector("#d1")
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }


// // scroll sections
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top>= offset && top < offset + height){
//             // active navbar Links
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*='+ id +']').classList.add('active');
//             });
//             // active sections for animation on scroll
//             sec.classList.add('show-animate');
//         }
//         // if want to use animation that reapeat on scroll use this
//         else{
//             sec.classList.remove('show-animate');
//         }
//     });

//         // sticky header
//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY > 100);


//     // remove toggle icon and navbar when click navbar links (scroll)
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');

//     // animation footer on scroll

//     let footer = document.querySelector('footer');

//     footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
// }
