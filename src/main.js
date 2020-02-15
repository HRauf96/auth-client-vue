// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.component('tabs', {
  template: `
      <div>
          <div class="tabs">
              <div v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
              </div>
          </div>

          <div class="tabs-details">
              <slot></slot>
          </div>
      </div>
      <style>
      .tabs{
        width:50%;
        float: left;
      }
      </style>
  `,
  
  data() {
      return {tabs: [] };
  },
  
  created() {
      
      this.tabs = this.$children;
      
  },
  methods: {
      selectTab(selectedTab) {
          this.tabs.forEach(tab => {
              tab.isActive = (tab.name == selectedTab.name);
          });
      }
  }
});

Vue.component('tab', {
  template: `
      <div v-show="isActive"><slot></slot></div>
  `,
  
  props: {
      name: { required: true },
      selected: { default: false}
  },
  
  data() {
      return {
          isActive: false
      };
  },
  
  computed: {
      href() {
          return '#' + this.name.toLowerCase().replace(/ /g, '-');
      }
  },
  
  mounted() {
      this.isActive = this.selected;
  }
});

new Vue({
  el: '#root'
});

Vue.component('modal', {
    template: '#modal-template'
  })