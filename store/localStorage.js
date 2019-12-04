import Cookies from 'js-cookie'

export const state = () => ({
    willJoinModalOpen : true,
    saleToken: ''
  })

export const mutations = {
    toggle(state){
      state.willJoinModalOpen = false
      //Cookies.set('localStorage', state.willJoinModalOpen)
    },
    setSaleToken(state, value){
      state.saleToken = value
      Cookies.set('localStorage', state.saleToken)
    }
    
}