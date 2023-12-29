const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.getElementById('yesBtn');

const wrapperRect = wrapper.getBoundingClientRect(); 

yesBtn.addEventListener('click', () => {
    window.location.href = 'pucchi.html';
});