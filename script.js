document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;

            // Toggle active class on clicked item
            item.classList.toggle('active');

            // Optional: Close other items when one is opened
            /*
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            */
        });
    });

    // Simple Thumbnail Switcher (if we had multiple images)
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.querySelector('.main-image img');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Remove active class from all
            thumbs.forEach(t => t.classList.remove('active'));
            // Add to clicked
            thumb.classList.add('active');
            // Update main image
            const imgParams = thumb.querySelector('img').src;
            mainImg.src = imgParams;
        });
    });
});

// Hero FAQ Accordion
const heroFaqQuestions = document.querySelectorAll('.hero-faq-question');

heroFaqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Countdown Timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset or stop
        }
    }, 1000);
}

const timerDisplay = document.querySelector('.timer');
if (timerDisplay) {
    // Start a 5 minute 56 second timer (356 seconds)
    startTimer(356, timerDisplay);
}

