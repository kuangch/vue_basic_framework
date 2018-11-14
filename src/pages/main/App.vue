<template>
  <div id="app">
    <div class="container">
    <convenience-image :src-nor="require('../../assets/dollar.png')"/>
    </div>
    <br/>
    <img src="../../assets/plus-circle.png">
    <HelloWorld msg="Welcome"/>
    <button @click="goHome">home</button>
    <button @click="goAbout">about</button>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import ConvenienceImage from 'convenience-image'

export default {
  name: 'app',
  mounted: function(){
      this.$http.get('/data/get_latest_person_pass_info/0/10/').then((responseData) => {
          console.log(responseData)
      }).catch((reason => {
          console.error(reason)
      }))
  } ,
  components: {
    HelloWorld, ConvenienceImage
  },
  methods: {
     goHome: function () {
         window.open( 'home.html')
     },
     goAbout: function () {
         window.open( 'about.html')
     }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  margin-top: 60px;
}
.container{
  height: 100px;
  width: 120px;
  display: inline-block;
}
</style>
