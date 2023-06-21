import { fetchNotifications, markAsRead, setNotificationFilter } from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { notificationReducer, initialState } from "./notificationReducer";

const data = [
    {
        id: 1,
        type: "default",
        value: "New course available"
        },
        {
        id: 2,
        type: "urgent",
        value: "New resume available"
        },
        {
        id: 3,
        type: "urgent",
        value: "New data available"
        }
]

const res_state = {
    filter: "DEFAULT",
    notifications: 
[
    {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
        },
        {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
        },
        {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
        }
]
}

test('notificationReducer returns default state is no state is defined', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState)
})

test('notificationReducer correctly updates notifications (adds an isRead - false property) if `FETCH_NOTIFICATIONS_SUCCESS` action is provided', () => {
    const res = notificationReducer(undefined, fetchNotifications(data))
    // console.log(res)
    expect(res).toEqual(res_state)
})

test('notificationReducer correctly updates notifications (changes `isRead` value)) if `MARK_AS_READ` action is provided', () => {
    const res = notificationReducer(undefined, fetchNotifications(data))
    const res_1 = notificationReducer(res, markAsRead(1))
    // console.log(res_1)
    expect(res_1.notifications[0].isRead).toBe(true)
})

test('notificationReducer correctly updates state filter if `SET_TYPE_FILTER` action is provided', () => {
    const res = notificationReducer(undefined, setNotificationFilter(NotificationTypeFilters.URGENT))
    expect(res.filter).toBe("URGENT")
})