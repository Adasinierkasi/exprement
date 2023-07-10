"use strict";

const childBox = document.querySelectorAll('.child'),
	openModalBtn = document.querySelectorAll('.dobavit__btn'),
	closeModalBtn = document.querySelector('#cross'),
	modal = document.querySelector(".card__hide"),
  sectionBody = document.querySelector(".sectionBody");

// Counter 
let count = 0
childBox.forEach(item => {
	const counter = item.querySelector('.counter'),
	inctBtn = item.querySelector('.increase'),
	decrBtn = item.querySelector('.decrease');

	inctBtn.addEventListener('click', () => {
		count++;
		counter.textContent = count
	})
	decrBtn.addEventListener('click', () => {
		if(count === 0) {
			count = 0
		} else {
			count--;
		}
		counter.textContent = count
	})
}) 



setTimeout(()=>{
  modal.classList.add('show')
  sectionBody.classList.add('open')
},15000)
// Modal 
openModalBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.classList.add('show')
    sectionBody.classList.add('open')
	})
})

closeModalBtn.addEventListener("click", () => {
	modal.classList.remove('show')
  sectionBody.classList.remove('open')
})


