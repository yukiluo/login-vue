import Login from './components/Login.vue';
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import UserInfo from './components/UserInfo.vue';

export const routes = [
  {
    path: '*',
    redirect:'/'

  }, // 不存在or錯誤路由，自動導向回根路徑，防止亂try
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    components: {
     default: Home,
     nav: Header
	}
  },
  {
    path: '/userInfo',
    components: {
     default: UserInfo,
     nav: Header
	}
  }, 
];