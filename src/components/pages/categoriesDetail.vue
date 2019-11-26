<template>
    <div>
       <slideBar></slideBar>
       <div class="blog-right">
         <indexTitle></indexTitle>
         <div class="archive-main">
            <div class="archive-item">
                <span class="archive-dot"></span>
                <span class="archive-page-counts">{{$route.params.ib}}<em>分类</em></span>
                <div v-for="(item,index) in sortList" :key="index">
                  <div class="relative" >
                    <div class="archive-list">
                        <h4 class="archive-txt"><a :href='"#/details/"+item.articleId'>{{item.title}}</a></h4>
                        <p class="archive-time">{{item.time | formatDate}}</p>
                    </div>
                 </div>
             </div>
            </div>
            <div class="pagination-item">
                <Page :page-size="pageSize" :total="pageTotal" @on-change="changePage"></Page>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import slideBar from '../component/slideBar'
import indexTitle from '../component/indexTitle'
import {formatDate} from '@/filter/formatDate.js'
import {Page} from 'iview'
import axios from 'axios'

export default {
    data(){
        return{
            indexList:[], //所有的数据
            pageTotal:0, //总的条数 
            pageSize:5, //每页显示几条
            historyData:[], //展示的数据
            listData:{} 
           
        }
    },
    components:{
      slideBar,
      indexTitle,
      Page
    },
    filters:{
        formatDate(time){
            var date=new Date(time);
            return formatDate(date,'MM-dd') //格式化时间
        }
    },
    methods:{
        // 分页翻页
       changePage(index){
           let self=this;
           let _start=(index-1)*self.pageSize;
           let _end=index*self.pageSize;
           self.historyData=this.indexList.slice(_start,_end)
       } 

    },
   created(){
        axios({
            url:"https://www.easy-mock.com/mock/5d02108643d5fd3c8e085ddb/data/data",
            method:'get'
        })
         .then(response=>{
           // console.log(response)
            if(response.status==200){
              this.indexList=response.data.data.indexList;
              this.pageTotal=this.indexList.length;
              if(this.pageTotal<this.pageSize){
                 this.historyData=this.indexList
              }else{
                 this.historyData=this.indexList.slice(0,this.pageSize) 
              }
              
            }
        })
        .catch(error=>{
            console.log(error)
        })


    },
     computed:{
       sortList(){
           return this.historyData.sort((a,b)=>{
               return b['articleYear'].localeCompare(a['articleYear'])
           })
       }
   },
}
</script>
<style scoped>
  .relative{position:relative;}
  .archive-main{float:right;width:75%;margin-top:80px;padding: 30px 100px 0 40px;}
  .archive-item{position:relative;margin-bottom:50px;}
  .archive-item:after{content:'';width:2px;height:100%;position:absolute;left:0;top:10px;background:#f2f2f2;z-index:-1;}
  .archive-dot{background:#a5a4a4;width:10px;height:10px;border-radius:50%;display: inline-block;position: absolute;left:0;top:10px;margin-left:-3px;}
  .archive-page-counts{font-size:20px;position: relative;left:20px;top:0px;}
  .archive-year{margin:25px 0 25px 20px;font-size:24px;font-weight:700;}
  .archive-year:before,.archive-list:before{content:'';width:8px;height:8px;background:#a5a4a4;border-radius:50%;position: absolute;left:0;margin-left:-3px;}
  .archive-year:before{top:10px;}
  .archive-list:before{top:6px;}
  .archive-list{border-bottom:1px dashed #f2f2f2;padding-bottom:15px;margin:20px 0 20px 0;}
  .archive-list:hover{border-bottom:1px dashed #555;}
  .archive-list:hover:before{background:#555;}
  .archive-txt{padding-left:70px;}
  .archive-txt a{display:block;color:#565654;font-size:16px;}
  .archive-time{position: absolute;left:20px;top:2px;color:#a3a3a3;}
  .archive-page-counts em{font-size:12px;font-style: normal;}
</style>