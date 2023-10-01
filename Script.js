const mainLayout = document.querySelector(".main-layout");
const signLayout = document.querySelector(".sign-layout");
const signInBtn = document.querySelector(".layout header a");
const backBtn = document.querySelector(".sign-layout i");

signLayout.remove();
signInBtn.addEventListener("click", function () {
   loading();
   setTimeout(() => {
      mainLayout.remove();
      document.body.append(signLayout);
   }, 3500);
});
backBtn.addEventListener("click", function () {
   loading();
   setTimeout(() => {
      signLayout.remove();
      document.body.append(mainLayout);
   }, 3500);
});
const loading = function () {
   document.body.style.opacity = ".25";
   let bar = document.createElement("div");
   bar.className = "load-bar";
   document.body.before(bar);

   let loadedPart = document.createElement("span");
   loadedPart.className = "loaded";
   bar.appendChild(loadedPart);

   let progress = 0;
   let intervalFun = setInterval(function () {
      loadedPart.style.width = `${progress}% `;
      console.log(parseInt(loadedPart.style.width));
      if (progress <= 100) {
         progress += 20;
      } else {
         clearInterval(intervalFun);
         progress = 0;
         bar.style.display = "none";
         document.body.style.opacity = 1;
      }
   }, 500);
   // transition period must be the same as the setIntervals ms
};

const questLis = document.querySelectorAll(".questions .head ul li .quest");
questLis.forEach(function (li) {
   li.addEventListener("click", function (ev) {
      ev.currentTarget.classList.toggle("active");

      let mark = document.createElement("i");
      if (ev.currentTarget.classList.contains("active")) {
         ev.currentTarget.lastElementChild.remove();
         mark.classList.add("fa-solid", "fa-xmark");
         ev.currentTarget.append(mark);
      } else {
         ev.currentTarget.lastElementChild.remove();
         mark.classList.add("fa-solid", "fa-plus");
         ev.currentTarget.append(mark);
      }
   });
});

const mailBtns = document.querySelectorAll("a.btn.mail-bt");
mailBtns.forEach((btn) => {
   btn.addEventListener("click", function (ev) {
      console.log(this.previousElementSibling.focus());
   });
});
