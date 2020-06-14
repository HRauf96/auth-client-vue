<template>
<div>
  <p>Vue Auth Client Example</p>
  <ul class="container">
  <li>
    <router-link :to="{ name: 'login' }">
      <label class="nav-bar-label">
        Login
      </label>
    </router-link>
  </li>
  <li>
    <router-link :to="{ name: 'signup' }">
      <label class="nav-bar-label">
        Sign Up
      </label>
    </router-link>
  </li>
  <li>
    <router-link :to="{ name: 'forgot-password' }">
      <label class="nav-bar-label">
        Forgot Password
      </label>
    </router-link>
  </li>
  <li>
    <router-link :to="{ name: 'reset-password' }">
      <label class="nav-bar-label">
        Re-set Password
      </label>
    </router-link>
  </li>
  <li>
    <router-link :to="{ name: 'email-confirmation' }">
      <label class="nav-bar-label">
        E-mail Confirmation
      </label>
    </router-link>
  </li>
</ul>
</div>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 8px 10px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.nav-bar-label{
  cursor: pointer;
}

.container{
  width: 50%;
  margin: auto;
}

</style>
<script>
export default {
  name: 'Header',
}
</script>