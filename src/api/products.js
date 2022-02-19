import instance from "./instance";

const getAllProduct = () => {
    const url = "/products";
    return instance.get(url);
};
const getSortProducts = (order = "asc") => {
    const url = `/products?_sort=created_at&_order=${order}`;
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
const limitPageProduct = (min, max) => {
    const url = `/products?_page=${min}&_limit=${max}`;
    return instance.get(url);
};
const searchProduct = (internet) => {
    const url = internet ? `/products?title_like=${internet}` : `/products?_page=${1}&_limit=${3}`;
    return instance.get(url);
};
const limitPageProducts = (inter) => {
    const url = `/products${inter}`;
    return instance.get(url);
};
const relationshipsProductOrder = (productId) => {
    const url = `/products/${productId}?_embed=orders_details`;
    return instance.get(url);
};
const productsEmbedOrders = (id) => {
    const url = `/products/${id}?_embed=orders_details`;
    return instance.get(url);
};
const getOperatorsPrice = (gte, lte) => {
    const url = `/products?price_gte=${gte}$price_lte=${lte}`;
    return instance.get(url);
};
export {
    getAllProduct, getProduct, addProduct,
    editProduct, deleteProduct, limitPageProduct,
    searchProduct, limitPageProducts,
    relationshipsProductOrder, productsEmbedOrders,
    getOperatorsPrice, getSortProducts,
};