import instance from "./instance";

const getOrders = () => {
    const url = `/orders`;
    return instance.get(url);
};
const addOrder = (payload) => {
    const url = `/orders`;
    return instance.post(url, payload);
};
export { getOrders, addOrder };