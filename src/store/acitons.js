import {
  RECEIVE_HOME,
  RECEIVE_CAROUSEL
} from './mutiations-types'

import {reqHome, reqCarousel} from '../api/index'

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
  }
}
