import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Icon, Button, Popup, DatetimePicker, Tabs, Tab, Form, Field, Picker, Search, Cell, CellGroup, SwipeCell,
  Card, Dialog } from 'vant'
import '@/assets/style/reset.css'
import '@/assets/style/wheelpicker.min.css'

Vue.config.productionTip = false
Vue.use(Icon).use(Button).use(Popup).use(DatetimePicker).use(Tabs).use(Tab).use(Form).use(Field).use(Picker).use(Search).use(Cell).use(CellGroup).use(SwipeCell)
  .use(Card).use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
