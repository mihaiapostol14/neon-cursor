# Neon Dot Cursor Effect

This project creates a visually appealing neon dot trail effect that follows the user's mouse movements on a webpage. The effect is implemented using JavaScript and dynamically creates multiple dots that smoothly follow the cursor, creating a neon trail effect.

## Repository Overview

- **Repository Name**: neon-cursor
- **Owner**: [mihaiapostol14](https://github.com/mihaiapostol14)
- **Primary Language**: JavaScript
- **Other Languages**: CSS, HTML
- **Created**: 37 days ago
- **Last Pushed**: January 27, 2025
- **Visibility**: Public
- **Default Branch**: main
- **Open Issues**: 0
- **Forks**: 0
- **Stargazers**: 0
- **Watchers**: 0

## How It Works

1. **Initialization**:
   - The script begins by listening for the `DOMContentLoaded` event to ensure the DOM is fully loaded before executing the code.
   - A constant `numDots` defines the number of neon dots to be created. In this case, 30 dots will be generated.

2. **Creating the Dots**:
   - An array `dots` is used to store the created dots.
   - A `for` loop iterates `numDots` times, creating a `div` element for each dot.
   - Each dot is assigned a class name `neon-dot` for styling and is appended to the document body.

3. **Tracking Mouse Movement**:
   - Two variables, `mousex` and `mousey`, are initialized to store the current mouse coordinates.
   - An event listener is added to track the `mousemove` event. It updates the `mousex` and `mousey` variables with the current mouse position (`clientX` and `clientY`).

4. **Animating the Dots**:
   - The `moveDots` function handles the animation of the dots.
   - For each dot, the function calculates its new position based on the current mouse position and a smoothing factor (`0.3` in this case).
   - The `style.left` and `style.top` properties of each dot are updated to position them on the screen.
   - The `requestAnimationFrame` function is used to ensure smooth animation by continuously calling `moveDots`.

5. **Styling**:
   - The styling of the dots is expected to be handled via the `.neon-dot` CSS class. This class should define properties such as size, color, glow effect, and other visual characteristics.

## How to Use

1. **Include the Script**:
   - Copy and paste the JavaScript code into a `<script>` tag in your HTML file or include it as an external `.js` file.

2. **Add CSS for Dots**:
   - Define the `.neon-dot` class in your CSS file. For example:
     ```css
     .neon-dot {
       position: absolute;
       width: 10px;
       height: 10px;
       border-radius: 50%;
       background-color: #00ff00;
       box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
       pointer-events: none;
     }
     ```

3. **Open in a Browser**:
   - Open the HTML file in a browser to see the neon dot effect in action. Move your mouse around to watch the dots follow your cursor.

## Customization

- **Number of Dots**: Modify the `numDots` variable to increase or decrease the number of dots.
- **Dot Appearance**: Adjust the CSS properties in the `.neon-dot` class to change the size, color, and glow of the dots.
- **Smoothing Factor**: Change the value `0.3` in the `moveDots` function to control the trailing effect of the dots.

## Example Use Case

This effect can be used to enhance the interactivity and visual appeal of websites, such as:
- Personal portfolios
- Interactive landing pages
- Gaming websites
- Creative projects

## Cloning the Repository

To clone this repository, use the following command:

```sh
git clone https://github.com/mihaiapostol14/neon-cursor.git
```

Enjoy experimenting with the neon dot cursor effect!