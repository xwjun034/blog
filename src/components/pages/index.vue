<template>
  <div>
    <slideBar></slideBar>
    <div class="blog-right">
      <indexTitle></indexTitle>
      <div class="index-item">
        <indexList></indexList>
      </div>
    </div>
  </div>
</template>
<script>
import slideBar from '../component/slideBar'
import indexTitle from '../component/indexTitle'
import indexList from '../component/indexList'

export default {
  data() {
    return {
      headimg: "url(" + require("@/assets/image/headimg.png") + ")",
    };
  },
  components:{
    indexTitle,
    indexList,
    slideBar,
  }
};
</script>
<style>
.index-item{
  width:75%;
  float: right;
  margin-top:65px;
}
</style>
