let puzzleData;
let currentSegment = 1;
const FINAL_SEGMENT = 10;
const LAST_UPDATED = "Jan 24, 2025 10:25 AM"; // Update this manually when content changes

function updateTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        timestampElement.textContent = LAST_UPDATED;
        console.log('Timestamp updated to:', LAST_UPDATED);
    } else {
        console.error('Timestamp element not found');
    }
}

function loadStoryAndPuzzle(segmentNumber) {
    // Load puzzle data
    fetch(`puzzle${segmentNumber}.json`)
        .then(response => response.json())
        .then(data => {
            puzzleData = data;
            document.getElementById('puzzle-title').textContent = data.title;
            document.getElementById('puzzle-question').textContent = data.question;
            const answerInput = document.getElementById('answer');
            answerInput.value = ''; // Clear previous answer
            // Add enter key listener to the input field
            answerInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    checkAnswer();
                }
            });
            document.getElementById('feedback').textContent = ''; // Clear previous feedback
            document.getElementById('next-segment').classList.add('hidden'); // Hide next segment section
            updateTimestamp(); // Ensure timestamp is set after content loads
        })
        .catch(error => {
            console.error('Error loading puzzle:', error);
        });

    // Load story text
    fetch(`segment${segmentNumber}.txt`)
        .then(response => response.text())
        .then(data => {
            const storyContent = document.getElementById('story-content');
            // Create story text paragraphs
            const textHtml = data.split('\n').map(paragraph => 
                paragraph.trim() ? `<p>${paragraph}</p>` : ''
            ).join('');
            
            // Add the image for this segment with correct filename format
            const imageHtml = `<img src="segment${segmentNumber}pic.png" alt="Illustration for segment ${segmentNumber}" class="story-image">`;
            
            // Combine text and image
            storyContent.innerHTML = textHtml + imageHtml;
        })
        .catch(error => {
            console.error('Error loading story:', error);
            document.getElementById('story-content').innerHTML = 
                '<p>Failed to load the story.</p>';
        });
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        // Scroll the element into view with some padding at the top
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    if (userAnswer === puzzleData.answer) {
        feedback.textContent = puzzleData.feedback.correct;
        feedback.style.color = 'green';
        
        if (currentSegment === FINAL_SEGMENT) {
            // Show final congratulations
            const nextSegmentSection = document.getElementById('next-segment');
            nextSegmentSection.innerHTML = `
                <h2>Congratulations!</h2>
                <p>You've completed all the puzzles and finished the story!</p>
                <p>Thank you for playing Puzzle Magic.</p>
            `;
            nextSegmentSection.classList.remove('hidden');
        } else {
            // Show continue to next segment
            const nextSegmentSection = document.getElementById('next-segment');
            nextSegmentSection.innerHTML = `
                <h2>Next Segment</h2>
                <p>Congratulations! You've solved the puzzle.</p>
                <a href="#" onclick="loadNextSegment()" class="story-link">Continue to segment ${currentSegment + 1}</a>
            `;
            nextSegmentSection.classList.remove('hidden');
        }
        // Scroll to show the next segment section
        setTimeout(() => scrollToElement('next-segment'), 100);
    } else {
        feedback.textContent = puzzleData.feedback.incorrect;
        feedback.style.color = 'red';
        // Scroll to show the feedback
        setTimeout(() => scrollToElement('feedback'), 100);
    }
}

function loadNextSegment() {
    if (currentSegment < FINAL_SEGMENT) {
        currentSegment++;
        loadStoryAndPuzzle(currentSegment);
        // Scroll to top of new segment
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return false; // Prevent default link behavior
}

// Load the first segment when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, initializing...');
    loadStoryAndPuzzle(1);
    updateTimestamp();
});