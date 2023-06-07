import { fromJS } from 'immutable'

export default function accessImmutableObject(object, array){
    const obj = fromJS(object)
    // console.log(obj.get(array[0]).get(array[1]))
    return(obj.get(array[0]).get(array[1]))
}