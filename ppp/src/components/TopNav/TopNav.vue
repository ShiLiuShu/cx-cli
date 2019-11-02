<template>
  <div class="top-nav-root">
      <div class="top-nav-item" v-for="(item,index) in topNavData" :key="item.title"
      :class="{active:item.active}" :style="itemStyle" @click="itemClick(index)">
          <div class="top-nav-item-img">
              <img :src="item.img" :alt='item.title'>
          </div>
          <div class='top-nav-item-text'>
              <p v-if='item.active' :style='{color:item.foreColor}'>{{item.title}}</p>
              <p v-else>{{item.title}}</p>
          </div>
          <div class='top-nav-item-bottom' v-show='item.active' :style='{backgroundColor:item.foreColor}'>
            
          </div>
      </div>
  </div>
</template>

<script>
import topNavData from '../../api/topNavData.js'
export default {
  data(){
      return {
        topNavData,
        itemStyle:{

        }
      }
  },
  methods:{
      itemClick(index){
        let i=0,len=this.topNavData.length;
        for(;i<len;i++){
            this.topNavData[i]['active']=false;
        }
        this.topNavData[index]['active']=true;
        this.$router.push('/home/'+this.topNavData[index]['router']);
      }
  }
}
</script>

<style lang="scss" scoped>
@import './TopNav.scss';
</style>