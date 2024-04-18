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


