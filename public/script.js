// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Police Portal Functions
function fetchRecords() {
    alert("Fetching past records... (Mock Data)");
}

function showDashboard() {
    const dashboard = document.getElementById("dashboard");
    dashboard.classList.toggle("hidden");
}



function fetchLaws() {
    alert("Fetching laws... (Mock Data: BNS Sections Loaded)");
}

// Citizen Portal Functions
