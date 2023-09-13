// Function to toggle the mobile menu
function toggleMobileMenu() {
  var navbar = document.getElementById("navbar");
  if (navbar.classList.contains("collapsed")) {
    navbar.classList.remove("collapsed");
  } else {
    navbar.classList.add("collapsed");
  }
}

// Add an event listener to the mobile menu button
var mobileMenuButton = document.querySelector(".navbar-toggler");
mobileMenuButton.addEventListener("click", toggleMobileMenu);

// Add an event listener to close the mobile menu when a link is clicked
var navLinks = document.querySelectorAll(".navbar-nav a");
navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    var navbar = document.getElementById("navbar");
    navbar.classList.add("collapsed");
  });
});


// Import Three.js components
import * as THREE from 'three';

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-model-container').appendChild(renderer.domElement);

// Create a simple cube as a 3D model
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set camera position
camera.position.z = 5;

// Define an animation function
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

// Start the animation loop
animate();





