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