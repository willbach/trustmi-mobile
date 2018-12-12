import GroupStore from 'store/DomainStore/GroupStore'
import ProfileStore from 'store/DomainStore/ProfileStore'
import RestoreStore from 'store/ViewStore/RestoreViewStore'
import ScrapedStore from 'store/DataStore/ScrapedStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'
import CreateGroupStore from 'store/ViewStore/CreateGroupViewStore'

export default function() {
  const groupStore = new GroupStore()
  const profileStore = new ProfileStore()
  const restoreForm = new RestoreStore()
  const scrapedStore = new ScrapedStore()
  const signupForm = new SignupStore()
  const userStore = new UserStore()
  const createGroupStore = new CreateGroupStore()

  return {
    groupStore,
    profileStore,
    restoreForm,
    scrapedStore,
    signupForm,
    userStore,
    createGroupStore,
  }
}
