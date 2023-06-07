/* defines a function accepts an `object` as a parameter and converts it inyto an immutable Map using fromJS of Immutable.js */

const { fromJS } = require('immutable');
export default function getImmutableObject (obj) {
  // fromJS deeply converts plain JS objs and arrays to Immutable Maps and Lists
  return fromJS(obj);
}
