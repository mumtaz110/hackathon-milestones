const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const experienceContent = document.getElementById('experienceContent') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (experienceContent.classList.contains('hidden')) {
        experienceContent.classList.remove('hidden');
        toggleButton.textContent = 'Hide Details';
    } else {
        experienceContent.classList.add('hidden');
        toggleButton.textContent = 'Show Details';
    }
});
