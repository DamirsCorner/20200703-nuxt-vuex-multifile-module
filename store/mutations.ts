import { RootState } from './state'

const mutations = {
  increment(state: RootState) {
    state.count++
  }
}

export default mutations
