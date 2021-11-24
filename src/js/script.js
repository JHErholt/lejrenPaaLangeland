// Header
// toggle Burger menu   
function toggleMenuIcon(x) {
    x.style.transtiton = '0.4s';
    x.classList.toggle("toggle-menu");
    document.querySelector("#menu").classList.toggle("visible");
    document.querySelector("header").classList.toggle("activated");
}   
// Page Finder
switch (window.location.pathname) {
    case ('/'):
    document.querySelector('a[href="/"] p').style.textDecoration = "underline"
    // document.querySelector('a[href="/"]').style.textDecoration = "underline"
    break;
    case ('/about/'):
    document.querySelector('a[href="/about"]').style.color = '#d0000b';
    break;
    case ('/thanks/'):
    document.querySelector('a[href="/thanks"]').style.color = '#d0000b';
    break;
    case ('/sponsor/'):
    break;
} 

// Footer
let d = new Date();
let y = d.getFullYear();
let copyrightContainer = document.getElementById('copyright');
let copyrightText = document.createElement('p');
copyrightText.innerHTML = '&#169; ' + y + ' Jacob Erholt';
copyrightContainer.appendChild(copyrightText);