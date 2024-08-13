document.addEventListener("DOMContentLoaded", function () {
  const departmentTitle = document.getElementById("departmentTitle");
  const departmentHeader = document.getElementById("departmentHeader");
  const employeeProfileContainer = document.getElementById(
    "employeeProfileContainer"
  );

  const urlParams = new URLSearchParams(window.location.search);
  const department = urlParams.get("department");

  // Set the page title and header based on the department
  departmentTitle.textContent = `${department} Department`;
  departmentHeader.textContent = `${department} Department`;

  // Get employees from localStorage
  const employees = JSON.parse(localStorage.getItem("employees")) || {
    Sales: [],
    Technical: [],
    HR: [],
    Telecalling: [],
  };

  // Display employees for the selected department
  if (employees[department] && employees[department].length > 0) {
    employees[department].forEach((employee) => {
      const profileCard = document.createElement("div");
      profileCard.classList.add("profile-card");

      // Create img element
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("imgDiv");
      const gender = employee.selectedGender.toLowerCase();
      imgDiv.innerHTML =
        gender === "male"
          ? `<img class="avtarImg" src="https://avatar.iran.liara.run/public/boy?username=[${employee.name}]" alt="">`
          : `<img class="avtarImg" src="https://avatar.iran.liara.run/public/girl?username=[${employee.name}]" alt="">`;

      // Create name element
      const nameDiv = document.createElement("div");
      nameDiv.classList.add("info");
      nameDiv.innerHTML = `<label>Name:</label> ${employee.name}`;

      // Create salary element
      const salaryDiv = document.createElement("div");
      salaryDiv.classList.add("info");
      salaryDiv.innerHTML = `<label>Salary:</label> ${employee.salary}`;

      // Create designation element
      const designationDiv = document.createElement("div");
      designationDiv.classList.add("info");
      designationDiv.innerHTML = `<label>Designation:</label> ${employee.designation}`;

      // Create email element
      const emailDiv = document.createElement("div");
      emailDiv.classList.add("info");
      emailDiv.innerHTML = `<label>Email:</label> ${employee.email}`;

      // Create email element
      const genderDiv = document.createElement("div");
      genderDiv.classList.add("info");
      genderDiv.innerHTML = `<label>Gender:</label> ${employee.selectedGender}`;

      // Create actions container
      const actionsDiv = document.createElement("div");
      actionsDiv.classList.add("actions" ,"hidden")
      // Create edit icon
      const editIcon = document.createElement("i");
      editIcon.classList.add("fas", "fa-edit");
   
      // Create update icon
      editIcon.addEventListener("click", () => {
        console.log("edit");
        
        overlay.classList.add("active");
        formContainer.classList.remove("hidden");
        // Update functionality
        const index = employees[department].indexOf(employee);
        if (index !== -1) {
          let name = document.getElementById("name");
          let salary = document.getElementById("salary");
          let designation = document.getElementById("designation");
          let department = document.getElementById("department");
          let email = document.getElementById("email");
          let selectedGender = document.querySelector(
            'input[name="gender"]:checked'
          );

       
             
          name.value = employee.name;
          salary.value = employee.salary;
          designation.value = employee.designation;
          department.value = employee.department;
          email.value = employee.email;
          // selectedGender.value = employee.selectedGender;

          const employeeForm = document.getElementById("employeeForm");
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
       
            if (name) {
              employee.name = name;
            }
            if (salary) {
              employee.salary = salary;
            }
            if (designation) {
              employee.designation = designation;
            }
            if (department) {
              employee.department = department;
            }
            if (email) {
              employee.email = email;
            }
            if (selectedGender) {
              employee.selectedGender = selectedGender;
            }
            // Update localStorage
            localStorage.setItem("employees", JSON.stringify(employees));

            // Update displayed information on the card (optional)
            if(selectedGender){
              imgDiv.innerHTML =
              gender === "male"
                ? `<img class="avtarImg" src="/assets/images/male-avtar.jpg" alt="">`
                : `<img class="avtarImg" src="/assets/images/avtar-female.jpg" alt="">`;
      
            }
            nameDiv.innerHTML = `<label>Name:</label> ${employee.name}`;
            salaryDiv.innerHTML = `<label>Salary:</label> ${employee.salary}`;
            designationDiv.innerHTML = `<label>Designation:</label> ${employee.designation}`;
            emailDiv.innerHTML = `<label>Email:</label> ${employee.email}`;
            genderDiv.innerHTML = `<label>Gender:</label> ${employee.selectedGender}`;
            window.location.reload();

            overlay.classList.remove("active");
            formContainer.classList.add("hidden");

          });

          // form close
          let formClose = document.getElementById("formClose");
          formClose.addEventListener("click", () => {
            formContainer.classList.add("hidden");
            overlay.classList.remove("active");
          });
        } else {
          console.error("Employee not found for update!");
        }
      });

      // Create delete icon
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fas", "fa-trash-alt");
      deleteIcon.addEventListener("click", () => {
        // Delete functionality
        if (confirm(`Are you sure you want to delete ${employee.name}?`)) {
          const index = employees[department].indexOf(employee);
          if (index !== -1) {
            employees[department].splice(index, 1);
            localStorage.setItem("employees", JSON.stringify(employees));
            profileCard.remove(); // Remove the profile card from the DOM
          } else {
            console.error("Employee not found for deletion");
          }
        }
      });

      actionsDiv.appendChild(editIcon);
      actionsDiv.appendChild(deleteIcon);
      profileCard.appendChild(imgDiv);
      profileCard.appendChild(nameDiv);
      profileCard.appendChild(salaryDiv);
      profileCard.appendChild(emailDiv);
      profileCard.appendChild(designationDiv);
      profileCard.appendChild(genderDiv);
      profileCard.appendChild(actionsDiv);

      employeeProfileContainer.appendChild(profileCard);
    });
  } else {
    employeeProfileContainer.innerHTML = `<p>No employees found in the ${department} Department.</p>`;
  }
});

function redirectToMainPage() {
  window.location.href = "index.html";
}
// form button click and submit
// const registerBtn = document.getElementById("registerBtn");
// const formContainer = document.getElementById("formContainer");
// // const gridContainer = document.getElementById("gridContainer");
// const employeeForm = document.getElementById("employeeForm");
// const overlay = document.getElementById("overlay");

// registerBtn.addEventListener("click", function () {
//   // gridContainer.classList.add("hidden");
//   overlay.classList.add("active");
//   formContainer.classList.remove("hidden");
// });
// // form close
// let formClose = document.getElementById("formClose");
// formClose.addEventListener("click", () => {
//   formContainer.classList.add("hidden");
//   overlay.classList.remove("active");
//   // gridContainer.classList.remove("hidden");
// });
// employeeForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const salary = document.getElementById("salary").value;
//   const designation = document.getElementById("designation").value;
//   const department = document.getElementById("department").value;
//   const email = document.getElementById("email").value;
//   const selectedGender = document.querySelector(
//     'input[name="gender"]:checked'
//   ).value;

//   let employees = JSON.parse(localStorage.getItem("employees")) || {
//     Sales: [],
//     Technical: [],
//     HR: [],
//     Telecalling: [],
//   };

//   employees[department].push({
//     name,
//     salary,
//     designation,
//     email,
//     selectedGender,
//   });
//   localStorage.setItem("employees", JSON.stringify(employees));
//   window.location.reload();

//   // displayEmployees();
//   employeeForm.reset();
//   formContainer.classList.add("hidden");
//   // gridContainer.classList.remove("hidden");
//   overlay.classList.remove("active");
// });


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
