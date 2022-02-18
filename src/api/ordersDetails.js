import instance from "./instance";

const getOrderDetails = () => {
    const url = `/orders_details`;
    return instance.get(url);
};
const addOrderDetails = (payload) => {
    const url = `/orders_details`;
    return instance.post(url, payload);
};
export { getOrderDetails, addOrderDetails };