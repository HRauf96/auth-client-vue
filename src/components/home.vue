<template>
  <div class="hello">
    <h1 class="header">{{ msg }}</h1>
    <div id="root" class="container">
      
  <tabs>
    <tab name="Sign Up" :selected="true">
      <form class="form-sign-up">
      <div class="form-container">

        <label for="first-name"><b>First Name</b></label>
        <input type="text" placeholder="First Name" name="first-name" required>

        <label for="surname"><b>Surename</b></label>
        <input type="text" placeholder="Surename" name="surname" required>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

      <div class="clearfix">
      <button type="submit" class="sign-up-button">Sign Up</button>
    </div>
  </div>
</form>
    </tab>
    <tab name="Log In">
      
      <form class="form-sign-up">
      <div class="form-container">

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
        
    <label class="forgot-password-label">
      Forgot Password?
    </label>
        
    <label class="remember-me-label">
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>

      <div class="clearfix">
      <button type="submit" class="sign-up-button">Log In</button>
    </div>
  </div>
</form>
    </tab>
  </tabs>

</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1.header{
  font-weight: normal;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

.sign-up-button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.sign-up-button:hover {
  opacity:1;
}

.form-container {
  padding: 16px;
}

.form-sign-up{
border:1px solid #ccc;
width: 50%;
margin: auto;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
* {box-sizing: border-box}

.forgot-password-label, .remember-me-label{
  width: 50%;
  float: left;
}
</style>
