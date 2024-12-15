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

// Scroll reveal functionality
function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', reveal);

// Initial reveal check
reveal();

// Mobile menu functionality
const mobileNav = document.querySelector('.mob-nav');
let isMenuOpen = false;
let mobileMenu;

mobileNav.addEventListener('click', () => {
    if (!isMenuOpen) {
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50 p-5';
        mobileMenu.innerHTML = `
            <div class="flex flex-col items-center gap-6 text-white">
                <a href="#home" class="nav-link">HOME</a>
                <a href="#categories" class="nav-link">CATEGORIES</a>
                <a href="#value" class="nav-link">VALUE</a>
                <a href="#about" class="nav-link">ABOUT US</a>
                <a href="#connect" class="nav-link">CONNECT</a>
            </div>
        `;
        document.body.prepend(mobileMenu);
    } else {
        mobileMenu.remove();
    }
    isMenuOpen = !isMenuOpen;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        if (isMenuOpen) {
            mobileMenu.remove();
            isMenuOpen = false;
        }
    });
});
