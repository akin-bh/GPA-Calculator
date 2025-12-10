/* ============================================
   UNM GPA Calculator - JavaScript
   ============================================ */

// Grade point values mapping
const gradeValues = {
    'A+': 4.33, 'A': 4.00, 'A-': 3.67,
    'B+': 3.33, 'B': 3.00, 'B-': 2.67,
    'C+': 2.33, 'C': 2.00, 'C-': 1.67,
    'D+': 1.33, 'D': 1.00, 'D-': 0.67, 'F': 0.00
};

// ============================================
// Initialization
// ============================================

const DEFAULT_ROWS = 4;

document.addEventListener('DOMContentLoaded', function() {
    buildCourseRows(DEFAULT_ROWS);
    calculateGPA();
});

// ============================================
// Course Management
// ============================================

/**
 * Build a fixed set of course rows with placeholders
 * @param {number} count - number of rows to render
 */
function buildCourseRows(count = DEFAULT_ROWS) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';

    for (let id = 0; id < count; id++) {
        container.appendChild(createCourseRow(id));
    }
}

/**
 * Add one more course row on demand
 */
function addCourse() {
    const container = document.getElementById('coursesContainer');
    const id = container.children.length;
    container.appendChild(createCourseRow(id));
}

/**
 * Create a single course row element
 * @param {number} id
 * @returns {HTMLElement}
 */
function createCourseRow(id) {
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-entry';
    courseDiv.id = `course-${id}`;

    courseDiv.innerHTML = `
        <div class="form-group">
            <input type="text" placeholder="Course" class="courseName" aria-label="Course name">
        </div>
        <div class="form-group">
            <input type="number" min="0" max="12" value="" placeholder="Hours" class="creditHours" aria-label="Credit hours">
        </div>
        <div class="form-group">
            <select class="grade" aria-label="Letter grade">
                <option value="">Grade</option>
                ${Object.keys(gradeValues).map(g => `<option value="${g}">${g}</option>`).join('')}
            </select>
        </div>
    `;

    courseDiv.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('input', calculateGPA);
        el.addEventListener('change', calculateGPA);
    });

    return courseDiv;
}

// ============================================
// GPA Calculation
// ============================================

/**
 * Calculate the GPA based on entered courses
 */
function calculateGPA() {
    const error = document.getElementById('error');
    if (error) error.classList.remove('show');

    const courses = document.querySelectorAll('.course-entry');
    let totalHours = 0;
    let totalPoints = 0;
    let invalid = false;

    courses.forEach(course => {
        const hoursVal = course.querySelector('.creditHours').value;
        const hours = parseFloat(hoursVal);
        const grade = course.querySelector('.grade').value;

        // Skip empty rows
        if ((!grade && hoursVal === '') || (grade === '' && (hoursVal === '' || isNaN(hours)))) {
            return;
        }

        // If grade selected but hours invalid
        if (grade && (isNaN(hours) || hours <= 0)) {
            invalid = true;
            return;
        }

        if (grade) {
            totalHours += hours;
            totalPoints += hours * gradeValues[grade];
        }
    });

    if (invalid && error) {
        error.textContent = 'Enter credit hours greater than 0 for selected grades.';
        error.classList.add('show');
    }

    const gpa = totalHours > 0 ? (totalPoints / totalHours).toFixed(2) : '0.00';

    document.getElementById('totalHours').textContent = totalHours.toFixed(2).replace(/\.00$/, '');
    document.getElementById('totalPoints').textContent = totalPoints.toFixed(2);
    document.getElementById('finalGPA').textContent = gpa;
    document.getElementById('results').classList.add('show');
}

/**
 * Reset the calculator and clear all entries
 */
function resetCalculator() {
    buildCourseRows(DEFAULT_ROWS);
    document.getElementById('results').classList.remove('show');
    const error = document.getElementById('error');
    if (error) error.classList.remove('show');
    calculateGPA();
}
