import getData from '../../api/getData'
import * as types from '../mutation-types'

const state={
    cinemas:[]
}

const getters={
    cinemas:state=>state.cinemas
}

const actions={
    async getCinemasByCity({commit},cityId){
        let data=await getData.fetchCinemaByCity(cityId);
        commit(types.GET_CINEMAS,data.data);
    }
}

const mutations={
    [types.GET_CINEMAS](state,data){
        state.cinemas=data;
    }
}


export default{
    state,
    getters,
    actions,
    mutations
}