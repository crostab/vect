import { deco, logger } from '@spare/logger'
import { transpose }    from '../src/algebra.js'

const glyphToLayerToMetrics = {
  A: { Lt: { l: 10, r: 10 }, Rg: { l: 8, r: 8 }, Bd: { l: 6, r: 6 } },
  B: { Lt: { l: 36, r: 12 }, Rg: { l: 32, r: 10 }, Bd: { l: 30, r: 8 } },
  C: { Lt: { l: 12, r: 12 }, Rg: { l: 10, r: 10 }, Bd: { l: 8, r: 8 } },
  D: { Lt: { l: 36, r: 12 }, Rg: { l: 32, r: 10 }, Bd: { l: 30, r: 8 } },
  E: { Lt: { l: 36, r: 12 }, Rg: { l: 32, r: 10 }, Bd: { l: 30, r: 8 } },
  F: { Lt: { l: 36, r: 12 }, Rg: { l: 32, r: 10 }, Bd: { l: 30, r: 8 } },
}

glyphToLayerToMetrics  |> deco  |> logger
glyphToLayerToMetrics  |> transpose  |> deco  |> logger