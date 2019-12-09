<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login"> 
      <!--綁定事件，prevent防止原生方法改用自訂login method-->
      <label>User Name</label>
      <input type="text" v-model="userName" required>
      <br>
      <label>Password</label>
      <input type="password" v-model="password" required>
      <br>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
      }
    },
    methods: {
      login(){
        //authencation logic
        if( this.userName == 'Yuchi'&&this.password == '911'){
          localStorage.setItem('token','ImLogin')
          this.$router.push('/');
        } else{
          alert('login failed')
        }
        // let auth = true;

        // if(auth)
        //   this.$router.push('/');
        // else
        //   alert('login failed')
      }
    }
  }
</script>