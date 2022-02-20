import instance from "./instance";

const signup = (user) => {
    const url = `/register`;
    return instance.post(url, user);
};
const signin = (user) => {
    const url = `/signin`;
    return instance.post(url, user);
};
const getUsers = () => {
    const url = `/users`;
    return instance.get(url);
};
const getUserApi = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
const updateUser = (data) => {
    const url = `/users/${data.id}`;
    return instance.patch(url, data);
};
const deleteUser = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};
const getUser = () => JSON.parse(localStorage.getItem("user"));
export {
    signin, signup, getUsers, deleteUser, getUser, getUserApi, updateUser,
};