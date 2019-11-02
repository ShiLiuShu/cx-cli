<template>
  <div class="home-select-root">
      <div class="under-search">
          <div class="under-search-left">
              <p>正在售票·深圳</p>
          </div>
          <div class="under-search-right-text">
              <p>共{{mainPageMovies.length}}部</p>
          </div>
          <div class="under-search-right-image">
              <img src="../../assets/right_arrow.png" alt="under-search-image">
          </div>
      </div>
      <hot-gallery :movies="mainPageMovies" v-if="mainPageMovies.length"></hot-gallery>
      <Divider></Divider>
      <home-live></home-live>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import HomeSwiper from '../../components/HomeSwiper/HomeSwiper.vue'
import HotGallery from '../../components/HotGallery/HotGallery.vue'
import TopNav from '../../components/TopNav/TopNav.vue'
import Divider from '../../components/Divider/Divider.vue'
import HomeLive from '../../components/HomeLive/HomeLive.vue'

export default {
  data(){
      return {
        
      }
  },
  computed:{
      ...mapGetters(['mainPageMovies','locationId','hotPoints','topPosters'])
  },
  methods:{
    ...mapActions(['setLocation','getMainPageMovies','getFirstPageAdvAndNews'])
  },
  components:{
    HomeSwiper,
    HotGallery,
    TopNav,
    Divider,
    HomeLive
  },
  created(){
      //同步设置区域id
    //   this.setLocation({
    //       locationId:290
    //   });
      //异步获取热映电影数据
      this.getMainPageMovies({
          locationId:this.locationId
      });
      //this.getFirstPageAdvAndNews();
      //this.$router.push('home/select');
  }
}
</script>

<style lang="scss" scoped>
@import './HomeSelect.scss';
</style>