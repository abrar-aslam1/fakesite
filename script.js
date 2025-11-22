document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var progressBar = document.getElementById('progress-bar');
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            alert('Congratulations! Your login was successful. Please wait while we transfer your $1,000,000 prize. This may take a few business days.');
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 20);
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};
