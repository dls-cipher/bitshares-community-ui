
const getters = {
  // gets base value based on market price or history price
  getBalanceBaseValue: (state, getters, rootState, rootGetters) => ({ assetId, value }) => {
    const marketPrice = rootGetters['market/getPriceById'](assetId)
    const history24 = rootGetters['history/getByDay'](24)[assetId]
    const history7 = rootGetters['history/getByDay'](7)[assetId]
    const price = marketPrice || history24.last || history7.last
    const baseValue = parseInt((value * price).toFixed(0), 10)

    return baseValue
  },

  // gets fiat value based on market or history price
  getBalanceFiatValue: (state, getters, rootState, rootGetters) => ({ assetId, value }) => {
    const fiatValue = 0
    return fiatValue
  }
}

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters
}
