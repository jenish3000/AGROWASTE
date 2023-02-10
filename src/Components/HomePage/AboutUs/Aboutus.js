import React from 'react'

function showMore() {
    document.getElementById("more-info").classList.remove("d-none");
    document.querySelector("button.btn-primary").style.display = "none";
  }
const Aboutus = () => {
  return (
    <>
    <div class="container">
      <h1>About Us</h1>
      <div class="row">
        <div class="col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna id malesuada commodo, nibh risus ornare magna, vitae pharetra ipsum risus id augue. </p>
        </div>
        <div class="col-md-6">
          <p>Sed auctor, urna id malesuada commodo, nibh risus ornare magna, vitae pharetra ipsum risus id augue. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus cumque debitis ipsum fuga vel saepe recusandae nobis necessitatibus eum delectus alias nihil nostrum aliquam eius voluptatum doloribus odit, aspernatur incidunt voluptate est! Blanditiis totam nesciunt placeat voluptatum saepe, corporis eligendi? </p>
        </div>
      </div>
      <button class="btn btn-primary" onclick={()=>{showMore()}}>Show More</button>
      <div id="more-info" class="d-none">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna id malesuada commodo, nibh risus ornare magna, vitae pharetra ipsum risus id augue.</p>
      </div>
    </div>
    </>
  )
}

export default Aboutus