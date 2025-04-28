// ----------------- Typewriter Effect -----------------
const text = "Welcome to GLA University Students Welfare!";
const typewriter = document.getElementById("typewriter");

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        typewriter.textContent = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
            setTimeout(() => { isDeleting = true; }, 1000);
        }
    } else {
        typewriter.textContent = text.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ----------------- Zoom and Reset Font Size -----------------
const zoomInBtn = document.getElementById("zoom-in");
const zoomOutBtn = document.getElementById("zoom-out");
const resetBtn = document.getElementById("reset");

let fontSize = 16; // Default font size

zoomInBtn.addEventListener("click", () => {
    fontSize += 2;
    document.body.style.fontSize = `${fontSize}px`;
});

zoomOutBtn.addEventListener("click", () => {
    if (fontSize > 6) { // Minimum font size
        fontSize -= 2;
        document.body.style.fontSize = `${fontSize}px`;
    }
});

resetBtn.addEventListener("click", () => {
    fontSize = 16;
    document.body.style.fontSize = `${fontSize}px`;
});

// ----------------- Load Main Content Dynamically -----------------
function loadContent(section) {
    const mainContent = document.querySelector(".main-content");

    switch (section) {
        case "about":
            mainContent.style.background = "linear-gradient(to bottom right,rgba(51, 44, 44, 0.3),rgb(36, 61, 66))"; // Set gradient background
            mainContent.style.padding = "20px"; // Optional: Add padding for better spacing
            mainContent.style.borderRadius = "10px"; // Optional: Add rounded corners
            mainContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // Optional: Add a shadow for better appearance
            mainContent.innerHTML = `
                <h2>About</h2>
                <p>Students Welfare at GLA University works to ensure that students develop academically, professionally, and personally through a variety of programs and support initiatives.</p>
                <img src="images/about-gla.jpg" alt="About Students Welfare" class="banner-img small-img">
                <p style="margin-top: 20px; text-align: justify; font-size: 1rem; line-height: 1.6;">GLA University Students Welfare is committed to fostering a vibrant campus life by organizing events, providing support services, and creating opportunities for students to excel in all aspects of their lives. Join us in building a community of growth, learning, and success.</p>
            `;
            break;
        case "studentActivity":
            mainContent.innerHTML = `
                <h2>Student Activity Centre</h2>
                <p>The Student Activity Centre organizes exciting events, competitions, and workshops to enhance students' overall experience on campus.</p>
                <img src="activity_centre_banner.jpg" alt="Student Activities" class="banner-img">
            `;
            break;
        case "studentsClubs":
            mainContent.innerHTML = `
                <h2>Students Clubs</h2>
                <p>Explore the diverse clubs at GLA University, categorized into Cultural Clubs, Departmental Clubs, and Sports Clubs.</p>
                <div class="club-cards">
                    <div class="club-card">
                        <img src="images/cultural-clubs.png" alt="Cultural Club" class="club-card-img">
                        <h3>Cultural Club</h3>
                        <p>Engage in music, dance, and drama activities.</p>
                        <a href="cultural_club.html" class="club-btn">Explore</a>
                    </div>
                    <div class="club-card">
                        <img src="images/departmental-club.png" alt="Departmental Club" class="club-card-img">
                        <h3>Departmental Club</h3>
                        <p>Participate in academic and technical events.</p>
                        <a href="departmental_club.html" class="club-btn">Explore</a>
                    </div>
                    <div class="club-card">
                        <img src="images/sports-club.png" alt="Sports Club" class="club-card-img">
                        <h3>Sports Club</h3>
                        <p>Stay active with sports and tournaments.</p>
                        <a href="sports_club.html" class="club-btn">Explore</a>
                    </div>
                </div>
            `;
            break;
        case "ncc":
            mainContent.innerHTML = `
                <h2>NCC</h2>
                <p>GLA's NCC unit fosters leadership, discipline, and patriotism through various national-level programs and parades.</p>
                <img src="ncc_banner.jpg" alt="NCC Activities" class="banner-img">
            `;
            break;
        case "nss":
            mainContent.innerHTML = `
                <h2>NSS</h2>
                <p>National Service Scheme (NSS) volunteers at GLA serve the community and lead impactful social projects across the region.</p>
                <img src="nss_banner.jpg" alt="NSS Volunteers" class="banner-img">
            `;
            break;
        case "studentAffairs":
            mainContent.innerHTML = `
                <h2>Student Affairs Council</h2>
                <p>The Student Affairs Council represents the student body, organizing elections, leadership programs, and major student initiatives.</p>
                <img src="council_banner.jpg" alt="Student Council" class="banner-img">
            `;
            break;
        default:
            mainContent.innerHTML = `
                <h2>Welcome to Students Welfare</h2>
                <p>Explore the various clubs, events, and student opportunities at GLA University.</p>
                <img src="gla_banner.png" alt="GLA Students participating in activities" class="banner-img">
            `;
    }
}

// ----------------- Sidebar Link Click Handling -----------------
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = this.getAttribute('data-section');
            loadContent(section);
        });
    });
});

const swiper = new Swiper(".mySwiper", {
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto-slide every 3 sec
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
