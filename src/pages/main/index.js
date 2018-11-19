import Vue from 'vue'
import App from './App.vue'
import Base from '../../service/base'
import '../../common/common.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(Base)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
