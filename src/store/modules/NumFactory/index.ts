import { Module } from 'vuex'
import NumFactoryStateTypes from './types'
import RootStateTypes from '../../types'

// Create a new store Modules.
const numFactoryModule: Module<NumFactoryStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    name: 'numFactory-module',
    count: 1
  },
  mutations: {
    increment(state: NumFactoryStateTypes) {
      state.count += 1
    }
  },
  actions: {}
}

export default numFactoryModule
