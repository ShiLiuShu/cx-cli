export default{
    mainPageMovies:state=>state.movies.mainPageMovies,
    locationId:state=>state.movies.locationId,
    isHotMovies:state=>state.movies.isHotMovies,
    isComingMovies:state=>state.movies.isComingMovies,
    isComingMoviesAttention:state=>state.movies.isComingMoviesAttention,

    movieDetailBasic:state=>state.movieDetails.movieDetailBasic,
    movieDetailLive:state=>state.movieDetails.movieDetailLive,
    movieDetailAd:state=>state.movieDetails.movieDetailAd,
    movieDetailRelated:state=>state.movieDetails.movieDetailRelated,
    movieDetailBox:state=>state.movieDetails.movieDetailBox,
    movieDetailHotComment:state=>state.movieDetails.movieDetailHotComment,

    personDetail:state=>state.person.personDetail,
    cinemas:state=>state.cinemas.cinemas,
    cinemaDetail:state=>state.cinemaDetail.cinemaDetail
}