
function logFormInputs(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);

  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
}

document
  .getElementById("submit-form")
  .addEventListener("submit", logFormInputs); 


  document.addEventListener("DOMContentLoaded", function() {

    function toggleSections() {

      const version = localStorage.getItem("version")

      var newVersion = version == "section1" ? "section2" : "section1";

      
      localStorage.setItem("version", newVersion)
      
      const element = document.querySelector("#" + newVersion)
      
      element.classList.remove("hidden");

    }
    
    toggleSections();
});

  