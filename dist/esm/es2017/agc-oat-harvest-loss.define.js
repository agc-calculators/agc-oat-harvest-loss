
// AgcOatHarvestLoss: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './agc-oat-harvest-loss.core.js';
import {
  AgcOatHarvestLoss,
  AgcOatHarvestLossInputs,
  AgcOatHarvestLossProgress,
  AgcOatHarvestLossResults,
  AgcOatHarvestLossResultsPlaceholder
} from './agc-oat-harvest-loss.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcOatHarvestLoss,
    AgcOatHarvestLossInputs,
    AgcOatHarvestLossProgress,
    AgcOatHarvestLossResults,
    AgcOatHarvestLossResultsPlaceholder
  ], opts);
}
