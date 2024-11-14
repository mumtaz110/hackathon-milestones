var toggleButton = document.getElementById('toggleButton');
var experienceContent = document.getElementById('experienceContent');
toggleButton.addEventListener('click', function () {
    if (experienceContent.classList.contains('hidden')) {
        experienceContent.classList.remove('hidden');
        toggleButton.textContent = 'Hide Details';
    }
    else {
        experienceContent.classList.add('hidden');
        toggleButton.textContent = 'Show Details';
    }
});
