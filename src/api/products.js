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
    return instance.put(url, data);
};
const deleteProduct = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export {
    getAllProduct, getProduct, addProduct, editProduct, deleteProduct,
};