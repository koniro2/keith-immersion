const button = document.querySelectorAll('.btn');
const picPage = document.querySelector('.first-week-content');
const picPage2 = document.querySelector('.second-week-content');
const close = document.querySelectorAll('.close');
const morePic = document.querySelector('.more-pic');

button[0].addEventListener('click', () => {
  picPage.style.display = 'flex';

});

button[1].addEventListener('click', () => {
  picPage2.style.display = 'flex';
});

close[0].addEventListener('click', () => {
  //picPage.style.top = '-150em';
  picPage.style.display = 'none';
});

close[1].addEventListener('click', () => {
  picPage2.style.display = 'none';
});

const expBtn = document.querySelectorAll('.experience-button');

function On() {
  expBtn.forEach(ebtn => {
    ebtn.style.opacity = 1;
  })
};

function Out() {
  expBtn.forEach(ebtn => {
    ebtn.style.opacity = 0;
  })
};

const expPage = document.querySelector('.exp-tab');
const expClose = document.querySelector('.exp-close');
const dateTxt = document.querySelector('.date');
const expTxt = document.querySelector('.text');

/* First Week */

expBtn[0].addEventListener('click', () => {
  expTxt.innerHTML = `What I've experienced about this day is the hassle of sorting the paperwork. It was so tiring, yet I'd enjoy it.`;
  
  dateTxt.innerHTML = `January 13, 2025`;

  expPage.style.top = '0em';
});

expBtn[1].addEventListener('click', () => {
  expTxt.innerHTML = `I've experienced pressure about this day because we can't make a mistake.`;
  
  dateTxt.innerHTML = `January 14, 2025`;

  expPage.style.top = '0em';
});
expBtn[2].addEventListener('click', () => {
  expTxt.innerHTML = `I've experienced the same as Tuesday (January 14, 2025); I've also experienced joy on this day because I finished my work.`;

  dateTxt.innerHTML = `January 16, 2025`;
  
  expPage.style.top = '0em';
});

expBtn[3].addEventListener('click', () => {
  expTxt.innerHTML = `I've experienced sorting the books by its category.`;
  
  dateTxt.innerHTML = `January 17, 2025`;

  expPage.style.top = '0em';
});

/* Second Week */

expBtn[4].addEventListener('click', () => {
  expTxt.innerHTML = `It was the same as Friday (January 17, 2025).`;
  
  dateTxt.innerHTML = `January 20, 2025`;

  expPage.style.top = '0em';
});

expBtn[5].addEventListener('click', () => {
  expTxt.innerHTML = `I've experienced looking for the books that were requested by the company.`;
  
  dateTxt.innerHTML = `January 21, 2025`;

  expPage.style.top = '0em';
});

expBtn[6].addEventListener('click', () => {
  expTxt.innerHTML = `I've experienced enjoyment about this day because the company told me that I will make a website.`;
  
  dateTxt.innerHTML = `January 22, 2025`;

  expPage.style.top = '0em';
});

expBtn[7].addEventListener('click', () => {
  expTxt.innerHTML = `I've experienced the hassle of making a website without a clear instructions.`;
  
  dateTxt.innerHTML = `January 23, 2025`;

  expPage.style.top = '0em';
});

expBtn[8].addEventListener('click', () => {
  expTxt.innerHTML = `I've experienced excitement and enjoyment about this day because we graduated from our work immersion.`;
  
  dateTxt.innerHTML = `January 24, 2025`;

  expPage.style.top = '0em';
});

expClose.addEventListener('click', () => {
  expPage.style.top = '-150em';
})

const prof = document.querySelector('.profile-main');
const profClose = document.querySelector('.profile-close');
const btnProf = document.querySelector('.btn-profile');

btnProf.addEventListener('click', () => {
  prof.style.display = 'flex';
});

profClose.addEventListener('click', () => {
  prof.style.display = 'none';
});