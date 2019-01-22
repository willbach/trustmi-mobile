import GroupStore from 'store/DomainStore/GroupStore'
import ProfileStore from 'store/DomainStore/ProfileStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'
import CreateGroupStore from 'store/ViewStore/CreateGroupViewStore'
import CreateEventStore from 'store/ViewStore/CreateEventViewStore'

export default {
  groupStore: GroupStore,
  signupForm: SignupStore,
  profileStore: ProfileStore,
  userStore: UserStore,
  createGroupStore: CreateGroupStore,
  createEventStore: CreateEventStore,
}
