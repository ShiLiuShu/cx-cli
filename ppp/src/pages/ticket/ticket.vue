<template>
  <div class="ticket-root">
      <div class="ticket-head">
          <div class="ticket-head-top">
              <div class="item-img-left">
                  <p>深圳</p>
                  <div><img src="../../assets/right_arrow.png"></div>
              </div>
              <div class="item-swap">
                  <p :class="{active:swap_active}" @click="swap(true)">电影</p>
                  <p :class="{active:!swap_active}" @click="swap(false)">影院</p>
              </div>
              <div class="item-img-right">
                  <img src="../../assets/search.png">
              </div>
          </div>
          <div class="ticket-head-bottom" v-if="bottom_visible">
              <div class="ticket-head-bottom-left" :class="{active:leftActive}" @click="clickIsHot">
                  <p>正在热映</p>
              </div>
              <div class="ticket-head-bottom-right" :class="{active:rightActive}" @click="clickIsComing">
                  <p>即将上映</p>
              </div>
          </div>
      </div>
      <router-view></router-view>
  </div> 
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
      return {
        leftActive:false,
        rightActive:false,
        swap_active:true,
        bottom_visible:true

      }
  },
  computed:{
    ...mapGetters(['cinemas','locationId'])
  },
  methods:{   
      ...mapActions(['getCinemasByCity']),
      clickIsHot(){
        this.leftActive=true;
        this.rightActive=false;
        this.$router.push('/ticket/hot');
      },
      clickIsComing(){
        this.leftActive=false;
        this.rightActive=true;
        this.$router.push('/ticket/coming');
      },
      swap(active){
        this.swap_active=active;
        if(active){
            this.bottom_visible=true;
            this.$router.push('/ticket/coming');
        }else{
            this.bottom_visible=false;
            this.$router.push('/ticket/cinema');
        }
      }
  },
  created(){
    this.leftActive=true;
    //this.$router.push('/ticket/isHot');
  },
  mounted()
  {   
    //this.getCinemasByCity(this.locationId);
  }
}
</script>

<style lang="scss" scoped>
@import './ticket.scss';
</style>