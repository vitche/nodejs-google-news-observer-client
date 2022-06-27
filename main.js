const fetch = require("isomorphic-fetch");

function Reference(serverUri) {
  return {
    event: function () {
      return {
        list: async function (kernelIdentifier, callback) {
          const uri = `${serverUri}/api/event/list?kernelIdentifier=${kernelIdentifier}`;
          const response = await fetch(uri);
          return await response.json();
        }
      }
    }
  };
}

Reference.groupByKey = function (list, key) {
  return list.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

module.exports = Reference;
