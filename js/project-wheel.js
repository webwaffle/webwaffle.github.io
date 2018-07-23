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
/*var currentIndex = 0;

function setWheel(index) {
    var p = projects[index];
    if(!p) {
        p = projects[0];
        currentIndex = 0;
    }
    document.querySelector('#project-name').innerHTML = p.name;
    document.querySelector('#project-desc').innerHTML = p.desc;
    console.log('set');
}
setWheel(0);
setInterval(function () {
    /*if (currentIndex - 1 > projects.length) {
        console.log('aaaaa');
        setWheel(0);
        currentIndex = 0;
    } else {
    setWheel(currentIndex + 1);
    //}
    currentIndex++;
    console.log('rotated');
}, 2000);*/
var projectSlide = w3.slideshow('.project', 3000);