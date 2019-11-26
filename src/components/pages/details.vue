<template>
    <div>
       <slideBar></slideBar> 
        <div class="blog-right">
           <indexTitle></indexTitle>
           <div class="details-main">
               <h4 class="details-title">{{indexList.title}}</h4>
               <div class="details-classify" >
                   <span><Icon type="ios-clock-outline"></Icon>发布时间：{{indexList.time | formatDate }}</span>
                   <span><Icon type="ios-folder-outline"></Icon>分类于：{{indexList.classify}}</span>
               </div>
               <div class="details-content">
                   {{indexList.contents}}
               </div>
           </div>
        </div>
    </div>
</template>
<script>
import {Icon} from 'iview'
import slideBar from '../component/slideBar'
import indexTitle from '../component/indexTitle'
import axios from 'axios'
import {formatDate} from '@/filter/formatDate.js'

export default {
    name:'Details',
    data(){
        return {
            indexList:{},
        }
    },
   components:{
     slideBar,  
     indexTitle,
     Icon
   },
  filters:{
    formatDate(time){
      var date=new Date(time);
      return formatDate(date,'yy-MM-dd hh:mm:ss');
    }
  },
   created(){
        this.id = this.$route.params.id;
        this.getDetailInfo()
   },
   methods:{
       getDetailInfo(){
          axios({
                url:"https://www.easy-mock.com/mock/5d02108643d5fd3c8e085ddb/data/data",
                method:'get'
            })
            .then(response=>{
                if(response.status==200){
                    let ss =response.data.data.indexList
                    for(let key in ss){
                        if(ss.articleId == this.articleId){
                            this.indexList=response.data.data.indexList[key];
                        }
                    }
                }
            })
            .catch(error=>{
                console.log(error)
            })
        }
   },
  
}
</script>
<style scoped>
 .details-main{float:right;width:75%;margin-top:80px;padding: 30px 100px 0 40px;}
 .details-title{font-size:24px;text-align:center;padding-bottom:15px;}
 .details-classify{text-align:center;color:#a3a3a3;margin-bottom:30px;}
 .details-classify span{margin-right:10px;}
 .ivu-icon{padding-right:5px;}
 .details-content{font-size:16px;line-height:24px;}
</style>