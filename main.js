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

module.exports = Reference;
