document.getElementById('yesBtn').addEventListener('click', () => {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = 'Eu já sabia, agora clique neste <a href="https://www.youtube.com/watch?v=d7BpBAL2ztc">link</a>';
    messageDiv.classList.remove('hidden');
});

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
