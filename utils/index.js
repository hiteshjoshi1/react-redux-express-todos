
var stringifyError = function(err, filter, space) {
    var plainObject = {};
    Object.getOwnPropertyNames(err).forEach(function(key) {
      plainObject[key] = err[key];
    });
    return JSON.stringify(plainObject, filter, space);
  }

  module.exports = {
    errorStringify: stringifyError
   }
   