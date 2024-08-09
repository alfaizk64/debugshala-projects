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

      const nameDiv = document.createElement("div");
      nameDiv.classList.add("info");
      nameDiv.innerHTML = `<label>Name:</label> ${employee.name}`;

      const salaryDiv = document.createElement("div");
      salaryDiv.classList.add("info");
      salaryDiv.innerHTML = `<label>Salary:</label> ${employee.salary}`;

      const designationDiv = document.createElement("div");
      designationDiv.classList.add("info");
      designationDiv.innerHTML = `<label>Designation:</label> ${employee.designation}`;

      const emailDiv = document.createElement("div");
      emailDiv.classList.add("info");
      emailDiv.innerHTML = `<label>Email:</label> ${employee.email}`;
      
      const actionsDiv = document.createElement("div");
      actionsDiv.classList.add("actions");
      
      const updateIcon = document.createElement("i");
      updateIcon.classList.add("fas", "fa-sync-alt");
      
      const editIcon = document.createElement("i");
      editIcon.classList.add("fas", "fa-edit");
      
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fas", "fa-trash-alt");
      
      actionsDiv.appendChild(updateIcon);
      actionsDiv.appendChild(editIcon);
      actionsDiv.appendChild(deleteIcon);
      
      
      
      profileCard.appendChild(nameDiv);
      profileCard.appendChild(salaryDiv);
      profileCard.appendChild(designationDiv);
      profileCard.appendChild(emailDiv);
      profileCard.appendChild(actionsDiv);
      

      employeeProfileContainer.appendChild(profileCard);
    });
  } else {
    employeeProfileContainer.innerHTML = `<p>No employees found in the ${department} Department.</p>`;
  }
});
