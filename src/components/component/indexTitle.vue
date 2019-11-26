<template>
    <div class="blog-rg-title">
         <ul>
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/Categories">分类</router-link></li>
            <li><router-link to="/Archives">归档</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
      return {
        
      }
    },
    methods:{
     
    }
}
</script>
<style>
.blog-rg-title {
  position: fixed;
  right: 0;
  width: 75%;
  height:65px;
  line-height:65px;
  border-bottom: 1px solid #f2f2f2;
  padding-left:20px;
  background:#fefdfd;
  z-index:9;

}
.blog-rg-title ul li {
  float: left;
  font-size:16px;
  padding:0 20px;
  
}
.blog-rg-title ul li a{color:#565654;display:block;}
.router-link-exact-active {
  border-bottom:1px solid #565654;
  display: inline-block;
}
</style>


