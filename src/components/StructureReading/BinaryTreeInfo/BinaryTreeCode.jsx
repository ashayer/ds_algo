import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material/";
import CodeBlock from "../../CodeBlock/CodeBlock";
import HighlightLine from "../../HighlightLineText/HighlightLineText";

const BinaryTree1 = ({ hoveredLine }) => {
  const binaryTree = `class Node {
    public:
    int value;
    Node *left, *right;
};

Node* create(int value) {
    Node* newNode = new Node();
    newNode->value = value;
    newNode->left = newNode->right = NULL;
    return newNode;
}

Node* insert(Node* node, int value) {
    if (node == NULL) return create(value);
    if (value < node->value)
      node->left = insert(node->left, value);
    else
      node->right = insert(node->right, value);
    return node;
}`;
  return <CodeBlock hoveredLine={hoveredLine} code={binaryTree} />;
};

const BinaryTree2 = ({ hoveredLine }) => {
  const binaryTree = `Node* deleteNode(Node* root, int key) {
  if(root) 
      if(key < root->value) root->left = deleteNode(root->left, key);
      else if(key > root->value) root->right = deleteNode(root->right, key);
      else {
          if(!root->left && !root->right) return NULL;
          if (!root->left || !root->right)
              return root->left ? root->left : root->right;
          Node* temp = root->left;
          while(temp->right != NULL) temp = temp->right;
          root->value = temp->value;
          root->left = deleteNode(root->left, temp->value);
      }
  return root;
}

int main() {
    Node* root = NULL;
    root = insert(root, 8);
    root = insert(root, 3);
    root = insert(root, 1);
    root = insert(root, 6);
    root = deleteNode(root, 3);
    return 0;
}`;
  return <CodeBlock hoveredLine={hoveredLine} code={binaryTree} startingLineNumber={22} />;
};

const BinaryTreeCode = () => {
  const [hoveredLine, setHoveredLine] = useState([]);

  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BinaryTree1 hoveredLine={hoveredLine} />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BinaryTree2 hoveredLine={hoveredLine} />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Above is the code for an implementation of a BST and some basic operations. The node
            class on
            <HighlightLine lineNum={[1, 2, 3, 4, 5]} setHoveredLine={setHoveredLine} /> has the
            value and the two pointers to the left and right children. The create function on{" "}
            <HighlightLine lineNum={[7, 8, 9, 10, 11, 12]} setHoveredLine={setHoveredLine} /> simply
            initializes the current node to the value passed in and sets the children as NULL.
          </Typography>
          <Typography variant="h6" gutterBottom>
            For the insert function on{" "}
            <HighlightLine
              lineNum={[14, 15, 16, 17, 18, 19, 20, 21]}
              setHoveredLine={setHoveredLine}
            />{" "}
            there are 3 possible conditions. If the current node is null we can just insert the new
            node. Otherwise we need to traverse further down the tree. If the value of the node we
            want to insert is less than the current node we are at on the tree, we need to traverse
            down the left side. Else we go down the right.
          </Typography>
          <Typography variant="h6" gutterBottom>
            The delete function is a bit more involved since we need to maintain the BST structure.
            On
            <HighlightLine lineNum={[24]} setHoveredLine={setHoveredLine} /> and{" "}
            <HighlightLine lineNum={[25]} setHoveredLine={setHoveredLine} /> we are just traversing
            through the tree until we find the value we want to delete.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Once we find the node we want to delete there are three conditions to look out for.
          </Typography>
          <Typography variant="h6" gutterBottom>
            If that node has no children, meaning the left and right are NULL
            <HighlightLine lineNum={[27]} setHoveredLine={setHoveredLine} /> we can just remove that
            node.
          </Typography>
          <Typography variant="h6" gutterBottom>
            If that node only has one child that is null{" "}
            <HighlightLine lineNum={[28, 29]} setHoveredLine={setHoveredLine} />, we can replace the
            node we want to delete with the other child, that will bring all the nodes connected to
            that child with it as well.
          </Typography>
          <Typography variant="h6" gutterBottom>
            The final condition is that the node has both of its children. In that case that node
            needs to be replaced with either the largest node in its left tree or the smallest node
            in its right tree.{" "}
            <HighlightLine lineNum={[30, 31, 32, 33]} setHoveredLine={setHoveredLine} />
            In other words the largest value smaller than the node value or the smallest value
            larger than the node value.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BinaryTreeCode;
