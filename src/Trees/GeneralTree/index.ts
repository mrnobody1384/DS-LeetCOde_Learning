class TreeNode<Type> {
  value: Type;
  parent: TreeNode<Type> | null;
  children: TreeNode<Type>[];
  constructor(value: Type) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }
  addChild(value: Type): void {
    const newNode = new TreeNode(value);
    newNode.parent = this;
    this.children.push(newNode);
  }
}

class Tree<Type> {
  root: TreeNode<Type>;
  constructor(value: Type) {
    this.root = new TreeNode(value);
    return this;
  }
  public preorder(node: TreeNode<Type> = this.root): void {
    console.log(node.value);
    for (let n of node.children) {
      this.preorder(n);
    }
  }

  public postorder(node: TreeNode<Type> = this.root) {
    for (let n of node.children) {
      this.preorder(n);
    }
    console.log(node.value);
  }

  public inorder(node: TreeNode<Type> = this.root) {
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
