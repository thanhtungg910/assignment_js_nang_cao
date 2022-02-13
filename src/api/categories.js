import instance from "./instance";

const getAll = () => {
    const url = "/productCates";
    return instance.get(url);
};
const getCategories = (id) => {
    const url = `/productCates/${id}`;
    return instance.get(url);
};
const addCategories = (data) => {
    const url = `/productCates`;
    return instance.post(url, data);
};
const deleteCate = (id) => {
    const url = `/productCates/${id}`;
    return instance.delete(url);
};
const getRelationships = (url) => instance.get(url);

export {
    getAll, getCategories, addCategories, getRelationships, deleteCate,
};