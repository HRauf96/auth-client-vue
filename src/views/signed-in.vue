<template>
  <div class="hello">
    <h1 class="header">{{ msg }}</h1>
    <div id="root" class="container">
        <h2 v-if="helloEmail" class="helloEmail">{{ helloEmail }}</h2>
        <button>Log Out</button>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script>
import { mapState } from 'vuex';
import store from '@/store';
import { SIGNOUT } from '@/store/actions.type';

export default {
  name: 'signed-in',
  data () {
    return {
      msg: 'Signed In'
    }
  },
  computed: {
    ...mapState({
      helloEmail: state => state.auth.user.Email
    })
  },
  methods: {
    onClick() {
      this.$store.dispatch(SIGNOUT)
       .then(() => this.$router.push({ name: 'login' }));
    }
  }
}
</script>