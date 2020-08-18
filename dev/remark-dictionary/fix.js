// const visit = require("unist-util-visit");
const visit = require("unist-util-visit-parents");

module.exports = () => (tree, file) => {
  visit(tree, "HTML", (node, ancestors) => {

    if (node.value.indexOf('&#x3C;') > -1) {
      // Grab the innerText of the heading node
      node.value = node.value.replace(/&#x3C;/gi, '<');
    }
  });

  return tree;
}