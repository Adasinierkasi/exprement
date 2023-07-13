"use strict";

const childBox = document.querySelectorAll(".child"),
  openModalBtn = document.querySelectorAll(".dobavit__btn"),
  closeModalBtn = document.querySelector("#cross"),
  modal = document.querySelector(".card__hide"),
  sectionBody = document.querySelector(".sectionBody"),
  acc = document.querySelectorAll(".acc"),
  accBtn = document.querySelectorAll(".acc-btn"),
  chevronRight = document.querySelectorAll(".fa-chevron-right"),
  dominoMoney = document.querySelectorAll(".domino__money"),
  removeMoney = document.querySelectorAll(".line-through");


childBox.forEach((item, index) => {
  const [decrBtn, counter, inctBtn] = item.children;
  inctBtn.addEventListener("click", () => {
    counter.textContent = Number(counter.textContent) + 1;
    foo(true);
  });
  console.log(dominoMoney[0].textContent);
  const foo = (sof) => {
    if (sof) {
      console.log(index, removeMoney, dominoMoney);
      removeMoney[index].textContent =
        Number(removeMoney[index].textContent) + 936;
      dominoMoney[index].textContent =
        Number(dominoMoney[index].textContent) + 278;
    } else {
      dominoMoney[index].textContent =
        Number(dominoMoney[index].textContent) - 278;
      removeMoney[index].textContent =
        Number(removeMoney[index].textContent) - 936;
    }
  };
  decrBtn.addEventListener("click", () => {
    if (Number(counter.textContent) > 1) {
      counter.textContent = Number(counter.textContent) - 1;
      foo(false);
    } else {
      counter.textContent = Number(counter.textContent);
    }
  });
});

// // Counter
// let count = 1;
// for(let i = 0; i < childBox.length; i++){
// 	let item = childBox[i];
//   const counter = item.querySelector(".counter"),
//     inctBtn = item.querySelector(".increase"),
//     decrBtn = item.querySelector(".decrease"),
//     howMany = item.querySelector(".howmany");
//     console.log(inctBtn , decrBtn , howMany);

//   inctBtn.addEventListener("click", () => {
//     count++;
//     counter.textContent = count;
//     howMany.textContent = count * 158;
//   });
//   decrBtn.addEventListener("click", () => {
//     if (count === 0) {
//       count = 0;
//     } else {
//       count--;
//     }
//     counter.textContent = count;
//     howMany.textContent = `${count * 158} ₽`;
//   });
// };

// let increment = document.querySelectorAll('.increase'),
// decrement  = document.querySelectorAll('.decrease'),
// counter = document.querySelectorAll('.counter');

// for(let i = 0; i < increment.length; i++){
// 	increment.addEventListener('click',()=>{
// 		const incBtn = increment[i].target
// 		console.log(incBtn);
// 	});

// }

setTimeout(() => {
  modal.classList.add("show");
  sectionBody.classList.add("open");
}, 15000);
// Modal
openModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    sectionBody.classList.add("open");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  sectionBody.classList.remove("open");
});
sectionBody.addEventListener("click", () => {
  modal.classList.remove("show");
  sectionBody.classList.remove("open");
});



//accardion started

for (let i = 0; i < accBtn.length; i++) {
  accBtn[i].addEventListener("click", () => {
    if (acc[i].classList.contains("height")) {
      acc[i].classList.remove("height");
      chevronRight[i].classList.remove("rotate");
    } else {
      acc[i].classList.add("height");
      chevronRight[i].classList.add('rotate')
    }
  });
}
