import fetch from "node-fetch";

class Reference {

    __serverUri;

    constructor(serverUri) {
        this.__serverUri = serverUri;
    }

    event() {
        const self = this;
        return {
            list: async function (kernelIdentifier, callback) {
                const uri = `${self.__serverUri}/api/event/list?kernelIdentifier=${kernelIdentifier}`;
                const response = await fetch(uri);
                return await response.json();
            }
        }
    }
}

export default Reference;
