import instance from "./instance";

const getBlogs = () => {
    const url = `/blogs`;
    return instance.get(url);
};
const getBlog = (id) => {
    const url = `/blogs/${id}`;
    return instance.get(url);
};
const addBlog = (data) => {
    const url = `/blogs`;
    return instance.post(url, data);
};
const editBlog = (data, id) => {
    const url = `/blogs/${id}`;
    return instance.put(url, data);
};
const limitBlog = (min, max) => {
    const url = `/blogs?_page=${min}&_limit=${max}`;
    return instance.get(url);
};
export {
    getBlogs,
    getBlog,
    addBlog,
    editBlog,
    limitBlog,
};