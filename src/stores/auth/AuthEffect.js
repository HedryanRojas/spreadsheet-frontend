import firebaseApp, { googleProvider } from '../../firebase'
import ResponseError from '../../assets/utils/ResponseError'
import { dummySpreadSheets, dummyUser } from '../../assets/utils/DummyData'

export async function login() {
  try {
    const result = await firebaseApp.auth().signInWithPopup(googleProvider)
    return { user: setCurrentUser(result.user), isDummy: false }
  } catch (error) {
    const { code, message, email, credential } = error
    const responseError = new ResponseError()
    responseError.status = code
    responseError.message = message
    responseError.raw = { email, credential }
    return responseError
  }
}

export async function dummyLogin() {
  localStorage.setItem('SHEETS', JSON.stringify(dummySpreadSheets));
  return { user: setCurrentUser(dummyUser), isDummy: true }
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
