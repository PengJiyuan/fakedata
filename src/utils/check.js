// type check and throw error

import { isObject, isNumber } from './is';
const langs = ['zh', 'zh-hant', 'en'];
const sexs = ['male', 'female'];
const emailTypes = ['number', 'letter', 'name'];

export default (opts) => {
  if (opts && !isObject(opts)) {
    throw 'param option should be an object';
  }
  if (opts && opts.lang && !~langs.indexOf(opts.lang)) {
    throw `lang should be one of ${langs.join(',')}`;
  }
  if (opts && opts.sex && !~sexs.indexOf(opts.sex)) {
    throw `sex should be one of ${sexs.join(',')}`;
  }
  if (opts && opts.type && !~emailTypes.indexOf(opts.type)) {
    throw `type should be one of ${emailTypes.join(',')}`;
  }
  if (opts && opts.count && !isNumber(opts.count)) {
    throw 'count must be a number type';
  }
  if (opts && opts.length && !isNumber(opts.length)) {
    throw 'length must be a number type';
  }
};
