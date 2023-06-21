import { courseReducer } from "./courseReducer";
import { fetchCourses, selectCourse, unSelectCourse } from "../actions/courseActionCreators";

const data = [  
    {
        id: 1,
        name: "ES6",
        credit: 60
    },
    {
        id: 2,
        name: "Webpack",
        credit: 20
    },
    {
        id: 3,
        name: "React",
        credit: 40
    }
]
const res = [
    {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
    },
    {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
    },
    {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
    }
   ]

test('courseReducer returns an empty array by default (no action passed)', () => {
    expect(courseReducer(undefined, {})).toEqual([])
})

test('courseReducer appends `isSelected` property to each course in list if action is `FETCH_COURSE_SUCCESS`', () => {
    const the_res = courseReducer(undefined, fetchCourses(data))
    // console.log(the_res)
    expect(the_res).toEqual(res)
})


test('courseReducer correctly updates `isSelected` property (to true) with action `SELECT_COURSE`', () => {
    const the_res = courseReducer(undefined, fetchCourses(data))
    const updated = courseReducer(the_res, selectCourse(1))
    expect(updated[0].isSelected).toBe(true)
    
})

test('courseReducer correctly updates `isSelected` property (to false) with action `UNSELECT_COURSE`', () => {
    const the_res = courseReducer(undefined, fetchCourses(data))
    let updated = courseReducer(the_res, selectCourse(1))
    expect(updated[0].isSelected).toBe(true)
    updated = courseReducer(the_res, unSelectCourse(1))
    expect(updated[0].isSelected).toBe(false)
})