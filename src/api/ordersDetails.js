import instance from "./instance";

const getOrderDetails = () => {
    const url = `/orders_details`;
    return instance.get(url);
};
const getOrderDetailsWithOrder = (orderId) => {
    const url = `/orders_details/?orderId=${orderId}`;
    return instance.get(url);
};
const addOrderDetails = (payload) => {
    const url = `/orders_details`;
    return instance.post(url, payload);
};
const getOrdersDetailsOrderId = (orderId) => {
    const url = `/orders_details?orderId=${orderId}`;
    return instance.get(url);
};
export {
    getOrderDetails, addOrderDetails, getOrdersDetailsOrderId, getOrderDetailsWithOrder,
};