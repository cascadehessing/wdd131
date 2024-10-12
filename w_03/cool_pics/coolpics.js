const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("hide");

    // Update aria-expanded attribute for accessibility
    const isExpanded = navMenu.classList.contains("hide") ? "false" : "true";
    menuButton.setAttribute("aria-expanded", isExpanded);
});

function handleResize() {
  const navMenu = document.querySelector(".menu");  
  if (window.innerWidth > 1000) {
        navMenu.classList.remove("hide");
    } else {
        navMenu.classList.add("hide");
    }
}
handleResize();
window.addEventListener("resize", handleResize)

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
  const clickedImage = event.target;
	// get the src attribute from that element and 'split' it on the "-"
  const imageSrc = clickedImage.getAttribute("src").split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  const newImageSrc = imageSrc[0] + "-full.jpeg";
	// insert the viewerTemplate into the top of the body element
	element.insertAdjacentHTML("afterbegin", htmltoinsert);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
  document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}