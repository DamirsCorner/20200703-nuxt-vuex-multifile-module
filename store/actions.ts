import { ActionContext } from 'vuex'
import { RootState } from './state'

const actions = {
  incrementAsync({ commit }: ActionContext<RootState, RootState>) {
    return setTimeout(() => {
      commit('increment')
    }, 100)
  }
}

export default actions
