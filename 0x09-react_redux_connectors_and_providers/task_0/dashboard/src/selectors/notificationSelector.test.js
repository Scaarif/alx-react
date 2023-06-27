import { fetchNotifications, markAsRead, setNotificationFilter } from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { notificationReducer } from "../reducers/notificationReducer";
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";

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

test('getNotifications selector returns all the fetched notifications', () => {
    // fetch notifications
    const res = notificationReducer(undefined, fetchNotifications(data))
    expect(getNotifications(res)).toEqual(res_state.notifications)
})

test('getUnreadNotifications returns only the unread notifications', () => {
    const res = notificationReducer(undefined, fetchNotifications(data))
    const res_1 = notificationReducer(res, markAsRead(1))
    expect(getUnreadNotifications(res_1).length).toBe(2)
})

test('filterTypeSelected returns the currently set state filter', () => {
    expect(filterTypeSelected(notificationReducer(undefined, {}))).toBe("DEFAULT")
    const res = notificationReducer(undefined, setNotificationFilter(NotificationTypeFilters.URGENT))
    expect(filterTypeSelected(res)).toBe("URGENT")
})