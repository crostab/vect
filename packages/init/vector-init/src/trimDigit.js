import { round } from '@aryth/math'

function trimDigit (n) { return round(n * this.m) / this.m }

/**
 *
 * @param {number} d - digits
 * @returns {function(number):number}
 * @constructor
 */
export const TrimDigit = d => {
  return (d = ~~d)
    ? trimDigit.bind({ m: 10 ** ~~d })
    : round
}
