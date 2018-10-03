import MainStore from 'store/DomainStore/HomeStore'
import SignupStore from 'store/ViewStore/SignupViewStore'
import UserStore from 'store/DataStore/UserStore'

export default function() {
  const mainStore = new MainStore()
  const signupForm = new SignupStore()
  const userStore = new UserStore()

  return {
    signupForm,
    userStore,
    mainStore
  };
}
