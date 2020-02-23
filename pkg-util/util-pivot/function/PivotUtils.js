import { ACCUM, COUNT, PivotModes } from '../resources/PivotModes'
import { STR, FUN } from '@typen/enums'

export function Nullifier (mode) {
  return !mode ? () => [] : () => 0
}

export function pivotMode (stat) {
  switch (typeof stat) {
    case STR:
      return PivotModes[stat] || COUNT
    case FUN:
      return ACCUM
  }
}

