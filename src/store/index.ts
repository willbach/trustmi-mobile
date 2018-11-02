import InformationStore from 'store/DomainStore/InformationStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'

export default {
  userStore: UserStore,
  mainStore: InformationStore,
  signupForm: SignupStore
}
