<template>
  <div class="cinemaDetail-root">
      <div class="root-head">
        <div class="head-title">{{cinema.name}}</div>
        <div class="head-location">{{cinema.address}}</div>
        <div class="head-feature">
          <span v-if="cinema.feature.has3D">3D厅</span>
          <span v-if="cinema.feature.has4D">4D厅</span>
          <span v-if="cinema.feature.hasPark">停车场</span>
          <span v-if="cinema.feature.hasFood">餐饮</span>
          <span v-if="cinema.feature.hasGame">游乐场</span>
          <span v-if="cinema.feature.hasIMAX">IMAX厅</span>
          <span v-if="cinema.feature.hasLoveseat">情侣座</span>
          <span v-if="cinema.feature.hasServiceTicket">自助取票</span>
          <span v-if="cinema.feature.hasVIP">VIP厅</span>
          <span v-if="cinema.feature.hasWifi">WiFi</span>
        </div>
      </div>
      <div class="root-slider">       
         <div class="slider-item" v-for="(item,index) in movies" :key="item.movieId" v-if="movies"
         :data-index="index" :data-loc="index" @click="_eventClick($event,index)" ref="slider">
            <img :src="item.img"/>  
            <div class="slider-item-rating">{{item.ratingFinal}}</div>
        </div> 
        <div class="slider-background"></div>
      </div>
      <div class="movie-title">{{currentMovie.title}}</div>
      <div class="movie-sample">
        <span class="movie-minute">{{currentMovie.length}}</span>
        <span class="movie-type">{{currentMovie.type}}</span>
        <!-- <div>{{currentMovie}}</div> -->
         <!-- <div>{{cinemaDetail.showtimes[16]}}</div>  -->
      </div>
      <div class="date-title">
        <div class="date-title-item" v-for="(item,index) in currentMovie.showDates" ref="titleitem"
        @click="_swap(index)">{{item}}</div>
      </div>
      <div class="current-hall" v-for="item in showtimesInfo.list" :key="showtimesInfo.moviekey">
        <div class="current-time">
          <div class="time-start">11:30</div>
          <div class="time-end">13:30散场</div>
        </div>
        <div class="current-feature">
          <div class="feature-up">
            <span>{{item.language}}  </span>
            <span>{{item.versionDesc}}</span>
          </div>
          <div class="feature-down">{{item.hall}}</div>
        </div>
        <div class="current-price">{{item.price}}元</div>
        <div class="current-buy">购票</div>
      </div>
      
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import Divider from '../../components/Divider/Divider.vue'
export default {
  data(){
      return {
        currentIndex:0,
        showtimes:[0],
        singleIndex:0
      }
  },
  created(){
    this.cinemaId=this.$route.params.cinemaId;
    console.log(this.cinemaId);
    this.getCinemaById(this.cinemaId);
  },
  updated(){
    
  },
  mounted(){
    if(this.isReady){
      console.log(this.movies.length);
      let sum=0;
      for(let i=0;i<this.movies.length-1;i++){
        this.showtimes[i+1]=this.showtimes[i]+this.movies[i].showDates.length;
      }
      console.log(this.showtimes);
      this.$nextTick(()=>{
        this.$refs.titleitem[0].className+=" active-item";
      });
      
      }
  },
  watch:{
    isReady(){
      console.log(this.movies.length);
      let sum=0;
      for(let i=0;i<this.movies.length-1;i++){
        this.showtimes[i+1]=this.showtimes[i]+this.movies[i].showDates.length;
      }
      console.log(this.showtimes);
      this.$nextTick(()=>{
        this.$refs.titleitem[0].className+=" active-item";
      });
      }
  },
  methods:{
    ...mapActions(['getCinemaById']),
    _eventClick(event,index){
      console.log(index);
      let selectIndex=index;
      if(selectIndex==this.currentIndex){
        return;
      }
      this.currentIndex=selectIndex;
      this.singleIndex=0;
      let trans_x=6-this.currentIndex*4.2;
      this.$refs.slider.forEach((item,index)=>{
        if(index==this.currentIndex){
          this.$refs.slider[index].style.webkitTransform="translateX("+trans_x+"rem) scale(1.2)";
        }else{
          this.$refs.slider[index].style.webkitTransform="translateX("+trans_x+"rem)";
        }
      });   
      this.$refs.titleitem.forEach((item,index)=>{
        item.className="date-title-item";
        if(index==0){
          item.className+=" active-item";
        }
      });
    },
    _swap(clickIndex){
      this.$refs.titleitem.forEach((item,index)=>{
        item.className="date-title-item";
        if(index==clickIndex){
          item.className+=" active-item";
        }
      });
      this.singleIndex=clickIndex;
      console.log(this.singleIndex);
    }
    // _render(){
    //   let trans_x=3.6-this.currentIndex*3.6;
    //   console.log(trans_x);
    // }
  },
  computed:{
    ...mapGetters(['cinemaDetail']),
    cinema(){
      return this.cinemaDetail.cinema;
    },
    movies(){
      return this.cinemaDetail.movies;
    },
    currentMovie(){
      return this.cinemaDetail.movies&&this.cinemaDetail.movies[this.currentIndex];
    },
    showtimesInfo(){
      return this.cinemaDetail.showtimes&&this.cinemaDetail.showtimes[this.showtimesIndex];
    },
    showtimesIndex(){
      return this.showtimes[this.currentIndex]+this.singleIndex;
    },
    isReady(){
      return this.movies;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './CinemaDetail.scss';
</style>