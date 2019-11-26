<template>
    <div>
        <div class="index-list" v-for="(item,index) in historyData" :key="index" >
            <h4>{{item.title}}</h4>
            <div class="index-list-time">
                <span><Icon type="ios-clock-outline"></Icon>发布时间：{{item.time | formatDate}}</span>
                <span><Icon type="ios-folder-outline"></Icon>分类于：{{item.classify}}</span>
            </div>
            <p class="index-list-text">{{item.article}}</p>
            <a :href='"#/details/"+item.articleId' class="link-more">阅读全文 »</a>
        </div>
        <div class="pagination">
            <Page :page-size="pageSize" :total="pageTotal" @on-change="changePage"></Page>
        </div>
        
    </div>
</template>
<script>
import {Icon} from 'iview'
import axios from 'axios'
import {formatDate} from '@/filter/formatDate.js'
import {Page} from 'iview'

export default {
   data(){
       return {
          indexList:[], // 数据总的接口
          historyData:[], // 展示的数据
          pageSize:5, // 当前显示几条数据
          pageTotal:0, // 总的数据条数
       }
   },
   components:{
       Icon,
       Page,
   },
   filters:{
       // 时间格式过滤
       formatDate(time){
           var date=new Date(time);
           return formatDate(date,'yyyy-MM-dd')
       }
   },
   methods:{
       // 分页翻页 
       changePage(index){
          let self=this;
          let _start=(index-1)*self.pageSize;
          let _end=index*self.pageSize;
          self.historyData=this.indexList.slice(_start,_end);
       }
   },
   created(){
       // 获取数据
     axios({
         url:"https://www.easy-mock.com/mock/5d02108643d5fd3c8e085ddb/data/data",
         method:'get'
     })
     .then(response=>{
         console.log(response)
         if(response.status==200){
           this.indexList=response.data.data.indexList;
           this.pageTotal=this.indexList.length;
           if(this.pageTotal<this.pageSize){
               this.historyData=this.indexList;
           }else{
               this.historyData=this.indexList.slice(0,this.pageSize)
           }
         }
     })
     .catch(error=>{
         console.log(error)
     })
   }
}
</script>

<style>
.index-list{
   margin:30px 100px 0px 40px; 
   padding-bottom:30px;
   border-bottom:1px solid #f2f2f2;
   overflow:hidden;
}
.index-list h4{
    font-size:24px;
    line-height:30px;
    padding-bottom:15px;
}
.index-list-time{
  font-size:14px;
  color:#a3a3a3; 
  line-height:24px; 
}
.index-list-time span{margin-right:10px;}
.ivu-icon{padding-right:5px;}
.index-list-text{
    font-size:16px;
    line-height:26px;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    overflow:hidden;
    padding-top:15px;
    margin-bottom:10px;
}
.link-more{font-size:18px;color:#565654;border-bottom:1px solid #666;}
.link-more:hover{border-bottom:1px solid #39f;}
.pagination{padding:30px 100px 20px 40px;}
</style>

