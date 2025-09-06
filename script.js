const main = document.getElementById('content');
const paths = document.querySelectorAll('.path');

const hasVisited = sessionStorage.getItem('hasVisited');

if (!hasVisited) {
    setTimeout(() => {
      main.classList.add('visible');
    }, 2000);

    sessionStorage.setItem('hasVisited', 'true');
} else {
    paths.forEach(path => {
      path.style.strokeDashoffset = '0';
      path.style.animation = 'none';
    });
    main.classList.add('visible');
}