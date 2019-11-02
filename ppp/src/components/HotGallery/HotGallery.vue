<template>
  <div class="hot-gallery-root">
      <div class="hot-gallery-item" v-for="movie in movies" :key="movie.movieId" @click="gotoMovie(movie.movieId)">
        <div class="hot-gallery-item-image">
            <img :src="movie.img">
            <div class="rating" v-if="movie.ratingFinal!=-1">
                <p>{{movie.ratingFinal}}</p>
            </div>
        </div>
        <div class="hot-gallery-item-title">
            <p>{{movie.titleCn}}</p>
        </div>
        <div class="hot-gallery-item-isTicket">
            <div v-if="movie.ratingFinal==-1" class="yushou">
                <p>预售</p>
            </div>
            <div v-else class="goupiao">
                <p>购票</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
        
      }
  },
  methods:{
      gotoMovie(id){
        console.log(id);
        this.$router.push({name:'movie',params:{movieId:id}});
    }
  },
  props:['movies']
}
</script>

<style lang="scss" scoped>
@import './HotGallery.scss';
</style>