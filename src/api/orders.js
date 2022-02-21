import instance from "./instance";

const getOrders = () => {
    const url = `/orders`;
    return instance.get(url);
};
const addOrder = (payload) => {
    const url = `/orders`;
    return instance.post(url, payload);
};
const updateOrder = (payload) => {
    const url = `/orders/${payload.id}`;
    return instance.patch(url, payload);
};
const getOrder = (id) => {
    const url = `/orders/${id}`;
    return instance.get(url);
};
const relationshipsOrdersDetails = (orderId = "") => {
    const url = `/orders/${orderId}?_embed=orders_details`;
    return instance.get(url);
};
export {
    getOrders, addOrder, relationshipsOrdersDetails, getOrder, updateOrder,
};