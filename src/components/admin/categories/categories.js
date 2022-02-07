import { getAll } from "../../../api/categories";

const Categories = {
    async render() {
        const { data } = await getAll();
        console.log(data);
    },
};
export default Categories;