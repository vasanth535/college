// When 'Explore Notes' button is clicked, show an alert
document.addEventListener('DOMContentLoaded', function () {
    const ctaBtn = document.querySelector('.cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function (e) {
            alert('Welcome to the Notes Library!');
        });
    }
    console.log('CampusHub site is loaded and JavaScript is connected!');
});