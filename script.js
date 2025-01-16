// Load story text dynamically
document.addEventListener('DOMContentLoaded', () => {
    const storyContent = document.getElementById('story-content');
    fetch('story1.txt')
        .then(response => response.text())
        .then(data => {
            storyContent.innerHTML = data.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');
        })
        .catch(error => {
            console.error('Error loading story:', error);
            storyContent.innerHTML = '<p>Failed to load the story. Please try again later.</p>';
        });
});

function checkAnswer1() {
    const answer1 = document.getElementById('answer1').value.trim().toLowerCase();
    const feedback1 = document.getElementById('feedback1');

    if (answer1 === 'fuzzy leather') {
        feedback1.textContent = 'Correct! Proceeding to the next part of the story...';
        feedback1.style.color = 'green';
        setTimeout(() => {
            document.getElementById('next-story').classList.remove('hidden');
            feedback1.textContent = '';
        }, 2000);
    } else {
        feedback1.textContent = 'Incorrect. Try again!';
        feedback1.style.color = 'red';
    }
}