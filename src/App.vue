<template>
  <div id="app">
    <Navbar :logo="logo_source" :alt="app_name"/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>


<script>
import Navbar from "./components/Navbar.vue"
import Footer from './components/Footer.vue'
export default {
  name:'App',
  data(){
    return{
      logo_source: '/img/logo.png',
      app_name:'Make your burguer'
      
    }
  },
  components:{
    Navbar,
    Footer
  }
}
</script>

 
<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main-container {
    margin: 50px;
    min-height: 250px;
  }
  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

</style>
