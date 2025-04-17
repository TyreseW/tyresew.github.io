const list = document.querySelector(".links");
const button = document.querySelector(".toggle-btn");
//const sidebar = document.querySelector("sidebar");

// when clicked, toggle the class ("hidden") on the links Element
// hidden class is defined to hide the element
/* button.addEventListener("click", function (){
    list.classList.toggle("hidden");

});
 */
button.addEventListener("click", () => {
    if(list.style.display === 'none') {
        list.style.display = 'block';
        button.textContent = 'Hide Menu';
    } else {
        list.style.display = 'none';
        button.textContent = 'Show Menu';
    }
});
