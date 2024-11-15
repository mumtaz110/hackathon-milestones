var form = document.getElementById("resume-form");
var yourResume = document.getElementById("your-resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var resumeHTMl = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal information</h3>\n    <p><b>Name:</b>".concat(name, "</P>\n    <p><b>Email:</b>").concat(email, "</P>\n    <p><b>Phone:</b>").concat(phone, "</P>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    ");
    if (yourResume) {
        yourResume.innerHTML = resumeHTMl;
    }
    else {
        console.error("Resume display element is missing");
    }
});
