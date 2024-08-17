// Replace checkForName with a function that checks the URL
import { checkForName } from "./nameChecker";

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");

  // fetch("http://localhost:8081/test")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     document.getElementById("results").innerHTML = data.message;
  //   });
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };
