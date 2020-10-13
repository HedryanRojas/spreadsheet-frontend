import firebaseApp, { googleProvider } from '../../firebase'
import ResponseError from '../../assets/utils/ResponseError'
import { dummySpreadSheets, isDummy } from '../../assets/utils/DummyData'

export async function login() {
  try {
    const result = await firebaseApp.auth().signInWithPopup(googleProvider)
    if(isDummy){
      localStorage.setItem('SHEETS', JSON.stringify(dummySpreadSheets));
    }
    return setCurrentUser(result.user)
  } catch (error) {
    const { code, message, email, credential } = error
    const responseError = new ResponseError()
    responseError.status = code
    responseError.message = message
    responseError.raw = { email, credential }
    return responseError
  }
}

export async function logout() {
  try {
    await firebaseApp.auth().signOut()
    return null
  } catch (error) {
    const { code, message } = error
    const responseError = new ResponseError()
    responseError.status = code
    responseError.message = message
    return responseError
  }
}

export function setCurrentUser(user) {
  if (!user) return user
  const { uid, displayName, photoURL, email } = user
  return { uid, displayName, photoURL, email }
}
