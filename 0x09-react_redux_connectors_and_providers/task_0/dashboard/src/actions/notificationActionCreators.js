import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => {
    return {
        type: MARK_AS_READ,
        index // i.e. index: index
    }
}

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter
    }
}

export const fetchNotifications = (data) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data // data: data
    }
}