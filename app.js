
function showAboutTab(tab) {
  const tabs = ['summary', 'professional', 'academic'];
  tabs.forEach(id => {
    document.getElementById('about-' + id).style.display = id === tab ? 'block' : 'none';
  });
}

const titles = [
  "Java Developer",
  "Programmer",
  "Tech Enthusiast",
  "DSA Enthusiast"
];
let index = 0, charIndex = 0, currentText = '', isDeleting = false;
function type() {
  const typingDiv = document.getElementById('typingText');
  if (index >= titles.length) index = 0;
  currentText = titles[index];
  if (isDeleting) {
    typingDiv.textContent = currentText.substring(0, charIndex--);
  } else {
    typingDiv.textContent = currentText.substring(0, charIndex++);
  }
  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    setTimeout(type, 400);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();