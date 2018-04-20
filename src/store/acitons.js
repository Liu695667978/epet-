import {
  RECEIVE_HOME,
  RECEIVE_CAROUSEL,
  RECEIVE_BRAND,
  RECEIVE_CLASSIFY,
  RECEIVE_ALLBRAND
} from './mutiations-types'

import {reqHome, reqCarousel, reqBrand, reqClassify, reqAllBrand} from '../api/index'

export default {
  async getHome({commit}){
    const result = await reqHome()
    if(result.code === 0){
      const home = result.data
      commit(RECEIVE_HOME,{home})
    }
  },
  async getCarousel({commit}){
    const result = await reqCarousel()
    if(result.code === 0){
      const carousel = result.data
      commit(RECEIVE_CAROUSEL,{carousel})
    }
  },
  async getBrand({commit}){
    const result = await reqBrand()
    if(result.code === 0){
      const brand = result.data
      commit(RECEIVE_BRAND,{brand})
    }
  },
  async getClassify({commit}){
    const result = await reqClassify()
    if(result.code === 0){
      const classify = result.data
      commit(RECEIVE_CLASSIFY,{classify})
    }
  },
  async getAllBrand({commit},cb){
    const result = await reqAllBrand()
    if(result.code === 0){
      const allBrand = result.data
      commit(RECEIVE_ALLBRAND,{allBrand})
      cb && cb()
    }
  }
}
