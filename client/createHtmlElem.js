export default function createHtmlElem({ node, attrs } = {}) {
  const elem = document.createElement(node);

  Object.keys(attrs).forEach(attr => {
    elem.setAttribute(attr, attrs[attr]);
  });

  return elem;
};