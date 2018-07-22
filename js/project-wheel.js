var projects = [
  {
    name: "Waffle",
    desc: "100% Organic Social Media"
  },
  {
    name: "Syrup",
    desc: "A simple Node.js chat application"
  }
]
var currentIndex = 0;
function setWheel (index) {
  var p = projects[index];
  document.querySelector('#project-name').innerHTML = p.name;
  document.querySelector('#project-desc').innerHTML = p.desc;
}
setInterval(2000, function() {
  setWheel(currentIndex + 1);
  currentIndex++;
});
setWheel(0);
