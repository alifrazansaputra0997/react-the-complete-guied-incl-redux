// the export and import func only work if you set module to the <script> code

// js file can only haev 1 default export, and it could be a varible or function
export default "this is default";

// this is how to export varibale
export const apikey = "12345";
export const apikey2 = "55555";

// this is how to import variable or func for another files
import { apikey, apikey2 } from './utils';

import * as util from './utils';

import { apikey as api1 } from './utils';