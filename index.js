const sendBtn = document.querySelector("#sendBtn");
const userData = {};
sendBtn.addEventListener("click", () => {
  const inputName = document.querySelector("#inputName");
  if (!inputName.value) {
    document.getElementById("inputName").style.border = "2px solid #C74A3D";
    document.getElementById("labelName").style.color = "#C74A3D";
    document.getElementById("labelNameCheck").style.display = "block";
    document.getElementById("labelNameCheck").style.marginBottom = "20px";
    document.getElementById("inputName").style.marginBottom = "0";
    setTimeout(() => {
      document.getElementById("inputName").style.border = "";
      document.getElementById("labelName").style.color = "";
      document.getElementById("labelNameCheck").style.display = "";
      document.getElementById("labelNameCheck").style.marginBottom = "0";
      document.getElementById("inputName").style.marginBottom = "20px";
    }, 2000);
  } else {
    userData.name = inputName.value; // сохранение значения
    inputName.value = "";

    const inputAge = document.querySelector("#inputAge");
    userData.age = Number(inputAge.value);
    inputAge.value = "";

    const inputDay = document.querySelector("#inputDay");
    userData.day = inputDay.value;
    inputDay.value = "";

    const inputEducation = document.querySelector("#inputEducation");
    userData.education = inputEducation.value;

    const inputGender = document.querySelector("#genderChoice1");
    if (inputGender.checked) {
      userData.gender = document.blank.gender[0].value;
    } else {
      userData.gender = document.blank.gender[1].value;
      inputGender.checked = true;
    }
    console.log(userData);

    const bodyModal = document.querySelector("#bodyModal");
    for (var data in userData) {
      data = `<p> ${data}: ${userData[data]} </p>`;
      bodyModal.insertAdjacentHTML("beforeend", data);
    }

    const modalContent = document.querySelector("#modal");
    modalContent.hidden = false;
    const btnCloseModal = document.querySelector("#btnCloseModal");
    btnCloseModal.addEventListener("click", () => {
      modalContent.hidden = true;
    });
  }
});
