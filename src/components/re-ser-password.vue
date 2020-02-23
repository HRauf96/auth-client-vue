<template>
  <div class="hello">
    <h1 class="header">{{ msg }}</h1>
    <div id="root" class="container">

<form class="form-forgot-password">
      <div class="form-container">

        <label for="email"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="email" required>
        <input type="password" placeholder="Repeat Password" name="psw" required>

      <div class="clearfix">
      <button type="submit" class="sumbit-button">Reset</button>
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
      msg: 'Re-set Password'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1.header{
  font-weight: normal;
}

input[type=password] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.submit-button:hover {
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
</style>
