import Vue from 'vue'
import {
  RECEIVE_HOME,
  RECEIVE_CAROUSEL,
  RECEIVE_BRAND,
  RECEIVE_CLASSIFY,
  RECEIVE_ALLBRAND
} from './mutiations-types'

export default {
  [RECEIVE_HOME](state, {home}){
    state.home = home
  },
  [RECEIVE_CAROUSEL](state, {carousel}){
    state.carousel = carousel
  },
  [RECEIVE_BRAND](state, {brand}){
    state.brand = brand
  },
  [RECEIVE_CLASSIFY](state, {classify}){
    state.classify = classify
  },
  [RECEIVE_ALLBRAND](state, {allBrand}){
    state.allBrand = allBrand
  },
}
