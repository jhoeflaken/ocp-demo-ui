import http from '../http-commons'

const throwError = () => {
    return http.post("/v1/actions", {}, {
        params: {
            action: "throwError"
        }
    })
}

const crashApplication = () => {
    return http.post("/v1/actions", {}, {
        params: {
            action: "crashApplication"
        }
    })
}

const initialize = () => {
    return http.post("/v1/actions", {}, {
        params: {
            action: "initialize"
        }
    })
}

const ActionService = {
    throwError,
    crashApplication,
    initialize
}

export default ActionService;