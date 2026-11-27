/**
 * College Dashboard - Vanilla JavaScript Implementation
 * Features:
 *  - Section Navigation (Sidebar & CTA buttons)
 *  - Mobile responsive drawer sidebar
 *  - Light / Dark Mode Toggle with localStorage persistence
 *  - Dynamic Rendering of Courses, Attendance, Assignments, Timetable, Announcements, Profile
 *  - Interactive Assignment Completion & Status Filter
 *  - Timetable Day Switcher
 *  - Course Search Filter
 */

// ==========================================
// 1. SAMPLE DATA (Student, Academic & College)
// ==========================================
const studentData = {
  profile: {
    fullName: "Vybhav Swaroop",
    initials: "VS",
    rollNumber: "CS2023-0482",
    department: "Computer Science & Engineering",
    academicYear: "3rd Year (Semester VI)",
    email: "vybhav.swaroop@college.edu",
    advisor: "Dr. Alan Turing, Professor",
    cgpa: "8.92",
    creditsCompleted: 124,
    program: "Bachelor of Technology (Honors)"
  },

  courses: [
    {
      id: "cs301",
      code: "CS301",
      name: "Database Management Systems",
      faculty: "Dr. Arvind Sharma",
      credits: 4,
      progress: 82,
      attendedClasses: 36,
      totalClasses: 40
    },
    {
      id: "cs302",
      code: "CS302",
      name: "Computer Networks & Security",
      faculty: "Prof. Priya Nair",
      credits: 4,
      progress: 74,
      attendedClasses: 32,
      totalClasses: 38
    },
    {
      id: "cs303",
      code: "CS303",
      name: "Design & Analysis of Algorithms",
      faculty: "Dr. Rajesh Iyer",
      credits: 4,
      progress: 88,
      attendedClasses: 41,
      totalClasses: 45
    },
    {
      id: "cs304",
      code: "CS304",
      name: "Operating Systems & Kernels",
      faculty: "Dr. Meera Nambiar",
      credits: 4,
      progress: 65,
      attendedClasses: 27,
      totalClasses: 36
    },
    {
      id: "cs305",
      code: "CS305",
      name: "Cloud Computing & DevOps",
      faculty: "Prof. Rohan Desai",
      credits: 3,
      progress: 90,
      attendedClasses: 28,
      totalClasses: 30
    },
    {
      id: "cs306",
      code: "CS306",
      name: "Software Engineering & Agile",
      faculty: "Prof. Shalini Varma",
      credits: 3,
      progress: 58,
      attendedClasses: 22,
      totalClasses: 32
    }
  ],

  assignments: [
    {
      id: 1,
      name: "B+ Tree Indexing & Query Optimization",
      course: "Database Management Systems",
      courseCode: "CS301",
      dueDate: "Tomorrow, 11:59 PM",
      status: "pending" // 'pending' | 'submitted'
    },
    {
      id: 2,
      name: "Socket Programming Client-Server in C",
      course: "Computer Networks & Security",
      courseCode: "CS302",
      dueDate: "Dec 02, 2026",
      status: "pending"
    },
    {
      id: 3,
      name: "Dynamic Programming: Knapsack & TSP",
      course: "Design & Analysis of Algorithms",
      courseCode: "CS303",
      dueDate: "Dec 05, 2026",
      status: "pending"
    },
    {
      id: 4,
      name: "Linux Custom System Call Implementation",
      course: "Operating Systems & Kernels",
      courseCode: "CS304",
      dueDate: "Nov 22, 2026",
      status: "submitted"
    },
    {
      id: 5,
      name: "Kubernetes Cluster Deployment Helm Chart",
      course: "Cloud Computing & DevOps",
      courseCode: "CS305",
      dueDate: "Nov 25, 2026",
      status: "submitted"
    }
  ],

  examinations: [
    {
      id: "ex1",
      subject: "Database Management Systems",
      code: "CS301",
      date: "Dec 14, 2026",
      time: "09:30 AM - 12:30 PM",
      venue: "Hall B-302, Academic Block 2",
      type: "End-Term Theory"
    },
    {
      id: "ex2",
      subject: "Design & Analysis of Algorithms",
      code: "CS303",
      date: "Dec 17, 2026",
      time: "09:30 AM - 12:30 PM",
      venue: "Hall A-101, Main Block",
      type: "End-Term Theory"
    },
    {
      id: "ex3",
      subject: "Computer Networks & Security",
      code: "CS302",
      date: "Dec 20, 2026",
      time: "02:00 PM - 05:00 PM",
      venue: "Hall C-204, IT Block",
      type: "End-Term Theory"
    },
    {
      id: "ex4",
      subject: "Operating Systems Lab Practical",
      code: "CS304-P",
      date: "Dec 23, 2026",
      time: "10:00 AM - 01:00 PM",
      venue: "Systems Lab 3",
      type: "Practical Exam"
    }
  ],

  timetable: {
    Mon: [
      { time: "09:00 - 10:00 AM", title: "Database Management Systems", faculty: "Dr. Arvind Sharma", room: "LT-201" },
      { time: "10:15 - 11:15 AM", title: "Computer Networks", faculty: "Prof. Priya Nair", room: "LT-104" },
      { time: "01:30 - 03:30 PM", title: "OS Kernel Lab (Batch 1)", faculty: "Dr. Meera Nambiar", room: "Lab-3" }
    ],
    Tue: [
      { time: "09:00 - 10:00 AM", title: "Algorithms Design", faculty: "Dr. Rajesh Iyer", room: "LT-202" },
      { time: "10:15 - 11:15 AM", title: "Cloud Computing", faculty: "Prof. Rohan Desai", room: "LT-204" },
      { time: "02:00 - 04:00 PM", title: "DBMS Lab Session", faculty: "Dr. Arvind Sharma", room: "Lab-1" }
    ],
    Wed: [
      { time: "09:00 - 10:00 AM", title: "Software Engineering", faculty: "Prof. Shalini Varma", room: "LT-102" },
      { time: "10:15 - 11:15 AM", title: "Operating Systems", faculty: "Dr. Meera Nambiar", room: "LT-201" },
      { time: "11:30 - 12:30 PM", title: "Design & Analysis of Algorithms", faculty: "Dr. Rajesh Iyer", room: "LT-202" }
    ],
    Thu: [
      { time: "09:00 - 10:00 AM", title: "Computer Networks & Security", faculty: "Prof. Priya Nair", room: "LT-104" },
      { time: "10:15 - 11:15 AM", title: "Database Management Systems", faculty: "Dr. Arvind Sharma", room: "LT-201" },
      { time: "02:00 - 04:00 PM", title: "Cloud & DevOps Lab", faculty: "Prof. Rohan Desai", room: "Cloud Lab" }
    ],
    Fri: [
      { time: "09:00 - 10:00 AM", title: "Algorithms Problem Solving", faculty: "Dr. Rajesh Iyer", room: "LT-202" },
      { time: "10:15 - 11:15 AM", title: "Software Engineering & Agile", faculty: "Prof. Shalini Varma", room: "LT-102" },
      { time: "02:00 - 03:30 PM", title: "Department Seminar & Mentorship", faculty: "Faculty Committee", room: "Auditorium" }
    ]
  },

  announcements: [
    {
      id: "an1",
      category: "Examinations",
      title: "End-Semester Examination Schedule Published",
      date: "Nov 25, 2026",
      summary: "Detailed schedule and seat allocation for Autumn Semester Examinations are now available on the official portal."
    },
    {
      id: "an2",
      category: "Academic",
      title: "Course Project Submissions & Code Reviews",
      date: "Nov 23, 2026",
      summary: "All 3rd-year students must push their final repository commits and documentation by Dec 10 for evaluation."
    },
    {
      id: "an3",
      category: "Campus Life",
      title: "Annual Tech Symposium 'Innovate 2026' Registrations",
      date: "Nov 20, 2026",
      summary: "Participate in hackathons, robotics challenges, and guest keynotes. Early bird registration ends this Friday."
    }
  ]
};

// ==========================================
// 2. STATE & CACHE
// ==========================================
let currentActiveDay = "Mon";
let currentAssignmentFilter = "all";

// ==========================================
// 3. CORE DOM INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSidebarAndNavigation();
  renderStudentProfileHeaders();
  renderDashboardMetrics();
  renderWeeklyTimetable();
  renderDashboardAnnouncements();
  renderDashboardQuickAssignments();
  renderCoursesList();
  renderAttendanceSection();
  renderAssignmentsTable();
  renderExaminations();
  renderProfileSection();
  initAssignmentFilters();
  initCourseSearch();
});

// ==========================================
// 4. THEME TOGGLE (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem("eduportal-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "☀️";
    themeLabel.textContent = "Light";
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.textContent = "🌙";
    themeLabel.textContent = "Dark";
  }

  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    if (isDark) {
      themeIcon.textContent = "☀️";
      themeLabel.textContent = "Light";
      localStorage.setItem("eduportal-theme", "dark");
    } else {
      themeIcon.textContent = "🌙";
      themeLabel.textContent = "Dark";
      localStorage.setItem("eduportal-theme", "light");
    }
  });
}

// ==========================================
// 5. SIDEBAR & SECTION NAVIGATION
// ==========================================
function initSidebarAndNavigation() {
  const sidebar = document.getElementById("sidebar");
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const navItems = document.querySelectorAll(".nav-item");
  const viewAllAssignmentsBtn = document.getElementById("viewAllAssignmentsBtn");

  // Section titles dictionary for dynamic topbar title update
  const sectionHeaders = {
    dashboard: {
      title: "Dashboard Overview",
      subtitle: "Welcome back! Here's your academic summary."
    },
    courses: {
      title: "My Courses",
      subtitle: "Active enrolled curriculum, faculty coordinators, and syllabus progress."
    },
    attendance: {
      title: "Attendance Record",
      subtitle: "Course-wise attendance breakdown and minimum eligibility tracking."
    },
    assignments: {
      title: "Assignments & Coursework",
      subtitle: "Manage deliverables, view due dates, and mark submissions."
    },
    examination: {
      title: "Examination Schedule",
      subtitle: "Upcoming end-term theory exams, practical laboratories, and seat venues."
    },
    profile: {
      title: "Student Profile",
      subtitle: "Official student credentials and institutional records."
    }
  };

  // Switch Active Section
  window.navigateToSection = function (sectionKey) {
    // Update sidebar navigation active item
    navItems.forEach((btn) => {
      if (btn.dataset.section === sectionKey) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Toggle content sections
    const targetSection = document.getElementById(`section-${sectionKey}`);
    const allSections = document.querySelectorAll(".content-section");
    allSections.forEach((sec) => sec.classList.remove("active"));
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Update Topbar header titles
    const meta = sectionHeaders[sectionKey] || {
      title: "College Dashboard",
      subtitle: "Academic Management Portal"
    };
    document.getElementById("pageTitle").textContent = meta.title;
    document.getElementById("pageSubtitle").textContent = meta.subtitle;

    // Close mobile sidebar drawer if open
    closeMobileSidebar();
  };

  // Nav click events
  navItems.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-section");
      navigateToSection(section);
    });
  });

  if (viewAllAssignmentsBtn) {
    viewAllAssignmentsBtn.addEventListener("click", () => {
      navigateToSection("assignments");
    });
  }

  // Mobile Drawer Toggle
  function openMobileSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
  }

  function closeMobileSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
  }

  if (menuToggleBtn) menuToggleBtn.addEventListener("click", openMobileSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeMobileSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeMobileSidebar);
}

// ==========================================
// 6. RENDER PROFILE HEADERS & HERO BANNER
// ==========================================
function renderStudentProfileHeaders() {
  const profile = studentData.profile;

  document.getElementById("welcomeHeading").textContent = `Hello, ${profile.fullName.split(" ")[0]}! 👋`;
  document.getElementById("sidebarAvatar").textContent = profile.initials;
  document.getElementById("sidebarUserName").textContent = profile.fullName;
  document.getElementById("sidebarUserDept").textContent = profile.department;
  document.getElementById("topNavAvatar").textContent = profile.initials;
  document.getElementById("topNavName").textContent = profile.fullName;
}

// ==========================================
// 7. RENDER DASHBOARD METRICS
// ==========================================
function renderDashboardMetrics() {
  const totalCourses = studentData.courses.length;

  // Calculate Overall Attendance Percentage
  const totalAttended = studentData.courses.reduce((sum, c) => sum + c.attendedClasses, 0);
  const totalConducted = studentData.courses.reduce((sum, c) => sum + c.totalClasses, 0);
  const overallAttPct = ((totalAttended / totalConducted) * 100).toFixed(1);

  // Count Pending Assignments
  const pendingCount = studentData.assignments.filter((a) => a.status === "pending").length;

  // Upcoming Exams
  const upcomingExams = studentData.examinations.length;

  // Update Metric Cards
  document.getElementById("metricCoursesCount").textContent = totalCourses;
  document.getElementById("metricAttendancePct").textContent = `${overallAttPct}%`;
  document.getElementById("metricPendingAssignments").textContent = pendingCount;
  document.getElementById("metricUpcomingExams").textContent = upcomingExams;

  // Update Hero Banner stats
  document.getElementById("heroPendingCount").textContent = pendingCount;
  document.getElementById("heroUpcomingExams").textContent = upcomingExams;

  // Update Sidebar Badge
  const badge = document.getElementById("pendingAssignmentsBadge");
  if (badge) {
    badge.textContent = pendingCount;
    badge.style.display = pendingCount > 0 ? "inline-block" : "none";
  }

  // Update Attendance overall tag
  const overallBadge = document.getElementById("attendanceOverallBadge");
  if (overallBadge) {
    overallBadge.textContent = `Overall: ${overallAttPct}%`;
  }
}

// ==========================================
// 8. RENDER WEEKLY TIMETABLE
// ==========================================
function renderWeeklyTimetable() {
  const daysContainer = document.getElementById("timetableDays");
  const timetableList = document.getElementById("timetableList");
  const days = Object.keys(studentData.timetable);

  // Render Day filter buttons
  daysContainer.innerHTML = days
    .map(
      (day) =>
        `<button class="day-btn ${day === currentActiveDay ? "active" : ""}" data-day="${day}">${day}</button>`
    )
    .join("");

  // Attach listener to day buttons
  daysContainer.querySelectorAll(".day-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentActiveDay = btn.getAttribute("data-day");
      renderWeeklyTimetable();
    });
  });

  // Render list of classes for chosen day
  const classesForDay = studentData.timetable[currentActiveDay] || [];
  if (classesForDay.length === 0) {
    timetableList.innerHTML = `<p class="card-subtitle">No scheduled classes for ${currentActiveDay}.</p>`;
    return;
  }

  timetableList.innerHTML = classesForDay
    .map(
      (item) => `
      <div class="timetable-item">
        <div class="time-slot">⏰ ${item.time}</div>
        <div class="class-details">
          <div class="class-title">${item.title}</div>
          <div class="class-meta">Instructor: ${item.faculty}</div>
        </div>
        <span class="class-room-badge">${item.room}</span>
      </div>
    `
    )
    .join("");
}

// ==========================================
// 9. RENDER DASHBOARD QUICK ASSIGNMENTS & ANNOUNCEMENTS
// ==========================================
function renderDashboardQuickAssignments() {
  const listEl = document.getElementById("quickAssignmentsList");
  // Show up to 3 pending or latest assignments
  const previewAssignments = studentData.assignments.slice(0, 3);

  listEl.innerHTML = previewAssignments
    .map(
      (assign) => `
      <div class="quick-assign-item">
        <div class="quick-assign-info">
          <h4>${assign.name}</h4>
          <p>${assign.courseCode} • Due ${assign.dueDate}</p>
        </div>
        <span class="status-pill ${assign.status}">${assign.status === "submitted" ? "Completed" : "Pending"}</span>
      </div>
    `
    )
    .join("");
}

function renderDashboardAnnouncements() {
  const grid = document.getElementById("announcementsGrid");
  grid.innerHTML = studentData.announcements
    .map(
      (item) => `
      <div class="announcement-card">
        <div>
          <span class="announcement-badge">${item.category}</span>
          <h4>${item.title}</h4>
          <p>${item.summary}</p>
        </div>
        <span class="announcement-date">📅 Posted on ${item.date}</span>
      </div>
    `
    )
    .join("");
}

// ==========================================
// 10. RENDER MY COURSES SECTION
// ==========================================
function renderCoursesList(filterText = "") {
  const coursesGrid = document.getElementById("coursesGrid");
  const filtered = studentData.courses.filter(
    (c) =>
      c.name.toLowerCase().includes(filterText.toLowerCase()) ||
      c.code.toLowerCase().includes(filterText.toLowerCase()) ||
      c.faculty.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filtered.length === 0) {
    coursesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2rem; text-align: center; color: var(--text-muted);">
        No courses found matching "${filterText}".
      </div>`;
    return;
  }

  coursesGrid.innerHTML = filtered
    .map(
      (course) => `
      <div class="course-card">
        <div>
          <div class="course-header">
            <span class="course-code">${course.code}</span>
            <span class="course-credits">${course.credits} Credits</span>
          </div>
          <h3 class="course-title">${course.name}</h3>
          <p class="course-faculty">👨‍🏫 Faculty: <span>${course.faculty}</span></p>
        </div>
        <div class="progress-container">
          <div class="progress-header">
            <span>Syllabus Covered</span>
            <span>${course.progress}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${course.progress}%;"></div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

function initCourseSearch() {
  const searchInput = document.getElementById("courseSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderCoursesList(e.target.value.trim());
    });
  }
}

// ==========================================
// 11. RENDER ATTENDANCE SECTION
// ==========================================
function renderAttendanceSection() {
  const container = document.getElementById("attendanceList");

  container.innerHTML = studentData.courses
    .map((course) => {
      const percentage = ((course.attendedClasses / course.totalClasses) * 100).toFixed(1);
      let statusClass = "safe";
      if (percentage < 75 && percentage >= 65) {
        statusClass = "warning";
      } else if (percentage < 65) {
        statusClass = "danger";
      }

      return `
        <div class="attendance-row">
          <div class="att-info-top">
            <div>
              <span class="att-course-name">${course.name} (${course.code})</span>
              <span class="att-faculty">• ${course.faculty}</span>
            </div>
            <div class="att-stats">
              <span class="att-ratio">${course.attendedClasses} / ${course.totalClasses} Classes</span>
              <span class="att-percentage ${statusClass}">${percentage}%</span>
            </div>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill ${statusClass}" style="width: ${percentage}%;"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

// ==========================================
// 12. RENDER ASSIGNMENTS & INTERACTIVE COMPLETION
// ==========================================
function renderAssignmentsTable() {
  const tbody = document.getElementById("assignmentsTableBody");

  const filtered = studentData.assignments.filter((assign) => {
    if (currentAssignmentFilter === "all") return true;
    return assign.status === currentAssignmentFilter;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">
          No assignments found in this category.
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map(
      (assign) => `
      <tr>
        <td class="assign-title-cell">${assign.name}</td>
        <td><span class="assign-code-tag">${assign.courseCode}</span> ${assign.course}</td>
        <td>📅 ${assign.dueDate}</td>
        <td>
          <span class="status-pill ${assign.status}">
            ${assign.status === "submitted" ? "Completed" : "Pending"}
          </span>
        </td>
        <td>
          ${
            assign.status === "submitted"
              ? `<button class="action-btn btn-completed" disabled>✓ Done</button>`
              : `<button class="action-btn btn-complete" onclick="markAssignmentAsCompleted(${assign.id})">Mark as Completed</button>`
          }
        </td>
      </tr>
    `
    )
    .join("");
}

// Mark assignment as completed dynamically
window.markAssignmentAsCompleted = function (assignmentId) {
  const target = studentData.assignments.find((a) => a.id === assignmentId);
  if (target) {
    target.status = "submitted";

    // Refresh assignments table
    renderAssignmentsTable();

    // Refresh dashboard quick assignments & metrics
    renderDashboardQuickAssignments();
    renderDashboardMetrics();
  }
};

function initAssignmentFilters() {
  const filterButtons = document.querySelectorAll("#assignmentFilters .filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentAssignmentFilter = btn.getAttribute("data-filter");
      renderAssignmentsTable();
    });
  });
}

// ==========================================
// 13. RENDER EXAMINATION SCHEDULE
// ==========================================
function renderExaminations() {
  const grid = document.getElementById("examGrid");
  grid.innerHTML = studentData.examinations
    .map(
      (exam) => `
      <div class="exam-card">
        <div class="exam-header">
          <span class="exam-type">${exam.type}</span>
          <span class="course-code">${exam.code}</span>
        </div>
        <h4>${exam.subject}</h4>
        <span class="exam-code">Official Semester Examination</span>

        <div class="exam-details-list">
          <div class="exam-detail-row">
            <span>📅 Date:</span>
            <span>${exam.date}</span>
          </div>
          <div class="exam-detail-row">
            <span>⏰ Time:</span>
            <span>${exam.time}</span>
          </div>
          <div class="exam-detail-row">
            <span>📍 Venue:</span>
            <span>${exam.venue}</span>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// ==========================================
// 14. RENDER PROFILE SECTION
// ==========================================
function renderProfileSection() {
  const p = studentData.profile;

  document.getElementById("profileLargeAvatar").textContent = p.initials;
  document.getElementById("profileName").textContent = p.fullName;
  document.getElementById("profileDepartment").textContent = p.department;

  document.getElementById("profileStatCourses").textContent = studentData.courses.length;
  document.getElementById("profileStatGpa").textContent = p.cgpa;
  document.getElementById("profileStatCredits").textContent = p.creditsCompleted;

  document.getElementById("profileDetailName").textContent = p.fullName;
  document.getElementById("profileDetailRoll").textContent = p.rollNumber;
  document.getElementById("profileDetailDept").textContent = p.department;
  document.getElementById("profileDetailYear").textContent = p.academicYear;
  document.getElementById("profileDetailEmail").textContent = p.email;
  document.getElementById("profileDetailAdvisor").textContent = p.advisor;
}
