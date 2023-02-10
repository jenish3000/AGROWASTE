import React from 'react'

const Forget = () => {
  return (
    <> 
    <div class="d-flex justify-content-center">
    <div class="container animated fadeInUp">
    <h1>Forget Password</h1>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
        </div>
        <button class="btn btn-primary" onclick="submitForm()">Submit</button>
      </form>
      <div id="message" class="d-none"></div>
    </div>
    </div>
    </>
  )
}

export default Forget