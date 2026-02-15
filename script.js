/* ===== Typing Animation ===== */
const text = [
  "Integration Developer",
  "Boomi Specialist",
  "API & Automation Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;   // prevents errors if element missing

  if (count === text.length) count = 0;

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  typingEl.textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 70);
  }
})();


/* ===== Skills Scroll Animation ===== */
const progressBars = document.querySelectorAll(".skill-progress");

function animateSkills() {
  progressBars.forEach(bar => {
    const value = bar.dataset.width;
    if (value) bar.style.width = value;
  });
}

const skillsSection = document.querySelector("#skills");

if (skillsSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(skillsSection);
}


/* ===== Qualification Tabs ===== */
function showTab(evt, tabId) {

  const contents = document.querySelectorAll(".tab-content");
  const tabs = document.querySelectorAll(".tab-link");

  contents.forEach(content => {
    content.classList.remove("active");
  });

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  const selected = document.getElementById(tabId);
  if (selected) selected.classList.add("active");

  evt.currentTarget.classList.add("active");
}
/* Timeline animation */
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});
function openProject(title, role, desc, points) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalRole").textContent = role;
  document.getElementById("modalDesc").textContent = desc;

  const list = document.getElementById("modalPoints");
  list.innerHTML = "";

  points.split("|").forEach(point => {
    const li = document.createElement("li");
    li.textContent = point.trim();
    list.appendChild(li);
  });

  document.getElementById("projectModal").style.display = "block";
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}
