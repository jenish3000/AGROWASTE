import React from 'react'

function submitForm() {
    // Show the "Response Sent" message
    document.getElementById("response-message").innerHTML = "Response Sent";
    document.getElementById("response-message").classList.remove("d-none");
    document.getElementById("response-message").classList.add("animated", "fadeInUp");
    // Add the "done" animation class to the submit button
    document.querySelector("button[type='submit']").classList.add("animated", "bounceOut");
    
    setTimeout(function(){ 
        document.getElementById("response-message").innerHTML = "";
        document.getElementById("response-message").classList.add("d-none");
        document.querySelector("button[type='submit']").classList.remove("animated", "bounceOut");
    }, 5000);
  }
const Contact = () => {
  return (
    <>
<div class="container">
      <h1>Contact Us</h1>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name"/>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email"/>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control" id="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" onclick="submitForm()">Submit</button>
      </form>
      <div id="response-message" class="alert alert-success d-none"></div>
    </div>
    </>
  )
}


  

export default Contact