import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from "../actions/notificationActionTypes"

export const initialState = {
    filter: NotificationTypeFilters.DEFAULT,
    notifications: []
   
}
export const notificationReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.data.map((notification) => {
                notification['isRead'] = false
                return notification
            }) }
        // eslint-disable-next-line no-duplicate-case
        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map((item) => {
                    if (action.index === item.id)
                        return {...item, isRead: true}
                    else
                        return item
                })
            }
        case SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            break
    }
    return state
}