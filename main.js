class Reference {

    Reference(serverUri) {
        this.serverUri = serverUri;
    }

    event() {
        return {
            list: function (kernelIdentifier) {

            }
        }
    }
}

export default Reference;
