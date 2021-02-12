/**
|--------------------------------------------------
| Function, turns an Object into Query String Parameters
| @param {Object} parameters object
|--------------------------------------------------
*/
export default function ObjectToQueryString(paramsObject) {
  return Object.entries(paramsObject)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
