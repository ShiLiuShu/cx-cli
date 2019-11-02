<template>
  <div class="person-root" v-if="personDetail">
      <div class="bg">
          <img :src="personDetail.background.image" >
      </div>
      <movie-head></movie-head>
      <div class="person-resume">
          <div class="person-resume-image">
              <img :src="personDetail.background.image">
          </div>
          <div class="person-resume-title">
              <p class="person-resume-title-cn">
                  {{personDetail.background.nameCn}}
              </p>
              <p class="person-resume-title-en">
                  {{personDetail.background.nameEn}}
              </p>
          </div>
          <div class="person-resume-content">
              <div class="type">
                  {{personDetail.background.profession}}
              </div>
              <div class="birth">
                  {{birth}}
              </div>
              <div class="like">
                  喜爱度{{personDetail.background.ratingFinal}}
              </div>
          </div>
      </div>
      <div class="margin"></div>
      <div class="person-sample">
          <p>{{personDetail.background.content}}</p>
      </div>
      <Divider></Divider>
      <div class="person-hotMovie" v-if="hotMovie.length">
          <div class="hotMovie-title">
              正在热映
          </div>
          <div class="hotMovie-content">
              <div class="hotMovie-image">
                  <img :src="hotMovie.movieCover" > 
              </div>
              <div class="hotMovie-text">
                  <div class="hotMovie-text-title">
                      {{hotMovie.movieTitleCn}}
                  </div>
                  <div class="hotMovie-text-type">
                      {{hotMovie.type}}
                  </div>
                  <div class="hotMovie-text-price">
                      ￥{{hotMoviePrice}}
                  </div>
              </div>
          </div>
          <div class="choosePos">
              <div>选座购票</div>
          </div>
      </div>
      <Divider v-if="hotMovie.length"></Divider>
      <div class="person-awards">
        <div class="awards-sample">共获奖{{personDetail.background.totalWinAward}}次，提名{{personDetail.background.totalNominateAward}}次</div>
        <div class="awards-all">全部</div>
        <div class="awards-image">
            <img src="../../assets/right_arrow.png" >
        </div>
      </div>
      <Divider></Divider>
      <div class="person-image">
          <div class="person-image-title">
            <div class="person-image-sample">影人图集</div>
            <div class="person-image-all">全部</div>
            <div class="person-image-image">
                <img src="../../assets/right_arrow.png" >
            </div>
          </div>
          <div class="person-image-array">
              <div class="image-item" v-for="item in personDetail.background.images" :key="item.imageId">
                <img :src="item.image" >
              </div>
          </div>
      </div>
      <Divider></Divider>
      <div v-html="personDetail.advertisement.advList.count&&personDetail.advertisement.advList[0].url"></div>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import MovieHead from '../../components/MovieHead/MovieHead.vue'
import Divider from '../../components/Divider/Divider.vue'
export default {
  data(){
      return {
        
      }
  },
  created(){
    var that=this;
    this.personId=this.$route.params.personId;
    this.getPersonDetail({
        personId:this.personId,
        cityId:this.locationId
    });
    setTimeout(function(){
        console.log(that.personDetail.advertisement.advList[0].url);
    },3000);
  },
  methods:{
      ...mapActions(['getPersonDetail'])
  },
  computed:{
      ...mapGetters(['personDetail','locationId']),
      birth(){
          if(!this.personDetail){
              return '';
          }else{
                return this.personDetail.background.birthYear+'-'+this.personDetail.background.birthMonth
                +'-'+this.personDetail.background.birthDay+' '+this.personDetail.background.address;
          }
          
      },
      hotMovie(){
          return this.personDetail?this.personDetail.background.hotMovie:'';
      },
      hotMoviePrice(){
          return this.hotMovie?this.hotMovie.ticketPrice/100:0;
      }
  },
  components:{
      MovieHead,
      Divider
  }

  
}
</script>

<style lang="scss" scoped>
@import './actor.scss';
</style>



