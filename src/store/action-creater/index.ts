import * as UserActionCreators from './user'
import * as TodoActionCreators from './todoActions'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}