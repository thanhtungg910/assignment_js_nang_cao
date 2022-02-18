import instance from "./instance";

const getContacts = () => {
    const url = `/contacts`;
    return instance.get(url);
};
const addContacts = (data) => {
    const url = `/contacts`;
    return instance.post(url, data);
};
export {
    getContacts,
    addContacts,
};