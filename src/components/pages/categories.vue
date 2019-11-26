<template>
 <div>
     <slideBar></slideBar>
     <div class="blog-right">
        <indexTitle></indexTitle>
        <div class="categories-item">
            <div class="categories-title">目前共计1个分类, 继续努力。</div>
            <ul class="categories-list" >
                <li v-for="(item,index) in indexList" :key="index">
                    <router-link :to="{name:'categoriesDetail',params:{ib:item.classify}}">{{item.classify}}</router-link><span>1</span><em></em>
                </li>
            </ul>
        </div>
     </div>   
 </div>
</template>
<script>
import slideBar from '../component/slideBar'
import indexTitle from '../component/indexTitle'
import axios from 'axios'
export default {
    data(){
      return {
          indexList:[]
      }
    },
   components:{
     slideBar,
     indexTitle,
   } ,
   created(){
      axios({
        url:'https://www.easy-mock.com/mock/5d02108643d5fd3c8e085ddb/data/data',  
        method:'get'
      }) 
      .then(res=>{
          if(res.status==200){
             this.indexList=res.data.data.indexList;
              
          }
      })
      .catch(error=>{
          console.log(error)
      })
   }

}
</script>
<style>
 .categories-item{
     width:75%;
     float: right;
     margin-top: 80px;
     padding:30px 100px 0 40px;
 }
 .categories-title{
     font-size:20px;
 }
 .categories-list{
     padding-top:20px;
 }
 .categories-list li{line-height:24px;padding-bottom:20px;position: relative;padding-left:20px;}
 .categories-list li a{color: #565654;font-size:18px;}
 .categories-list li span{padding-left:5px;font-size:14px;color:#a3a3a3;}
 .categories-list li span:before{display:inline;content:'('}
 .categories-list li span:after{display:inline;content:')'}
 .categories-list li:before{position:absolute;left:0;top:0px;content:'';background:#a5a4a4;border-radius:50%;width:8px;height:8px;margin-top:0.4rem;}
 .categories-list li em{position:absolute;left:3px;top:20px;height:50%;width:1px;background:#a5a4a4;}
 .categories-list li:last-child em{background:none;}
</style>

