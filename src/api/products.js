import instance from "./instance";

const getAllProduct = () => {
    const url = "/products";
    return instance.get(url);
};
const getProduct = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
const addProduct = (data) => {
    const url = "/products";
    return instance.post(url, data);
};
const editProduct = (id, data) => {
    const url = `/products/${id}`;
    return instance.patch(url, data);
};
const deleteProduct = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
const limitPageProduct = (min, max) => {
    const url = `/products?_page=${min}&_limit=${max}`;
    return instance.get(url);
};
const searchProduct = (internet) => {
    const url = internet ? `/products?q=${internet}` : `/products?_page=${1}&_limit=${3}`;
    return instance.get(url);
};
const limitPageProducts = (inter) => {
    const url = `/products${inter}`;
    return instance.get(url);
};
export {
    getAllProduct, getProduct, addProduct,
    editProduct, deleteProduct, limitPageProduct,
    searchProduct, limitPageProducts,
};