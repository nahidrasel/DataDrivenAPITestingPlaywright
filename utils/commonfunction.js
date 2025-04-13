import { expect} from "@playwright/test";

/**
* String Formatter..
* Replaces {0}, {1}, etc. in the string with corresponding arguments. 
* @param {string} str - The String needs to be formatted.
* @param {...any} args - The value that need to be formatted.
*/
export const stringFormat = (str, ...args) =>
   str.replace(/{(\d+)}/g, (match, index) => args?.[index] ?? match);