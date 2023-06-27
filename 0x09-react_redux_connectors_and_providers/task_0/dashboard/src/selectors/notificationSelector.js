export const filterTypeSelected = (state) => state.filter

export const getNotifications = (state) => state.notifications

export const getUnreadNotifications = (state) => state.notifications.filter((item) => item.isRead === false)