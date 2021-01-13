const form = document.querySelector("#form");
const sendBtn = document.querySelector("#sendBtn");

const userAge = document.querySelector("#userAge");

const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal__body");
const btnCloseModal = document.querySelector("#btnCloseModal");

const openModal = () => (modal.style.display = "block");

const closeModal = () => {
  modal.style.display = "none";
  form.reset();
};

const showInfo = (name, age, date, education, gender) => {
  modalBody.innerHTML = `<p> Ваше имя: ${name} </p>
  <p> Возраст: ${age} </p>
  <p> Дата рождения: ${date} </p>
  <p> Образование: ${education} </p>
  <p> Пол: ${gender} </p>`;
};

const validation = (element, label, error) => {
  if (!element.value) {
    element.style.outline = "2px solid #C74A3D";
    element.style.marginBottom = "0";

    error.style.display = "block";
    error.style.marginBottom = "20px";

    label.style.color = "#C74A3D";

    return false;
  }

  return true;
};

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const userName = document.querySelector("#userName");
  const userDay = document.querySelector("#userDay");
  const userEducation = document.querySelector("#userEducation");
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const labelName = document.querySelector("#labelName");
  const labelNameCheck = document.querySelector("#labelNameCheck");

  if (validation(userName, labelName, labelNameCheck)) {
    userName.style.outline = "none";
    userName.style.marginBottom = "20px";

    labelName.style.color = "none";

    labelNameCheck.style.marginBottom = "0";
    labelNameCheck.style.display = "none";

    openModal();
    showInfo(
      userName.value,
      userAge.value,
      userDay.value,
      userEducation.value,
      gender
    );
  } else {
    setTimeout(() => {
      userName.style.outline = "none";
      userName.style.marginBottom = "20px";

      labelName.style.color = "";

      labelNameCheck.style.marginBottom = "0";
      labelNameCheck.style.display = "none";
    }, 2000);
  }
});

btnCloseModal.addEventListener("click", () => {
  closeModal();
  form.reset();
});

modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__wrapper")) {
    closeModal();
  }
});

userAge.onkeypress = (event) => {
  if (event.keyCode < 48 || event.keyCode > 57) {
    return false;
  } else {
    userAge.style.outline = "1px solid green";
  }
};
