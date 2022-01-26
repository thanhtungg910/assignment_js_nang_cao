const Nav = {
    render() {
        return /* html */`
        <nav class="nav">
            <ul class="flex justify-center items-center gap-x-8">
               <li><a href="/#/">Trang chủ</a></li>
               <li><a href="/#/products">Sản phẩm</a></li>
               <li><a href="/#/blog">Blogs</a></li>
               <li><a href="#">Giới thiệu</a></li>
               <li><a href="/contact">Liên hệ</a></li>
               <li><a href="#">Chính sách</a></li>
            </ul>
     </nav>`;
    },
};
export default Nav;