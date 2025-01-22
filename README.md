# Story Puzzles

Story Puzzles is an interactive web-based story experience where readers progress through a story by solving puzzles. Each segment of the story presents a new challenge that must be solved to continue.

## Copyright Notice

The story content, including:
- All text in segment*.txt files
- All illustrations in segment*pic.png files
- All puzzle content in puzzle*.json files (including titles, questions, answers, and feedback text)

is © 2025 Bill Heitzeg. All rights reserved. This content may not be reproduced or distributed without permission.

## License (Code)

The code structure and logic (HTML, CSS, and JavaScript, excluding story/puzzle content) is licensed under the MIT License:

```
MIT License

Copyright (c) 2025 Bill Heitzeg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (excluding story content),
to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Project Structure

```
storypuzzlesweb/
├── index.html              # Main landing page
├── puzzlemagic/           # First story: "Puzzle Magic"
│   ├── index.html         # Story page
│   ├── style.css          # Story styling
│   ├── script.js          # Story interaction logic
│   ├── segment1.txt       # Story text segments (© Bill Heitzeg)
│   ├── segment2.txt
│   ├── ...
│   ├── segment1pic.png    # Story illustrations (© Bill Heitzeg)
│   ├── segment2pic.png
│   ├── ...
│   ├── puzzle1.json       # Puzzle data (© Bill Heitzeg)
│   ├── puzzle2.json
│   └── ...
└── README.md              # This file
```

## Features

- Progressive story segments revealed through puzzle-solving
- Interactive puzzle system with immediate feedback
- Illustrations for each story segment
- Responsive design that works on both desktop and mobile
- Smooth scrolling and navigation
- Enter key support for submitting answers

## How to Use

1. Open the main index.html to start
2. Click on "Puzzle Magic" to begin the first story
3. Read each story segment
4. Solve the puzzle presented at the end of each segment
5. Click "Continue" or press Enter to proceed to the next segment
6. Complete all 10 segments to finish the story

## Puzzle Format

Each puzzle is stored in a JSON file with the following structure (note that all puzzle content is copyrighted):

```json
{
    "id": "puzzle1",
    "title": "Puzzle Title",
    "question": "The puzzle question?",
    "answer": "correct answer",
    "feedback": {
        "correct": "Success message",
        "incorrect": "Try again message"
    }
}
```

## Adding New Content

To add new story segments:

1. Create new segment text files (segmentX.txt)
2. Add corresponding illustrations (segmentXpic.png)
3. Create puzzle data files (puzzleX.json)
4. Update the FINAL_SEGMENT constant in script.js

## Development

The project uses vanilla JavaScript, CSS, and HTML without any external dependencies. To modify:

- Edit style.css for visual changes
- Modify script.js for interaction logic
- Update segment text files for story content
- Adjust puzzle JSON files for puzzle modifications

Note: When reusing this code for your own stories, remember to replace all story content (text and images) and puzzle content with your own material, as the existing content is copyrighted by Bill Heitzeg.

Last Updated: Jan 22, 2025 