import * as AuthAction from './AuthActionCreator'
import * as UsersAction from './UsersActionCreators'
import * as ProjectAction from './ProjectActionCreator'

export default {
    ...AuthAction,
    ...UsersAction,
    ...ProjectAction
}