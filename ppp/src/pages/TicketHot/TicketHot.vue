<template>
  <div class="ticket-hot-root" v-if="isHotMovies.length">
      <div class="ticket-hot-item"  v-for="movie in isHotMovies" :key="movie.id" @click="gotoMovie(movie.id)">
          <div class="image">
              <img :src="movie.img" >
          </div>
          <div class="content">
              <p class="title">{{movie.tCn}}</p>
              <p class="special">{{movie.commonSpecial}}</p>
              <p class="time">{{movie.rd}}上映</p>
              <p class="cinema">今日{{movie.NearestCinemaCount}}家影院上映{{movie.NearestShowtimeCount}}场</p>
              <div class="tags">
                  <div v-if="movie.is3D">3D</div>
                  <div v-if="movie.isIMAX3D">IMAX</div>
                  <div v-if="movie.isDMAX">中国巨幕</div>
              </div>
          </div>
          <div class="rate" v-if="movie.r>0">
              <p>{{movie.r}}</p>
          </div>
          <div class="isTicket">
              <div v-if="movie.r>0" class="ticket">
                  <p>购票</p>
              </div>
              <div v-else class="noticket">
                  <p>预售</p>
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
        
      }
  },
  created(){
    
  },
  mounted(){
    this.getIsHotMovies({
        locationId:this.locationId
    });
  },
  methods:{
    ...mapActions(['getIsHotMovies']),
    gotoMovie(id){
        console.log(id);
        this.$router.push({name:'movie',params:{movieId:id}});
    }
  },
  computed:{
      ...mapGetters(['isHotMovies','locationId'])
  }
}
</script>

<style lang="scss" scoped>
@import './TicketHot.scss';
</style>