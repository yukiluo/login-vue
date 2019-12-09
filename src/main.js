import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes' // 路由規劃

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history'
});

// 檢查哨必須先驗證token，router物件加beforeEach的hook
router.beforeEach((to,from,next)=>{
	const isLogin = localStorage.getItem('token') == 'ImLogin';
	if(isLogin){
		next();
	} else {
		if(to.path !== '/login')
			next('/login');
		else
			next();
	}
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
