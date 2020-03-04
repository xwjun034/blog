<template>
    <div class="slidebar">
      <div class="headimg" :style="{background:headimg}"></div>
      <h4 class="blog-name">XUWENJUN BLOG</h4>
      <p class="blog-yu">生活的点滴 美好生活</p>
      <p class="blog-fot">xwjun by 1258448428@qq.com</p>
    </div>
</template>
<script>
export default {
    data() {
      return {
         headimg: "url(" + require("@/assets/image/headimg.png") + ")"
    };
  },
}
</script>
<style>
  .slidebar {
  width: 25%;
  height: 100%;
  border-right: 1px solid#f2f2f2;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fefdfd;
}
.headimg {
  width: 200px;
  height: 200px;
  background-size: 100% 100% !important;
  margin: auto;
  margin-top: 200px;
}
.blog-name {
  font-size: 24px;
  font-weight: 800;
  padding-top: 35px;
  letter-spacing: 1px;
}
.blog-yu {
  font-size: 14px;
  padding-top: 10px;
  color: #565654;
  letter-spacing: 2px;
}
.blog-fot {
  font-size: 12px;
  color: #a3a3a3;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>


