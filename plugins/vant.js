import Vue from 'vue'
import {Button, Cell,Toast,Dialog} from 'vant';
// import 'vant/lib/index.css';
Vue.use(Button)
.use(Cell)
.use(Toast)
.use(Dialog)

Vue.prototype.$Toast = Toast
Vue.prototype.$Dialog = Dialog