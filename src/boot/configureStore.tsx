import InformationStore from 'store/DomainStore/InformationStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import RestoreStore from 'store/ViewStore/RestoreViewStore'
import UserStore from 'store/DataStore/UserStore'
import VerifiedStore from 'store/DataStore/VerifiedStore'

export default function() {
  const mainStore = new InformationStore()
  const signupForm = new SignupStore()
  const restoreForm = new RestoreStore()
  const userStore = new UserStore()
  const verifiedStore = new VerifiedStore()

  return {
    mainStore,
    signupForm,
    restoreForm,
    userStore,
    verifiedStore,
  }
}
