<template>
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
// 引入Header组件
import Header from './components/Header';
// 引入Footer组件
import Footer from './components/Footer';
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>
</style>
  