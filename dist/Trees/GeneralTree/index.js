"use strict";
class TreeNode {
    value;
    parent;
    children;
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
    }
    addChild(value) {
        const newNode = new TreeNode(value);
        newNode.parent = this;
        this.children.push(newNode);
    }
}
class Tree {
    root;
    constructor(value) {
        this.root = new TreeNode(value);
        return this;
    }
    preorder(node = this.root) {
        console.log(node.value);
        for (let n of node.children) {
            this.preorder(n);
        }
    }
    postorder(node = this.root) {
        for (let n of node.children) {
            this.preorder(n);
        }
        console.log(node.value);
    }
    inorder(node = this.root) {
        console.log(node.children[0]?.value);
        console.log(node.value);
        console.log(node.children[1]?.value);
        for (let n of node.children) {
            this.inorder(n);
        }
    }
}
const tree = new Tree("Ali");
tree.root.addChild("hassan");
tree.root.addChild("hossein");
tree.root.children[0].addChild("abbdollah");
tree.inorder();
//# sourceMappingURL=index.js.map