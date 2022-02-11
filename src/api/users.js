import instance from "./instance";

const signup = (user) => {
    const url = `/register`;
    return instance.post(url, user);
};
const signin = (user) => {
    const url = `/signin`;
    return instance.post(url, user);
};
export { signin, signup };