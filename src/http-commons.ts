import axios from "axios";

export default axios.create({
    baseURL: "http://ocp-demo-backend-ocp-demo-dev.apps.syv0q7h2.westeurope.aroapp.io/api",
    headers: {
        "Content-type": "application/json"
    }
});