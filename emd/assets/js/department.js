// department.js

document.addEventListener("DOMContentLoaded", function () {
  const departmentTitle = document.getElementById("departmentTitle");
  const departmentHeader = document.getElementById("departmentHeader");
  const employeeProfileContainer = document.getElementById(
    "employeeProfileContainer"
  );

  const urlParams = new URLSearchParams(window.location.search);
  const department = urlParams.get("department");

  // const urlParams = new URLSearchParams(window.location.search);
  // const department = urlParams.get('department');

  // console.log(department); //This will log 'HR' if the URL is department.html?department=HR
  if (!department) {
    window.location.href = "index.html";
  }

  departmentTitle.textContent = `${department} Department`;
  departmentHeader.textContent = `${department} Department`;

  function displayEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || {
      Sales: [],
      Technical: [],
      HR: [],
      Telecalling : [],
    };

    const deptEmployees = employees[department] || [];

    deptEmployees.forEach((employee) => {
      const div = document.createElement("div");
      div.classList.add("profile-card");

      const nameDiv = document.createElement("div");
      nameDiv.innerHTML = `<label>Name:</label> ${employee.name}`;
      nameDiv.classList.add("info");

      const salaryDiv = document.createElement("div");
      salaryDiv.innerHTML = `<label>Salary:</label> ${employee.salary}`;
      salaryDiv.classList.add("info");
      
      const emailDiv = document.createElement("div");
      emailDiv.innerHTML = `<label>Email:</label> ${employee.email}`;
      emailDiv.classList.add("info");

      const designationDiv = document.createElement("div");
      designationDiv.innerHTML = `<label>Designation:</label> ${employee.designation}`;
      designationDiv.classList.add("info");

      div.appendChild(nameDiv);
      div.appendChild(salaryDiv);
      div.appendChild(emailDiv)
      div.appendChild(designationDiv);

      employeeProfileContainer.appendChild(div);
    });
  }

  displayEmployees();
});
