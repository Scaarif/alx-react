import { SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes"
import { FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes"

export const initialState = []
export const courseReducer = (state=initialState, action) => {
    // appropriately update (handle action) state
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map((course) => {
                course['isSelected'] = false
                return course
            })
        case SELECT_COURSE:
            return state.map((course) => {
                if (action.index === course.id)
                    course.isSelected = true
                return course
            })
        case UNSELECT_COURSE:
            return state.map((course) => {
                if (action.index === course.id)
                    course.isSelected = false
                return course
            })
        default:
            break
    }
    return state
}