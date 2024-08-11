// script.js

document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.getElementById("registerBtn");
  const formContainer = document.getElementById("formContainer");
  const gridContainer = document.getElementById("gridContainer");
  const employeeForm = document.getElementById("employeeForm");
  const overlay = document.getElementById("overlay");

  registerBtn.addEventListener("click", function () {
    gridContainer.classList.add("hidden");
    overlay.classList.add("active");
    formContainer.classList.remove("hidden");
  });
  // form close
  let formClose = document.getElementById("formClose");
  formClose.addEventListener("click", () => {
    formContainer.classList.add("hidden");
    overlay.classList.remove("active");
    gridContainer.classList.remove("hidden");
  });
  employeeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const designation = document.getElementById("designation").value;
    const department = document.getElementById("department").value;
    const email = document.getElementById("email").value;
    const selectedGender = document.querySelector(
      'input[name="gender"]:checked'
    ).value;

    let employees = JSON.parse(localStorage.getItem("employees")) || {
      Sales: [],
      Technical: [],
      HR: [],
      Telecalling: [],
    };

    employees[department].push({
      name,
      salary,
      designation,
      email,
      selectedGender,
    });
    localStorage.setItem("employees", JSON.stringify(employees));

    // displayEmployees();
    employeeForm.reset();
    formContainer.classList.add("hidden");
    gridContainer.classList.remove("hidden");
    overlay.classList.remove("active");
  });

  function displayEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || {
      Sales: [],
      Technical: [],
      HR: [],
      Telecalling: [],
    };

    document
      .querySelectorAll(".employeeList")
      .forEach((list) => (list.innerHTML = ""));

    for (const dept in employees) {
      employees[dept].forEach((employee) => {
        const div = document.createElement("div");
        div.classList.add("employee");

        const nameDiv = document.createElement("div");
        nameDiv.innerHTML = `<label>Name:</label> ${employee.name}`;
        nameDiv.classList.add("info");

        const salaryDiv = document.createElement("div");
        salaryDiv.innerHTML = `<label>Salary:</label> ${employee.salary}`;
        salaryDiv.classList.add("info");

        const designationDiv = document.createElement("div");
        designationDiv.innerHTML = `<label>Designation:</label> ${employee.designation}`;
        designationDiv.classList.add("info");

        const emailDiv = document.createElement("div");
        emailDiv.innerHTML = `<label>Email:</label> ${employee.email}`;
        emailDiv.classList.add("info");

        const departmentDiv = document.createElement("div");
        departmentDiv.innerHTML = `<label>Department:</label> ${dept}`;
        departmentDiv.classList.add("info");

        div.appendChild(nameDiv);
        div.appendChild(salaryDiv);
        div.appendChild(designationDiv);
        div.appendChild(emailDiv);
        div.appendChild(departmentDiv);

        const deptDiv = document
          .getElementById(`${dept.toLowerCase()}Dept`)
          .querySelector(".employeeList");
        deptDiv.appendChild(div);
      });
    }
  }

  // displayEmployees();
});
// to redirect to new page
function redirectToDepartment(department) {
  window.location.href = `department.html?department=${department}`;
}

// side bar open

let sideMenu = document.getElementById("sideMenu");
let openBars = document.getElementById("openBars");
let closeBar = document.getElementById("closeBar");

openBars.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(-16rem)";
});
closeBar.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(0rem)";
});
sideMenu.addEventListener("mouseleave", () => {
  sideMenu.style.transform = "translateX(0rem)";
});
