import MainStore from 'store/DomainStore/HomeStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import RestoreStore from 'store/ViewStore/RestoreViewStore'
import UserStore from 'store/DataStore/UserStore'

export default function() {
  const mainStore = new MainStore()
  const signupForm = new SignupStore()
  const restoreForm = new RestoreStore()
  const userStore = new UserStore()

  return {
    mainStore,
    signupForm,
    restoreForm,
    userStore,
  };
}
