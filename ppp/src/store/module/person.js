import getData from '../../api/getData'
import * as types from '../mutation-types'

const state={
    personDetail:''
}

const getters={
    personDetail:state=>state.personDetail
}

const actions={
    async getPersonDetail({commit},payload){
        let data=await getData.fetchPersonDetail(payload.personId,payload.cityId);
        commit(types.GET_PERSONDETAIL,data.data.data);
    }
}

const mutations={
    [types.GET_PERSONDETAIL](state,personDetail){
        state.personDetail=personDetail;
    }
}


export default{
    state,
    getters,
    actions,
    mutations
}