/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Creates a drafter for Double
 * @param {object} value the double
 * @returns {string} the text
 */
function doubleIEEEDrafter(value) {
    if (Math.floor(value) == value) return (new Number(value)).toFixed(1); // Make sure there is always decimal point
    else return '' + value;
}

/**
 * Creates a drafter for a double
 * @param {object} value the DateTime
 * @returns {string} the text
 */
function doubleDrafter(v,format) {
    if (format) {
        return format.replace(/0(.)0((.)(0+))?/gi, function(_a,sep1,_b,sep2,digits){
            const len = digits ? digits.length : 0;
            const vs = v.toFixed(len);
            let res = '';
            if (sep2) {
                const d = vs.substring(vs.length - len);
                res += sep2 + d;
            }
            let i = vs.substring(0,vs.length - (len === 0 ? 0 : len+1));
            while (i.length > 3) {
                res = sep1 + i.substring(i.length - 3) + res;
                i = i.substring(0, i.length - 3);
            }
            return i + res;
        });
    } else {
        return doubleIEEEDrafter(v);
    }
}

module.exports = doubleDrafter;