import { fromJS } from 'immutable';

export default function getImmutableObject (object) {
  // fromJS deeply converts plain JS objs and arrays to Immutable Maps and Lists
  return fromJS(object);
}
