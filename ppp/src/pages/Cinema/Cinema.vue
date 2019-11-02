<template>
  <div class="cinema-root" v-if="cinemas">
      <div class="cinema-head">
          <p>全部</p>
          <p>|</p>
          <p>特惠</p>
          <p>|</p>
          <p>附近</p>
          <p>|</p>
          <p>筛选</p>
      </div>
      <iframe :src="html" class="frame"></iframe>
      <div class="cinema-all">
          <div class="cinema-detail" v-for="cinema in cinemas" :key="cinema.cinemaId" @click="gotoCinema(cinema.cinemaId)">
              <div class="cinema-detail-title">{{cinema.cinameName}}</div>
              <div class="cinema-detail-address">{{cinema.address}}</div>
              <div class="cinema-detail-price">￥{{cinema.minPrice/100}}起</div>
              <div class="cinema-detail-feature">
                  <div v-if="cinema.feature.has3D">
                      3D
                  </div>
                  <div v-if="cinema.feature.hasIMAX">
                      IMAX
                  </div>
                  <div v-if="cinema.feature.hasPark">
                      P
                  </div>
                  <div v-if="cinema.feature.hasWifi">
                      WIFI
                  </div>
                  <div v-if="cinema.feature.hasFeatureDolby">
                      Dolby
                  </div>
                  <div v-if="cinema.feature.hasVIP">
                      VIP
                  </div>
              </div>
          </div>
      </div>
      
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex' 
export default {
  data(){
      return {
        html:'https://static4da.mtime.cn/feature/mobile/banner/2017/0823/saiche37501751.html'
      }
  },
  computed:{
    ...mapGetters(['cinemas','locationId'])
  },
  methods:{
    ...mapActions(['getCinemasByCity']),
    gotoCinema(id){
        console.log(id);
        this.$router.push({name:'cinemaDetail',params:{cinemaId:id}});
    }
  },
  mounted(){
      this.getCinemasByCity(this.locationId);
  }
}
</script>

<style lang="scss" scoped>
@import './cinema.scss';
</style>