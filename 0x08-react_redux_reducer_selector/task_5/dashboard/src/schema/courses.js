import { normalize, schema } from "normalizr";

const course = new schema.Entity("courses")
export const coursesNormalizer = (data) => {
    return normalize(data, [course]) // i.e. return a list of courses
}