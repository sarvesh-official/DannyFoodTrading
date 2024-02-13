document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.querySelector('input[name="Name"]').value;
    var lastName = document.querySelector('input[name="LastName"]').value;
    var subject = document.querySelector('input[name="Subject"]').value;
    var message = document.querySelector('textarea[name="Message"]').value;

    var emailBody = "Name: " + name + "\n";
    emailBody += "Last Name: " + lastName + "\n";
    emailBody += "Subject: " + subject + "\n";
    emailBody += "Message: " + message;

    var mailtoLink = 'mailto:dannyfoodcompany@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(emailBody);
    window.location.href = mailtoLink;
});
