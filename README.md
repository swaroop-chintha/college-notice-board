# 🎓 College Dashboard

A modern, responsive, and lightweight academic dashboard web application built exclusively with **HTML5**, **CSS3**, and **Vanilla JavaScript** (zero external frameworks or libraries).

---

## 🌟 Key Features

### 1. 📊 Dashboard Overview
- **Welcome Banner**: Personalized welcome message with real-time counters for pending assignments and upcoming exams.
- **Metric Cards**:
  - Total enrolled courses count
  - Overall aggregate attendance percentage
  - Pending assignment submissions counter
  - Upcoming examination count
- **Weekly Schedule / Timetable**: Day-by-day interactive timetable switcher (Mon–Fri) showing course names, timeslots, instructors, and lecture halls.
- **Quick Assignments**: Fast preview card of upcoming deadlines with status indicators.
- **Campus Announcements**: Live college circulars board with categories (Examinations, Academic, Campus Life).

### 2. 📚 My Courses
- Interactive course cards displaying course title, subject code, and faculty in-charge.
- Real-time syllabus completion progress bar for each subject.
- Instant course search/filtering capability.

### 3. 📅 Attendance Tracker
- Per-subject attendance statistics with attended/conducted ratio.
- Custom styled color-coded progress bars:
  - 🟢 **Green (Safe)**: &ge; 75%
  - 🟡 **Yellow (Warning)**: 65% – 74.9%
  - 🔴 **Red (Danger)**: < 65%
- Overall institutional attendance percentage calculation.

### 4. 📝 Assignments Management
- Tabular view of assignments with Course, Due Date, and Status tags.
- Dynamic interactive **"Mark as Completed"** button.
- Dynamic updates immediately reflect in:
  - Assignment status pills & disabled state
  - Global metric cards count
  - Sidebar notification badge
  - Dashboard quick view
- Status filter buttons: **All**, **Pending**, and **Completed**.

### 5. 🎯 Examination Schedule
- Cards for upcoming mid-term and end-term exams with subject codes, exam dates, time slots, and room venues.

### 6. 👤 Student Profile
- Complete student identity details:
  - Student Name & Initials Avatar
  - Roll / Registration Number
  - Department & Degree Program
  - Current Academic Year & Semester
  - Official College Email
  - Academic Advisor / Mentor details
  - Academic metrics (CGPA, Credits Completed, Total Courses)

### 7. 🎨 UI / UX & JavaScript Highlights
- **Design System**: Modern clean layout with crisp white background, rounded cards, subtle drop-shadows, and royal blue + purple gradient accents.
- **Dark Mode Toggle**: Toggle between light and dark mode with persistent user preference using browser `localStorage`.
- **Responsive Navigation**: Full desktop sidebar + mobile drawer menu with smooth backdrop blur.
- **CSS Grid & Flexbox**: Clean, fluid responsiveness across smartphones, tablets, and desktop displays.
- **Zero Dependencies**: Pure HTML5, CSS3, and modern ES6 JavaScript.

---

## 📁 Project Structure

```
college-dashboard/
│
├── index.html       # Semantic HTML5 layout and section containers
├── style.css        # CSS3 custom properties, theme styles, animations & responsive queries
├── script.js        # Vanilla JS logic, state management, event listeners, dynamic UI rendering
└── README.md        # Comprehensive documentation
```

---

## 🚀 How to Run

1. Open the project folder on your computer.
2. Double-click **`index.html`** to open it directly in any modern web browser (Chrome, Safari, Firefox, Edge).
   - Alternatively, right-click `index.html` and select **Open With** -> your favorite browser.
3. No local server, build step, npm, or installation required!
