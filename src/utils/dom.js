const $ = (dom) => {
    const selector = document.querySelectorAll(dom);
    return selector.length === 1 ? selector[0] : selector;
};
export default $;