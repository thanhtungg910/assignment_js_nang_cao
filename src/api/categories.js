import instance from "./instance";

const getAll = () => {
    const url = "/categories";
    return instance.get(url);
};
const getCategories = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};
const addCategories = (data) => {
    const url = `/categories`;
    return instance.get(url, data);
};

export { getAll, getCategories, addCategories };