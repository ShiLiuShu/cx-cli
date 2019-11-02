<template>
  <div class="movie-root">
        <div class="bg">
            <img :src="movieDetailBasic.img" >
        </div>
        <movie-head></movie-head>
        <!-- <div v-if="movieDetailBasic">{{movieDetailBasic.releaseDate}}</div>
        <div v-if="movieDetailAd">{{movieDetailAd.count}}</div>
        <div v-if="movieDetailLive">{{movieDetailLive.count}}</div>
        <div v-if="movieDetailRelated">{{movieDetailRelated.goodsCount}}</div> -->
        <div class="movie-resume" v-if="movieDetailBasic" :key="movieId">
            <div class="movie-resume-image">
                <img :src="movieDetailBasic.img" >
            </div>
            <div class="movie-resume-title">
                <p class="movie-resume-title-cn">
                    {{movieDetailBasic.name}}
                </p>
                <p class="movie-resume-title-en">
                    {{movieDetailBasic.nameEn}}
                </p>
            </div>
            <div class="movie-resume-content">
                <div>{{movieDetailBasic.mins}}</div>
                <div>{{movieDetailBasic.type}}</div>
                <div>{{movieDetailBasic.releaseDate}}</div>
                <div class="oranged">{{movieDetailBasic.commentSpecial}}</div>
                <div class="tags">
                  <div v-if="movieDetailBasic.is3D">3D</div>
                  <div v-if="movieDetailBasic.isIMAX3D">IMAX</div>
                  <div v-if="movieDetailBasic.isDMAX">中国巨幕</div>
              </div>
            </div>
            <div class="movie-resume-rate" v-if="movieDetailBasic.overallRating>0">
                <p>{{movieDetailBasic.overallRating}}</p>
            </div>
        </div>
        <div class="margin"></div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-story" v-if="movieDetailBasic">
            <div>剧情：{{movieDetailBasic.story}}</div>
        </div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-chief" v-if="movieDetailBasic">
            <div class="movie-chief-director">
                <div class="director-title">导演</div>
                <div class="director-content">
                    <div class="director-content-image">
                        <img :src="movieDetailBasic.director.img" >
                        <div class="movie-chief-divider"></div>
                    </div>
                    <div class="director-content-text">
                        <p>{{movieDetailBasic.director.name}}</p>
                        <p>{{movieDetailBasic.director.nameEn}}</p>
                    </div>           
                </div>
            </div>           
            <div class="movie-chief-actor">
                <div class="actor-title">
                    <div>全部演员</div>
                </div>
                <div class="actor-content">
                    <div class="actor-item" v-for="actor in movieDetailBasic.actors" :key="actor.actorId" @click="gotoPerson(actor.actorId)">
                        <div class="actor-item-image">
                            <img :src="actor.img" >
                        </div>
                        <div class="actor-item-text">
                            <p>{{actor.name}}</p>
                            <p>{{actor.nameEn}}</p>
                            <p>饰：{{actor.roleName}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-file" v-if="movieDetailBasic">
            <div class="movie-file-video">
                <div class="file-title">
                    <div class="first">视频</div>
                    <div class="all">{{movieDetailBasic.video.count}}</div>
                </div>
                <div class="file-img">
                    <div class="file-img-divider"></div>
                    <img :src="movieDetailBasic.video.img" >
                </div>
            </div>
            <div class="movie-file-image">
                <div class="file-title">
                    <div class="first">图片</div>
                    <div class="all">{{movieDetailBasic.stageImg.count}}</div>
                </div>
                <div class="file-img">
                    <img :src="movieDetailBasic.stageImg.list[0].imgUrl" >
                </div>
            </div>
        </div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-related" v-if="movieDetailRelated.goodsCount">
            <div class="movie-related-title">
                <div class="first">电影周边（{{movieDetailRelated.goodsCount}}）</div>
                <div class="all">全部</div>
            </div>
            <div class="movie-related-content">
                <div class="movie-related-item">
                    <div class="related-item-image">
                        <img :src="movieDetailRelated.goodsList[0].image" >
                    </div>
                    <div class="related-item-content">
                        <div class="related-item-name">{{movieDetailRelated.goodsList[0].name}}</div>
                        <div class="related-item-price">￥{{movieDetailRelated.goodsList[0].minSalePriceFormat}}</div>
                    </div>
                </div>
                <div class="movie-related-item">
                    <div class="related-item-image">
                        <img :src="movieDetailRelated.goodsList[1].image" >
                    </div>
                    <div class="related-item-content">
                        <div class="related-item-name">{{movieDetailRelated.goodsList[1].name}}</div>
                        <div class="related-item-price">￥{{movieDetailRelated.goodsList[1].minSalePriceFormat}}</div>
                    </div>
                </div>
                <div class="movie-related-item">
                    <div class="related-item-image">
                        <img :src="movieDetailRelated.goodsList[2].image" >
                    </div>
                    <div class="related-item-content">
                        <div class="related-item-name">{{movieDetailRelated.goodsList[2].name}}</div>
                        <div class="related-item-price">￥{{movieDetailRelated.goodsList[2].minSalePriceFormat}}</div>
                    </div>
                </div>
            </div>
        </div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-box" v-if="movieDetailBasic">
            <div class="movie-box-rank item">
                <div class="number">
                    {{movieDetailBox.ranking}}
                </div>
                <div class="text">
                    票房排名
                </div>
            </div>
            <div class="movie-box-account item">
                <div class="number">
                    {{movieDetailBox.todayBoxDes}}
                </div>
                <div class="text">
                    {{movieDetailBox.todayBoxDesUnit}}
                </div>
            </div>
            <div class="movie-box-realtime item">
                <div class="number">
                    {{movieDetailBox.totalBoxDes}}
                </div>
                <div class="text">
                    {{movieDetailBox.totalBoxUnit}}
                </div>
            </div>
        </div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-mini-comment" v-if="movieDetailHotComment.mini.total">
            <div class="movie-comment-title">
                <div class="first">短评</div>
                <div class="all">全部</div>
            </div>
            <div class="movie-mini-comment-content" v-for="item in movieDetailHotComment.mini.list" :key="item.commentId">
                <div class="mini-comment-divider"></div>
                <div class="mini-comment-avatar">
                    <img :src="item.headImg" >
                </div>
                <div class="mini-comment-text">
                    <div class="text-head">
                        <div class="text-head-nickname">{{item.nickname}}</div>
                        <div class="text-head-rating">评{{item.rating}}</div>
                    </div>
                    <div class="text-content">
                        {{item.content}}
                    </div>
                    <div class="text-foot">
                        
                    </div>
                </div>
            </div>
            <div class="mini-comment-foot">查看更多{{movieDetailHotComment.mini.total}}条评论</div>
        </div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-plus-comment" v-if="movieDetailBasic">
            <div class="movie-comment-title">
                <div class="first">影评</div>
                <div class="all">全部</div>
            </div>
            <div class="movie-plus-comment-content" v-for="item in movieDetailHotComment.plus.list" :key="item.commentId">
                <div class="plus-comment-divider"></div>
                <div class="plus-comment-text">
                    <div class="text-head">
                        {{item.title}}
                    </div>
                    <div class="text-foot">
                        <div class="text-foot-avatar">
                            <img :src="item.headImg" >
                        </div>
                        <div class="text-foot-nickname">{{item.nickname}}</div>
                        <div class="text-foot-rating">评{{item.rating}}分</div>
                        <div class="text-foot-commentCount"> | {{item.total}}评论</div>
                    </div>
                </div>
            </div>
            <div class="plus-comment-foot">查看更多{{movieDetailHotComment.plus.total}}条评论</div>
        </div>
  </div>
</template>

<script>
import Divider from '../../components/Divider/Divider.vue'
import MovieHead from '../../components/MovieHead/MovieHead.vue'
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  data(){
      return {
        movieId:''
      }
  },
  created(){
    this.movieDetailBasic=null;
    var that=this;
    this.movieId=this.$route.params.movieId;
    this.getMovieDetail({
        locationId:this.locationId,
        movieId:this.movieId
    });
  },
  components:{
      MovieHead,
      Divider
  },
  methods:{
      ...mapActions(['getMovieDetail']),
      ...mapMutations(['clearMovieDetail']),
      gotoPerson(id){
        console.log(id);
        this.$router.push({name:'person',params:{personId:id}});
    }
  },
  computed:{
      ...mapGetters(['locationId','movieDetail','movieDetailBasic','movieDetailRelated',
      'movieDetailAd','movieDetailLive','movieDetailBox','movieDetailHotComment'])
  },
  beforeDestroy(){
      this.clearMovieDetail();
  }

}
</script>

<style lang="scss" scoped>
@import './movie.scss';
</style>
