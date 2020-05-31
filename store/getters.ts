import { RootState } from './state'

export const getters = {
  isDefault: (state: RootState) => state.count === 0
}
