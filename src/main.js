import Vue from 'vue'
import App from './App.vue'
import FormMake from 'antd-vue-form-make'
import 'antd-vue-form-make/packageDist/antd-vue-form-make.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(FormMake)

new Vue({
  render: h => h(App),
}).$mount('#app')
