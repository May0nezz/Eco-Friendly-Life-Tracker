const scoreElement = document.getElementById('score');
const activeBtnElement = document.querySelectorAll('.activebtn');
const resetBtnElement = document.getElementById('resetbtn');

let totalScore = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')): 0;

scoreElement.textContent = totalScore;

activeBtnElement.forEach(button => {
    button.addEventListener('click', () => {
        const pointsAdd = parseInt(button.getAttribute('data-points'));
        totalScore += pointsAdd;
        localStorage.setItem('score', totalScore);
        scoreElement.textContent = totalScore;
    });
});

resetBtnElement.addEventListener('click', () => {
    totalScore = 0;
    localStorage.removeItem('score');
    scoreElement.textContent = totalScore;
});