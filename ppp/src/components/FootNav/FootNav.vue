<template>
  <div class="foot-nav-root">
    <div class="foot-nav-item" v-for="(item,index) in footNavData" :key="item.title"
      :class="{active:item.active}"  @click="itemClick(index)">
          <div class="foot-nav-item-img">
              <img :src="item.img" :alt='item.title'>
          </div>
          <div class='foot-nav-item-text'>
              <p v-if='item.active' :style='{color:item.foreColor}'>{{item.title}}</p>
              <p v-else>{{item.title}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import footNavData from '../../api/footNavData.js'
export default {
  data(){
      return {
        footNavData
      }
  },
  methods:{
      itemClick(index){
        let i=0,len=this.footNavData.length;
        for(;i<len;i++){
            this.footNavData[i]['active']=false;
        }
        this.footNavData[index]['active']=true;
        this.$router.push('/'+this.footNavData[index]['router']);
      }
  }
}
</script>

<style lang="scss" scoped>
@import './FootNav.scss';
</style>
