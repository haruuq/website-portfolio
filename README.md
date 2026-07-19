# website-portfolio

[![Built With - HTML/CSS/JS](https://img.shields.io/badge/Built_With-HTML%20%7C%20CSS%20%7C%20JS-blue)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Frameworks - None](https://img.shields.io/badge/Frameworks-Vanilla_JS-orange)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

An interactive, desktop-inspired web portfolio built with **JavaScript**, **HTML**, and **CSS**. This project serves as a central hub to showcase my background in IT, web development, and design.

> **Note:** To ensure fast load times and high performance, this project avoids heavy frameworks (like React or Vue) in favor of **Vanilla JavaScript** and lightweight event-driven libraries.

---

## About the Project

The goal of this project was to design a clean, engaging user interface that organizes my academic milestones, software projects, and design assets into an intuitive dashboard. Sections load dynamically as draggable windows inside a custom workspace, simulating a fully functional desktop operating system.

---

## Key Features & Skills Practiced

While building this project, I focused on core frontend development and user experience principles:

* **Window Management & State:** Handled opening, closing, and stacking interactive windows cleanly using vanilla event listeners.
* **Dynamic Window Layering:** Implemented a script that tracks active windows, ensuring that whichever window you click automatically brings it to the foreground.
* **Smooth Dragging Mechanics:** Integrated `Interact.js` to enable smooth, responsive multi-window dragging across the workspace.
* **Web Audio Integration:** Used `Howler.js` to add subtle sound effects for window actions and image previews without slowing down the user interface.
* **Performance Optimization:** Converted all images and badges into compressed `.webp` formats to guarantee minimal load times and a snappy user experience.
* **Responsive Layouts:** Utilized CSS Grid and Flexbox to build stable window structures and responsive image galleries.

---

## How to Interact

1. **Open Windows:** Click any icon in the main menu panel (`about`, `work`, or `certifications`) to launch its dashboard window.
2. **Move Windows:** Click and drag the title bar of any window to reposition it freely across the workspace.
3. **View Media:** Click on individual project thumbnails or certification badges to view full-resolution images in a clean pop-up viewer.

---

## Future Improvements

Planned enhancements for this project include:

- [ ] Implementing a theme toggle to shift the workspace from the default blue tones to a custom dark mode palette.
- [ ] Moving text and media data into a local JSON configuration file to update portfolio content easily.

## A Little Note

Thank you so much for checking out my project! This  took quite a long time to build, and a massive amount of thought, effort, and care went into making sure every interaction and window movement feels just right. I really hope you enjoy exploring it as much as I enjoyed bringing it to life. If you have any feedback or just want to connect, feel free to reach out!