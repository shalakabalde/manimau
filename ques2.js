const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.querySelector('.no-btn'); 

const wrapperRect = wrapper.getBoundingClientRect(); 
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    window.location.href = 'ques3.html';
});

noBtn.addEventListener('mouseover', () => {

    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;

    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

})

