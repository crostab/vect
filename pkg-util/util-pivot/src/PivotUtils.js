import { PivotModes } from './PivotModes'

export class PivotUtils {
  static nullifierLauncher (mode) {
    return !mode ? () => [] : () => 0
  }

  static pivotMode (stat) {
    switch (typeof stat) {
      case 'string':
        return PivotModes[stat] || PivotModes.count
      case 'function':
        return PivotModes.array
    }
  }
}
