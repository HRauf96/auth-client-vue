<template>
  <div class="hello">
    <h1 class="header">{{ msg }}</h1>
    <div id="root" class="container">

<form class="form-forgot-password">
      <div class="form-container">

        <label for="email"><b>Name</b></label>
        <input type="text" placeholder="Enter Name" name="name" required>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

      <div class="clearfix">
      <router-link :to="{ name: 'login' }">
        <button type="submit" class="log-in-button">Login</button>
      </router-link>
      <button type="submit" class="forgot-button">Send Reset Link</button>
    </div>
  </div>
</form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forgpt-password',
  data () {
    return {
      msg: 'Forgot Password'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1.header{
  font-weight: normal;
}

input[type=text]{
  width: 100%;
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus{
  background-color: #ddd;
  outline: none;
}

.forgot-button {
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

.forgot-button:hover {
  opacity:1;
}

.form-container {
  padding: 16px;
}

.form-forgot-password{
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
  opacity: 0.9;
  width: 33%;
  float: left;
}

.log-in-button:hover {
  opacity:1;
}
</style>
