<template>
  <div class="hello">
    <h1 class="header">{{ msg }}</h1>
    <div id="root" class="container">
      

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
      <button type="submit" class="log-in-button">Log In</button>
      <button type="submit" class="sign-up-button">Sign Up</button>
    </div>
  </div>
</form>

</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Sign Up'
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

.log-in-button {
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

.log-in-button:hover {
  opacity:1;
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
  width: 66%;
  float: left;
}

.sign-up-button:hover {
  opacity:1;
}
</style>
