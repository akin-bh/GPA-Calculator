# UNM GPA Calculator

A clean, minimalist web application to calculate semester GPA for University of New Mexico students.

## Project Structure

```
UNM GPA Calculator/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── app.js          # All JavaScript functionality
├── images/
│   └── logo.jpg        # UNM Logo
└── README.md           # This file
```

## Features

- **UNM Branded Design** - Uses official UNM colors (Crimson Red #c60c30)
- **Grade Scale Display** - All 13 grades with their point values
- **Dynamic Course Entry** - Add/remove courses as needed
- **Accurate GPA Calculation** - Based on UNM's grading scale
- **Results Display** - Shows total hours, total points, and final GPA
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Input Validation** - Ensures all required fields are filled

## How to Use

1. Open `index.html` in a web browser
2. View the grade scale at the top
3. Add your courses:
   - Enter course name (optional)
   - Enter credit hours (1-12)
   - Select your grade
4. Click "Calculate" to compute your GPA
5. Use "Reset" to start over

## UNM Grade Scale

| Grade | Points |
|-------|--------|
| A+    | 4.33   |
| A     | 4.00   |
| A-    | 3.67   |
| B+    | 3.33   |
| B     | 3.00   |
| B-    | 2.67   |
| C+    | 2.33   |
| C     | 2.00   |
| C-    | 1.67   |
| D+    | 1.33   |
| D     | 1.00   |
| D-    | 0.67   |
| F     | 0.00   |

## Technical Details

- **HTML**: Semantic structure with proper accessibility
- **CSS**: Organized with comments, responsive media queries
- **JavaScript**: Well-documented functions, event handling, validation
- **Colors**: UNM official crimson red (#c60c30) and silver gray
- **Browser Compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)

## File Descriptions

### index.html
Main entry point. Contains:
- Header with UNM logo and title
- Grade scale display
- Course entry form container
- Results section
- Script import

### css/styles.css
Complete styling including:
- Base styles and reset
- Container and layout
- Header and logo styling
- Form elements and inputs
- Button styles with hover effects
- Results display
- Error message styling
- Responsive design breakpoints

### js/app.js
All JavaScript functionality:
- Grade values mapping
- Course management (add/remove)
- GPA calculation logic
- Input validation
- Results display
- Calculator reset

## Customization

To modify colors, update the hex values in `css/styles.css`:
- Primary color: `#c60c30` (UNM Crimson Red)
- Secondary color: `#a00a28` (Darker Red)
- Accent color: `#808080` (Silver Gray)

## Notes

- All calculations are performed client-side (no server required)
- No external dependencies - uses vanilla HTML, CSS, and JavaScript
- Responsive design ensures optimal viewing on all devices
