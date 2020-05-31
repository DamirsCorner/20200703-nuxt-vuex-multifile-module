import { RootState } from './state'

const getters = {
  isDefault: (state: RootState) => state.count === 0
}

export default getters
