import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key:"258d13d2735f4204ac7413c99f5b48ab"}
});