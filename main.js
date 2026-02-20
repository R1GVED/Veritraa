// Set the launch date (e.g., 30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector('.countdown').innerHTML = "<h3>We have sprouted!</h3>";
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// Form Handling
const form = document.getElementById('waitlist-form');
const statusMsg = document.querySelector('.status-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input').value;

    // Simulate API call
    statusMsg.innerText = "Sending...";
    statusMsg.style.color = "var(--text-muted)";

    setTimeout(() => {
        statusMsg.innerText = "You're on the list! We'll be in touch soon.";
        statusMsg.style.color = "var(--accent)";
        form.reset();
    }, 1500);
});
