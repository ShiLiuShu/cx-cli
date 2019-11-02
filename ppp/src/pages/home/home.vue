<template>
  <div class="home-root">
      <home-swiper :imgList="topPosters" v-if="topPosters.length"></home-swiper>
      <top-nav></top-nav>
      <router-view></router-view>
  </div>
</template>

<script>

 import {mapGetters,mapActions} from 'vuex'
 import HomeSwiper from '../../components/HomeSwiper/HomeSwiper.vue'
// import HotGallery from '../../components/HotGallery/HotGallery.vue'
 import TopNav from '../../components/TopNav/TopNav.vue'


export default {
  data(){
      return {
          message:"home2"
      }
  },
  computed:{
      ...mapGetters(['topPosters'])
  },
  methods:{
    ...mapActions(['setLocation','getMainPageMovies','getFirstPageAdvAndNews'])
  },
  components:{
    HomeSwiper,
    TopNav
  },
  created(){
      //同步设置区域id
      this.setLocation({
          locationId:290
      });
      //异步获取热映电影数据
    //   this.getMainPageMovies({
    //       locationId:this.locationId
    //   });
      this.getFirstPageAdvAndNews();
      //this.$router.push('home/select');
  }
}
</script>

<style lang="scss" scoped>
@import './home.scss'
</style>
