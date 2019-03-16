import GroupStore from 'store/DomainStore/GroupStore'
import RecoverStore from 'store/ViewStore/RecoverViewStore'
import VerifiedStore from 'store/DataStore/VerifiedStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'
import CreateGroupStore from 'store/ViewStore/CreateGroupViewStore'
import CreateEventStore from 'store/ViewStore/CreateEventViewStore'
import AccountSetupStore from 'store/ViewStore/AccountSetupViewStore'

export default function() {
  const groupStore = new GroupStore()
  const restoreForm = new RecoverStore()
  const verifiedStore = new VerifiedStore()
  const signupForm = new SignupStore()
  const userStore = new UserStore()
  const createGroupStore = new CreateGroupStore()
  const createEventStore = new CreateEventStore()
  const accountSetupForm = new AccountSetupStore()

  return {
    groupStore,
    restoreForm,
    verifiedStore,
    signupForm,
    userStore,
    createGroupStore,
    createEventStore,
    accountSetupForm,
  }
}
