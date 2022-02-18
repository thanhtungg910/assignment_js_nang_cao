import axios from "axios";

const instance = axios.create({
    baseURL: "https://zgup9d.sse.codesandbox.io",
    headers: {
        "Content-Type": "application/json",
    },
});
export default instance;
