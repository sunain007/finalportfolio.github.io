function openimageinnewtab() {
    var imageUrl = '/assets/ccna.jpg';
    window.open(imageUrl, '_blank');
}

document.getElementById('education').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get target section id
    const targetSection = document.getElementById(targetId); // Find target section
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth behavior
    }
});
document.getElementById('skills').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get target section id
    const targetSection = document.getElementById(targetId); // Find target section
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth behavior
    }
});
document.getElementById('projects').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get target section id
    const targetSection = document.getElementById(targetId); // Find target section
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth behavior
    }
});
document.getElementById('aboutme').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get target section id
    const targetSection = document.getElementById(targetId); // Find target section
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth behavior
    }
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function downloadpdf() {
    // Assuming your PDF file is named "example.pdf" and located in the same directory
    var pdfURL = "/assets/Resume.pdf";

    // Creating a temporary anchor element to trigger the download
    var link = document.createElement("a");
    link.href = pdfURL;
    link.download = "/assets/Resume.pdf"; // You can change the name here if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
