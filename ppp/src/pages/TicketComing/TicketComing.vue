<template>
  <div class="ticket-hot-root">
      <div class="title1"><p>最受关注</p></div>
      <div class="attention" v-if="isComingMoviesAttention.length">
        <div class="attention-item" v-for="item in isComingMoviesAttention" :key="item.id" @click="gotoMovie(item.id)">
          <div class="date"><p>{{item.releaseDate}}</p></div>
          <div class="border"></div>          
          <div class="attention-image">
            <img :src="item.image" >
          </div>
          <div class="attention-content">
            <div class="cnTitle">{{item.title}}</div>
            <div><p class="outstanding">{{item.wantedCount}}</p>人想看 {{item.type}}</div>
            <div>导演：{{item.director}}</div>
            <div>演员：{{item.actor1}}，{{item.actor2}}</div>
            <div class="yushou">
              <div class="pre-yushou" v-if="item.isTicket">超前预售</div>
              <div class="play-hint" v-else>上映提醒</div>
              <div class="yugao-video">预告片</div>
            </div>
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div class="title2" v-if="isComingMovies.length"><p>即将上映（{{isComingMovies.length}}部）</p></div>
      <div class="coming" v-if="isComingMovies.length">
        <div class="month">7月</div>
        <div class="coming-item" v-for="item in isComingMovies" :key="item.id" @click="gotoMovie(item.id)">
          <div class="coming-item-day">
            <p>{{item.rDay}}日</p>
          </div>
          <div class="coming-item-right">
            <div class="coming-item-image">
              <img :src="item.image">
            </div>
            <div class="coming-item-content">
              <div class="cnTitle">{{item.title}}</div>
              <div><p class="outstanding">{{item.wantedCount}}</p>人想看 {{item.type}}</div>
              <div>导演：{{item.director}}</div>
              <div class="yushou">
                <div class="pre-yushou" v-if="item.isTicket">超前预售</div>
                <div class="play-hint" v-else>上映提醒</div>
                <div class="yugao-video">预告片</div>
              </div>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
import Divider from '../../components/Divider/Divider.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
      return {
        
      }
  },
  components:{
    Divider
  },
  created(){
  },
  mounted(){
    this.getIsComingMovies({
        locationId:this.locationId
    });
  },
  methods:{
    ...mapActions(['getIsComingMovies']),
    gotoMovie(id){
        console.log(id);
        this.$router.push({name:'movie',params:{movieId:id}});
    }
  },
  computed:{
      ...mapGetters(['isComingMovies','isComingMoviesAttention','locationId'])
  }
}
</script>

<style lang="scss" scoped>
@import './TicketComing.scss';
</style>