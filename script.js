
function downloadResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumeUrl = 'Vedant Chaudhari resume SDE-1.pdf';

    // Create an anchor element
    const link = document.createElement('a');

    // Set the href attribute to the resume URL
    link.href = resumeUrl;

    // Set the download attribute to specify the filename users will see when they download the file
    link.download = 'Vedant_Chaudhari_Resume.pdf';

    // Programmatically trigger a click event on the anchor element
    link.click();

    // Show the message after downloading resume
    const resumeMessage = document.getElementById('resumeMessage');
    resumeMessage.style.display = 'block';
}

document.getElementById("contactButton").addEventListener("click", function() {
    const contactFormContainer = document.getElementById("contactFormContainer");
    if (contactFormContainer.style.display === "block") {
        contactFormContainer.style.display = "none";
    } else {
        contactFormContainer.style.display = "block";
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    // Construct an object from form data
    const formObject = {};
    formData.forEach(function(value, key) {
        formObject[key] = value;
    });

    // Simulate sending the form data to the server (you would replace this with actual server-side processing)
    console.log("Form data:", formObject);

    // Display the response message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.style.display = "block";

    // Reset the form
    this.reset();
});

document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const section = this.parentNode;
        section.classList.toggle('expanded');
        if (section.classList.contains('expanded')) {
            this.textContent = 'Read less';
        } else {
            this.textContent = 'Read more';
        }
    });
});

/*document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const project = this.parentElement;
            project.classList.toggle('is-expanded');
        });
    });
});*/

document.querySelector(".read-more-btn").addEventListener("click", function() {
    const details = document.querySelector("#about .details");
    const summary = document.querySelector("#about .summary");

    if (details.style.display === "block") {
        details.style.display = "none";
        summary.style.display = "block";
        this.textContent = "Read more";
    } else {
        details.style.display = "block";
        summary.style.display = "none";
        this.textContent = "Read less";
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId); // Get the target section
            let offsetTop = 0; // Initialize offsetTop to 0
            
            if (targetId !== 'home') {
                offsetTop = targetSection.offsetTop; // Get the top offset of the target section
            }

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Smooth scrolling
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    function toggleSectionVisibility(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    function scrollToNextSection() {
        currentSectionIndex++;
        if (currentSectionIndex >= sections.length) {
            currentSectionIndex = sections.length - 1;
        }
        toggleSectionVisibility(currentSectionIndex);
    }

    function scrollToPreviousSection() {
        currentSectionIndex--;
        if (currentSectionIndex < 0) {
            currentSectionIndex = 0;
        }
        toggleSectionVisibility(currentSectionIndex);
    }

    document.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            scrollToNextSection();
        } else {
            scrollToPreviousSection();
        }
    });

    toggleSectionVisibility(currentSectionIndex);
});



