import GroupStore from 'store/DomainStore/GroupStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'
import CreateGroupStore from 'store/ViewStore/CreateGroupViewStore'
import CreateEventStore from 'store/ViewStore/CreateEventViewStore'
import AccountSetupStore from 'store/ViewStore/AccountSetupViewStore'

export default {
  groupStore: GroupStore,
  signupForm: SignupStore,
  userStore: UserStore,
  createGroupStore: CreateGroupStore,
  createEventStore: CreateEventStore,
  accountSetupStore: AccountSetupStore,
}
