import GroupStore from 'store/DomainStore/GroupStore'
import ProfileStore from 'store/DomainStore/ProfileStore'
import RestoreStore from 'store/ViewStore/RestoreViewStore'
import VerifiedStore from 'store/DataStore/VerifiedStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'
import CreateGroupStore from 'store/ViewStore/CreateGroupViewStore'
import CreateEventStore from 'store/ViewStore/CreateEventViewStore'
import DocumentStore from 'store/DataStore/DocumentStore'

export default function() {
  const groupStore = new GroupStore()
  const profileStore = new ProfileStore()
  const restoreForm = new RestoreStore()
  const verifiedStore = new VerifiedStore()
  const signupForm = new SignupStore()
  const userStore = new UserStore()
  const createGroupStore = new CreateGroupStore()
  const createEventStore = new CreateEventStore()
  const documentStore = new DocumentStore()

  return {
    groupStore,
    profileStore,
    restoreForm,
    verifiedStore,
    signupForm,
    userStore,
    createGroupStore,
    createEventStore,
    documentStore,
  }
}
