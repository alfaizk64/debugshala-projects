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
          ? `<img class="avtarImg" src="/assets/images/male-avtar.jpg" alt="">`
          : `<img class="avtarImg" src="/assets/images/avtar-female.jpg" alt="">`;

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
      emailDiv.classList.add("info");
      emailDiv.innerHTML = `<label>Gender:</label> ${employee.selectedGender}`;

      // Create actions container
      const actionsDiv = document.createElement("div");
      actionsDiv.classList.add("actions");

      // Create edit icon
      const editIcon = document.createElement("i");
      editIcon.classList.add("fas", "fa-edit");
      // editIcon.addEventListener("click", () => {
      //   // Edit functionality (replace with your implementation)
      //   console.log("Edit clicked for", employee.name);
      // });

      // Create update icon
      editIcon.addEventListener("click", () => {
        // Update functionality
        const index = employees[department].indexOf(employee);
        if (index !== -1) {
          // Prompt the user to enter new data (replace with your preferred method)
          // const newName = prompt("Enter new name:", employee.name);
          // const newSalary = prompt("Enter new salary:", employee.salary);
          // const newDesignation = prompt("Enter new designation:", employee.designation);
          // const newEmail = prompt("Enter new email:", employee.email);
          // const newGender = prompt("Enter new gender:", employee.selectedGender);
          // get form input for updating the previous value in input field
          let name = document.getElementById("name");
          let salary = document.getElementById("salary");
          let designation = document.getElementById("designation");
          let department = document.getElementById("department");
          let email = document.getElementById("email");
          let selectedGender = document.querySelector(
            'input[name="gender"]:checked'
          );

          overlay.classList.add("active");
          formContainer.classList.remove("hidden");

          name.value = employee.name;
          salary.value = employee.salary;
          designation.value = employee.designation;
          department.value = employee.department;
          email.value = employee.email;
          selectedGender.value = employee.selectedGender;
          // Update the employee object with the new values
          // const newName = document.getElementById("name").value;
          // const newSalary = document.getElementById("salary").value;
          // const newDesignation = document.getElementById("designation").value;
          // const newEmail = document.getElementById("email").value;
          // const newGender = document.querySelector('input[name="gender"]:checked').value;
          // Update employee object with new data (if provided)
          if (newName) {
            employee.name = newName;
          }
          if (newSalary) {
            employee.salary = newSalary;
          }
          if (newDesignation) {
            employee.designation = newDesignation;
          }
          if (newDepartment) {
            employee.department = newDepartment;
          }
          if (newEmail) {
            employee.email = newEmail;
          }
          if (newGender) {
            employee.selectedGender = newGender;
          }

          // Update localStorage
          localStorage.setItem("employees", JSON.stringify(employees));

          // Update displayed information on the card (optional)
          nameDiv.innerHTML = `<label>Name:</label> ${employee.name}`;
          salaryDiv.innerHTML = `<label>Salary:</label> ${employee.salary}`;
          designationDiv.innerHTML = `<label>Designation:</label> ${employee.designation}`;
          emailDiv.innerHTML = `<label>Email:</label> ${employee.email}`;
          genderDiv.innerHTML = `<label>Gender:</label> ${employee.selectedGender}`;
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
      profileCard.appendChild(designationDiv);
      profileCard.appendChild(emailDiv);
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
