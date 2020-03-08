/**
 * @typedef {string|number} str
 */

/**
 * Must bind to target object before use
 * @param {(str|[str,str])[]} [fields] - array of str, [str,str] or combined.
 * @returns {[str,str][]} - entries of current keys to projected keys
 */
export const lookupKeys = function (fields) {
  const project = lookupKey.bind(this), currToProjPairs = []
  let currToProj
  iterate(fields, field => {
    if ((currToProj = project(field))) currToProjPairs.push(currToProj)
  })
  return currToProjPairs
}
/**
 *
 * @param {str|[*,*]} [field]
 * @returns {[str,number]}
 */
export const lookupKey = function (field) {
  if (!Array.isArray(field) && (field in this)) return [field, field]
  let [current, projected] = field
  return current in this ? [current, projected] : void 0
}
