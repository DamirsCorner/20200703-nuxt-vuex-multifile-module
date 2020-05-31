import { RootState } from './state'

export const mutations = {
  increment(state: RootState) {
    state.count++
  }
}
