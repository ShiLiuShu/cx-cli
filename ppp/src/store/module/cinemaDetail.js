import getData from '../../api/getData'
import * as types from '../mutation-types'

const state={
    cinemaDetail:''
}

const getters={
    cinemaDetail:state=>state.cinemaDetail
}

const actions={
    async getCinemaById({commit},cinemaId){
        let data=await getData.fetchCinemaDetail(cinemaId);
        commit(types.GET_CINEMAS,data.data.data);
    }
}

const mutations={
    [types.GET_CINEMAS](state,data){
        state.cinemaDetail=data;
    }
}


export default{
    state,
    getters,
    actions,
    mutations
}