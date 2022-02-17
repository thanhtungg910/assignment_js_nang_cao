import { getBlogs } from "../api/blogs";

const blogs = {
    async render() {
        const { data } = await getBlogs();
        return /* html */ `${data.map((item) => `<div class="article-card-right"> 
        <img class="article-image" src="${item.thumbnail}" alt="">
        <h2 class="article-title text-gray-900 font-serif text-xl my-5 font-thin"><a href="/#/blogs/${item.id}">${item.title}</a></h2>
        <p class="article-body">Far far away, behind the word mountains, far from the countries...
        </p>
        <a href="/#/blogs/${item.id}" class="readmore">Read More...</a> 
  </div>`).join("")}`;
    },
};
export default blogs;