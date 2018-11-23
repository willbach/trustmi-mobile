import GroupStore from 'store/DomainStore/GroupStore'
import ProfileStore from 'store/DomainStore/ProfileStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'

export default {
  groupStore: GroupStore,
  signupForm: SignupStore,
  profileStore: ProfileStore,
  userStore: UserStore,
}
