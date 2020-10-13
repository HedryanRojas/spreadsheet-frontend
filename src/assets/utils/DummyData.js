import userIcon from '../static/user-icon.png'

const { REACT_APP_ONLY_DUMMY } = process.env

export const isDummy = REACT_APP_ONLY_DUMMY === 'true'

export const dummyUser = {
  uid: -1234,
  displayName: 'dummy',
  photoURL: userIcon,
  email: 'dummy@dummy.com',
}

export const dummySpreadSheets = [
  {
    _id: '5edab0e9bfd43147d86aaae4',
    email: 'dummy@dummy.com',
    name: 'dummy-spreadsheet-1',
    data: {},
  },
  {
    _id: '5edae8d8fa522d3b94d22090',
    email: 'dummy@dummy.com',
    name: 'dummy-spreadsheet-2',
    data: {},
  },
]
