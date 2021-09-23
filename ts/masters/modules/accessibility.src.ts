/**
 * @license Highcharts JS v@product.version@ (@product.date@)
 * @module highcharts/modules/accessibility
 * @requires highcharts
 *
 * Accessibility module
 *
 * (c) 2010-2021 Highsoft AS
 * Author: Oystein Moseng
 *
 * License: www.highcharts.com/license
 */

'use strict';

import Highcharts from '../../Core/Globals.js';
import Accessibility from '../../Accessibility/Accessibility.js';

const G: AnyRecord = Highcharts;
G.i18nFormat = Accessibility.i18nFormat;

Accessibility.compose(G.Chart);
