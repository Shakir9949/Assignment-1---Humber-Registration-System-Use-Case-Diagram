const usecases = document.querySelectorAll('.usecase');
const popup = document.getElementById('info-popup');
const popupTitle = document.getElementById('popup-title');
const popupList = document.getElementById('popup-list');
const closePopup = document.getElementById('close-popup');


usecases.forEach(uc => {
  uc.setAttribute('tabindex', '0');   
  uc.setAttribute('role', 'button');  
});


function showUseCase(el) {
  const name = el.textContent.trim();
  const tip = el.getAttribute('title');
  alert(tip ? `${name}\n\n${tip}` : `Use Case: ${name}`);
}


usecases.forEach(uc => {
  uc.addEventListener('click', () => showUseCase(uc));
});


usecases.forEach(uc => {
  uc.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showUseCase(uc);
    }
  });
// Fictitious info generator
const data = {
    "view-courses": [
        "CSD110 - Intro to Programming",
        "CSD220 - Web Development I",
        "CSD310 - Database Design",
        "CSD320 - Data Structures",
        "CSD410 - Software Engineering"
    ],
    "add-course": [
        "Added: CSD500 - Cloud Computing",
        "Added: CSD450 - Mobile App Dev",
        "Added: CSD460 - Cybersecurity",
        "Added: CSD480 - AI & ML Basics",
        "Added: CSD470 - Project Management"
    ],
    "remove-course": [
        "Removed: CSD150 - Obsolete Course",
        "Removed: CSD200 - Legacy Systems",
        "Removed: CSD250 - Old Database Models"
    ],
    "edit-course": [
        "Updated credits for CSD310",
        "Renamed CSD320 to ‘Advanced Data Structures’",
        "Changed instructor for CSD220"
    ],
    "student-add": [
        "Registered: COMP200 - Intro to AI",
        "Registered: COMP210 - Game Design",
        "Registered: COMP220 - Web Tech II",
        "Registered: COMP230 - Human-Computer Interaction"
    ],
    "student-drop": [
        "Dropped: MATH100 - Calculus I",
        "Dropped: COMP110 - Python Basics",
        "Dropped: ENGL150 - Communication Skills"
    ],
    "student-enrolled": [
        "CSD110 - Intro to Programming",
        "CSD220 - Web Development I",
        "CSD310 - Database Design"
    ],
    "prereq": [
        "Checking prerequisites for COMP350...",
        "All required courses satisfied."
    ],
    "fees": [
        "Outstanding Balance: $450",
        "Next Payment Due: Oct 30, 2025",
        "Tuition Status: Pending Clearance"
    ],
    "course-report": [
        "CSD110 - Avg Grade: 82%",
        "CSD220 - Avg Grade: 88%",
        "CSD310 - Avg Grade: 90%",
        "CSD320 - Avg Grade: 85%"
    ],
    "student-report": [
        "Student: Jane Doe - GPA: 3.8",
        "Student: John Smith - GPA: 3.5",
        "Student: Sarah Khan - GPA: 3.9",
        "Student: Luke Brown - GPA: 3.6"
    ]
};

// Show popup with fictitious info
usecases.forEach(uc => {
    uc.addEventListener('click', () => {
        const id = uc.id;
        popupTitle.textContent = `Use Case: ${uc.textContent}`;
        popupList.innerHTML = "";

        const items = data[id] || ["No data available for this use case."];
        items.slice(0, 5).forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            popupList.appendChild(li);
        });

        popup.classList.remove('hidden');
    });
});

// Close popup
closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});
popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.add('hidden');
});
