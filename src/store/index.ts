import MainStore from 'store/DomainStore/HomeStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'

export default {
  userStore: UserStore,
  mainStore: MainStore,
  signupForm: SignupStore
}
