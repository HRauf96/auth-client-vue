<template>
  <div class="hello">
    <h1 class="header">{{ msg }}</h1>
    <div id="root" class="container">
      <form class="form-sign-up">
      <div class="form-container">

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
     
        <router-link :to="{ name: 'forgot-password' }">   
          <label class="forgot-password-label">
            Forgot Password?
          </label>
        </router-link>
        
    <label class="remember-me-label">
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>

      <div class="clearfix">
      <router-link :to="{ name: 'signup' }">
        <button type="submit" class="sign-up-button">Sign Up</button>
      </router-link>
      <button type="submit" class="log-in-button">Log In</button>
    </div>
  </div>
</form>

</div>
  </div>
</template>

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

.log-in-button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  width: 66%;
  float: left;
}

.log-in-button:hover {
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

.forgot-password-label{
  color: #02075d;
}

.forgot-password-label:hover{
  text-decoration: underline;
  color: #3942f0;
  cursor: pointer;
}

.sign-up-button {
  background-color: rgb(175, 76, 76);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  width: 33%;
  float: left;
}

.sign-up-button:hover {
  opacity:1;
}

</style>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Login'
    }
  }
}
</script>
