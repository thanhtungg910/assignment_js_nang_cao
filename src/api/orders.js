import instance from "./instance";

const getOrders = () => {
    const url = `/orders`;
    return instance.get(url);
};
const addOrder = (payload) => {
    const url = `/orders`;
    return instance.post(url, payload);
};
const relationshipsOrdersDetails = (orderId = "") => {
    const url = `/orders/${orderId}?_embed=orders_details`;
    return instance.get(url);
};
export { getOrders, addOrder, relationshipsOrdersDetails };