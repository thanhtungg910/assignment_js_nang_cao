const reRender = async (dom, component) => {
    if (component) {
        document.querySelector(dom).innerHTML = await component.render();
        if (component.afterRender) {
            component.afterRender();
        }
    }
};
export default reRender;