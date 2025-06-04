# Star Wars Wiki Application

Heyy! This is a small Star Wars character website I made using HTML, CSS, and JavaScript. I'm still learning web development so I tried to build this simple project to practice how to use APIs and make multiple pages connect together.

## What This Project Has

### Main Page (starwars-wiki.html)
- Shows 6 characters per page in a 3x2 grid layout.
- Each card shows: character image, name, species, and gender.
- Next and Previous buttons to change the page.
- When you click on a card, it opens the detail page in new tab.
- There's a live digital clock at the bottom that updates every second.

### Detail Page (starwars-wiki2.html)
- It shows full image and more details like:
  - Name
  - Gender
  - Species
  - Homeworld
  - Affiliations
  - Height, Mass, Eye Color, Hair Color, Skin Color
- Clock is also there at the bottom like main page.

## API Used
I used this public Star Wars API:
- All Characters: https://akabab.github.io/starwars-api/api/all.json
- Single Character: https://akabab.github.io/starwars-api/api/id/{id}.json

## How to Use It
1. Download this project or clone it.
2. Open the `starwars-wiki.html` file in your browser.
3. Click any character to see more about them!

## What I Used
- HTML
- CSS
- JavaScript

## Problems I Faced
- Pagination logic was confusing, like how to cut the array and show limited characters.
- Learning how to send the character id to the next page and read it using `URLSearchParams`.
- Sometimes API took time to load and I thought something was broken.
- Styling was tough too because grid wasn't working in the beginning.

## Video I Followed
I watched the video mentioned in the instructions to help me understand how to fetch and show data.


---

Made this project while learning. Hope it looks okay.
