import { ActionContext } from 'vuex'
import { RootState } from './state'

export const actions = {
  incrementAsync({ commit }: ActionContext<RootState, RootState>) {
    return setTimeout(() => {
      commit('increment')
    }, 100)
  }
}
