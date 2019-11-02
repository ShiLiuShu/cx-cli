import getData from '../../api/getData'
import * as types from '../mutation-types'


const state={
    movieDetailBasic:'',
    movieDetailLive:'',
    movieDetailAd:'',
    movieDetailRelated:'',
    movieDetailBox:'',
    movieDetailHotComment:''
}

const getters={
    movieDetailBasic:state=>state.movieDetailBasic,
    movieDetailLive:state=>state.movieDetailLive,
    movieDetailAd:state=>state.movieDetailAd,
    movieDetailRelated:state=>state.movieDetailRelated,
    movieDetailBox:state=>state.movieDetailBox,
    movieDetailHotComment:state=>state.movieDetailHotComment
}


const actions={
    async getMovieDetail({commit},payload){
        let data=await getData.fetchMovieDetail(payload.locationId,payload.movieId);
        commit(types.GET_MOVIEDETAIL,data.data.data);
        let hotCommentData=await getData.fetchMovieHotComment(payload.movieId);
        commit(types.GET_MOVIEDETAILHOTCOMMENT,hotCommentData.data.data);
    }
}


const mutations={
    [types.GET_MOVIEDETAIL](state,movieDetail){
        state.movieDetail=movieDetail;
        state.movieDetailBasic=movieDetail.basic;
        state.movieDetailLive=movieDetail.live;
        state.movieDetailAd=movieDetail.advertisement;
        state.movieDetailRelated=movieDetail.related;
        state.movieDetailBox=movieDetail.boxOffice;
        //console.log(state.movieDetail);
    },
    [types.GET_MOVIEDETAILHOTCOMMENT](state,hotCommentData){
        state.movieDetailHotComment=hotCommentData;
    },
    clearMovieDetail(state){
        state.movieDetailBasic='';
        state.movieDetailAd='';
        state.movieDetailLive='';
        state.movieDetailRelated='';
        state.movieDetailBox='';
        state.movieDetailHotComment='';
    }

}




export default{
    state,
    getters,
    actions,
    mutations
}