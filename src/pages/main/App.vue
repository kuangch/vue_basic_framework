<template>
  <div id="app">
    <header>
      <img src="../../assets/logo.png"/>
      <span class="app-name">的卢深视</span>
      <div class="right">
        <span>{{user_info.privilege}}/{{user_info.name}}</span>
       <nav class="nav">
        <ul>
          <li @click="goHome"><a class="dilu-button-main" href="#">home</a></li>
          <li @click="goAbout"><a class="dilu-button-warn" href="#">about</a></li>
        </ul>
       </nav>
      </div>
    </header>
    <div class="main">
      <div class="nav">
        <router-link class="ovfl-ellipsis" :to="{path: `/${packageJson.name}/`}"><i class="el-icon-service"></i><span>Home</span></router-link>
        <router-link class="ovfl-ellipsis" :to="{path: `/${packageJson.name}/about`}"><i class="el-icon-star-off"></i><span>About</span></router-link>
        <router-link class="ovfl-ellipsis" :to="{path: `/${packageJson.name}/per`}"><i class="el-icon-location-outline"></i><span>Per</span></router-link>
      </div>

      <div class="content">
        <router-view class="view"></router-view>
      </div>
    </div>

  </div>
</template>

<script>

const packageJson = require('../../../package')
export default {
  name: 'app',
  mounted: function(){
  } ,
  data(){
      return {
          user_info:{
              name:'kuangch',
              privilege:'admin'
          },
          packageJson,
      }
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

<style lang="scss" scoped>
  @import '../../common/default.theme.scss';
  $nav_max_w: 15vw;
  $header_content_height:45px;

  #app{
    display: flex;
    min-height: 100vh;
    flex-direction: column;

  header{
    flex-basis: 70px;
    background: $color_main;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    color: $color_main_txt;

    img{
      margin-left: 15px;
      height: $header_content_height - 5;
    }
    .app-name{
      margin-left: 20px;
      font-size: 25px;
      line-height: 25px;
    }

    .right{
      flex-grow: 1;//这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
      display: flex;//将它设置为flex,就可以单独对他进行主轴右对齐
      justify-content: flex-end;

      span{
        font-size: 18px;
        height: $header_content_height;
        line-height: $header_content_height;
        margin-right: 20px;
      }
    }
    .nav{
      height: $header_content_height;
      line-height: $header_content_height;
      margin-right: 10px;
    }
    .nav li{
      line-height: 100%;
      margin: 0 10px 0 0;
      padding: 0;
      list-style: none;
      display: inline-block;

      a{
        padding: 3px 12px;
        text-decoration: none;
        height: 45px;
        line-height: 45px;
        border-radius: 3px;
      }

    }
    @media (max-width: 720px){
      $item_w : 80px;
      .nav {
        width: $item_w;
        background: transparent;
        padding: 0 0;
      }

      .nav ul{
        position: absolute;
      }
      .nav li {
        transition: opacity 500ms;
        opacity: 0; /* hide all <li> items */
        margin: 0;
      }
      .nav li:first-child {
        opacity:1;
      }
      .nav li a {
        display: block;
        padding: 0 20px;
        border-radius: 0;
      }

      .nav:hover li {
        opacity:1;
      }
    }
  }
  >.main{
    display: flex;
    flex: 1;

    .nav{
      background: $color_content;
      border-right: solid 1px $color_division_line;
      flex: 0 0 $nav_max_w;
      max-width: $nav_max_w;

      $nav_item_height : 50px;
      a{
        padding-left: 2vw;
        display: block;
        text-decoration: none;
        color:$color_content_txt;
        background: white;
        height: $nav_item_height;
        line-height: $nav_item_height;
        transition: font-size 500ms;
        font-size: 18px;

        i{
          margin-right: 0.5vw;
        }
      }
      a:hover{
        background: $color_main_second;
        color: white;
        font-size: 24px;
      }
      .router-link-exact-active{
        background: $color_main_second;
        color: white;
      }

      @media (max-width: 720px){
        a{
          padding-left: 0;
          text-align: center;
          i{
            margin-right: 0;
            font-size: 3.8vw;
          }
          span{
            display: none;
          }
        }
      }
    }
    >.content{
      flex: 1;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
   }
  }

</style>
