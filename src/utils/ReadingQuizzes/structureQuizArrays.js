export const queueGeneralQuiz = [
  {
    question: "Which of the following is NOT true about Queues?",
    type: 0,
    options: [
      { answer: "All methods have a constant run time", correct: true },
      { answer: "The only two pointers are to the front and end of the queue", correct: false },
      { answer: "You can only add elements to end of the queue", correct: false },
      { answer: "You can only remove elements to the front of the queue", correct: false },
    ],
  },
  {
    question: "Why is a queue data structure abstract?",
    type: 0,
    options: [
      { answer: "It only a reference to the behavior of a queue model", correct: true },
      { answer: "An array can only be accessed from two indexes", correct: false },
      { answer: "All data structures are abstract", correct: false },
      { answer: "Its just an idea", correct: false },
    ],
  },
  {
    question: "The most recent element to be inserted will be the last element to be removed.",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Check all that apply to Queues",
    type: 1,
    options: [
      { answer: "Follow a LIFO order", correct: false },
      { answer: "Adding/Deleting an element takes constant time", correct: true },
      { answer: "Any index can be accessed using the queue methods", correct: false },
      { answer: "You can add an element to the middle in-place", correct: false },
    ],
  },
];

export const queueCodeQuiz = [
  {
    question: "What are the values of the front and tail index in an empty queue?",
    type: 0,
    options: [
      { answer: "Front = 0 Tail = 0", correct: false },
      { answer: "Front = -1 Tail = -1", correct: true },
      { answer: "Front = null Tail = null", correct: false },
      { answer: "Front = 0 Tail = -1", correct: false },
    ],
  },
  {
    question:
      "What would the peak method return after the following operations and initial Queue? [7,3,1,8,4] Dequeue() Enqueue(9) Dequeue() Enqueue(3)",
    type: 0,
    options: [
      { answer: "1", correct: true },
      { answer: "3", correct: false },
      { answer: "8", correct: false },
      { answer: "9", correct: false },
    ],
  },
  {
    question: "In a queue of size 8, the front index is at 1 and the rear index is at 8",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "What conditions imply the queue is empty?",
    type: 1,
    options: [
      { answer: "Front index = rear index", correct: false },
      { answer: "Front index < 0", correct: true },
      { answer: "Front index = 0", correct: false },
      { answer: "Rear index = 0", correct: false },
    ],
  },
];

export const stackGeneralQuiz = [
  {
    question: "Which of the following is true about Stacks?",
    type: 0,
    options: [
      { answer: "All methods have a constant run time", correct: false },
      { answer: "You have access to the first element pushed", correct: false },
      { answer: "You can only add elements to the top", correct: true },
      { answer: "The bottommost element can be removed at anytime", correct: false },
    ],
  },
  {
    question: "What does adding too many elements cause?",
    type: 0,
    options: [
      { answer: "Memory Leak", correct: false },
      { answer: "Program Crash", correct: false },
      { answer: "Nothing", correct: false },
      { answer: "Stack Overflow", correct: true },
    ],
  },
  {
    question: "The most recent element to be inserted will be the last element to be removed.",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "Check all that apply to Stacks",
    type: 1,
    options: [
      { answer: "Follows a FIFO order", correct: false },
      { answer: "You can add an element to the middle in-place", correct: false },
      { answer: "Has index to all elements", correct: false },
      { answer: "A top index value of -1 means the stack is empty", correct: true },
    ],
  },
];

export const stackCodeQuiz = [
  {
    question: "What are the values of the top index in a full stack?",
    type: 0,
    options: [
      { answer: "Top = -1", correct: false },
      { answer: "Top = 0", correct: false },
      { answer: "Top = number of elements", correct: false },
      { answer: "Top = number of elements - 1", correct: true },
    ],
  },
  {
    question:
      "What would the top element be after the following operations and initial Stack? [7,3,1] Pop() Pop() Push(1) Pop() Push(2) Pop()",
    type: 0,
    options: [
      { answer: "2", correct: false },
      { answer: "3", correct: false },
      { answer: "1", correct: false },
      { answer: "7", correct: true },
    ],
  },
  {
    question: "In a stack of size 11, the top index would have a value of 10",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Which set of operations cause a stack overflow on an empty stack of size 3",
    type: 1,
    options: [
      { answer: "Push() Push(1) Pop() Push(6) Pop() Push(5) Pop()", correct: false },
      { answer: "Pop() Pop() Push(9) Push(4) Push(0) Pop()", correct: false },
      { answer: "Pop() Push(8) Push(6) Pop() Push(2) Push(4) Push(1) Pop()", correct: true },
      { answer: "Pop() Push(3) Push(4) Pop() Pop() Push(2)", correct: false },
    ],
  },
];

export const linkedListGeneralQuiz = [
  {
    question: "In order to delete a node in a SLL you need what?",
    type: 0,
    options: [
      { answer: "The pointer to the node you want to delete", correct: false },
      { answer: "Value of the node", correct: false },
      { answer: "Value of the node and the pointer to the node", correct: false },
      {
        answer: "The value and pointers of the prev node and the node itself",
        correct: true,
      },
    ],
  },
  {
    question: "Why is pointing to NULL important?",
    type: 0,
    options: [
      { answer: "It determines the start of the list", correct: false },
      { answer: "It indicates the beginning or starting node", correct: true },
      { answer: "You can only insert into a NULL value", correct: false },
      { answer: "Its not", correct: false },
    ],
  },
  {
    question: "You can traverse backwards in a Singly-Linked-List",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "Check all that apply to Linked Lists",
    type: 1,
    options: [
      { answer: "Can immediately access any node in the list", correct: false },
      { answer: "Deleting is constant time if you know the pointer of the node", correct: true },
      { answer: "You have to reconnect all the nodes when you delete", correct: false },
      { answer: "Search is faster than in an array", correct: false },
    ],
  },
];

export const linkedListCodeQuiz = [
  {
    question: "What is the output of the C++ code using the code in the section? std::cout << one;",
    type: 0,
    options: [
      { answer: "1", correct: false },
      { answer: "NULL", correct: false },
      { answer: "The address of the node", correct: true },
      { answer: "one", correct: false },
    ],
  },
  {
    question: "Which of the following are true?",
    type: 1,
    options: [
      { answer: "You only need the pointer of the node to delete in a DLL", correct: true },
      { answer: "You can traverse backwards in a CLL", correct: true },
      { answer: "A CLL is more efficient than a DLL", correct: false },
      { answer: "A node in a DLL has 3 pieces of information", correct: true },
    ],
  },
  {
    question: "The first node is indicated by what?",
    type: 0,
    options: [
      { answer: "A prev pointer to NULL", correct: false },
      { answer: "The smallest value in the list", correct: false },
      { answer: "A next pointer of NULL", correct: false },
      { answer: "A value of 0", correct: true },
    ],
  },
  {
    question: "A circular linked list requires 3 pointers",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
];

export const binaryTreeGeneralQuiz = [
  {
    question: "Which of the following indicate a leaf node?",
    type: 0,
    options: [
      { answer: "Two null children", correct: true },
      { answer: "One null child", correct: false },
      { answer: "Smallest value in the tree", correct: false },
      { answer: "Value of 0", correct: false },
    ],
  },
  {
    question: "Which of the following is true about a BST",
    type: 0,
    options: [
      { answer: "The left child of a node will always be smaller", correct: true },
      { answer: "The root value is the median value of all nodes", correct: false },
      { answer: "The children of a node can NOT be null", correct: false },
      { answer: "Constant time to delete the root node", correct: false },
    ],
  },
  {
    question: "The root node is the smallest value in a BST",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "Which of the following are false?",
    type: 1,
    options: [
      { answer: "Searching in a BST is slower than a linked list", correct: true },
      { answer: "Searching and deleting a node takes the same time", correct: false },
      { answer: "Duplicates are allowed in a BST", correct: false },
      { answer: "Takes O(n) to delete the furthest down node", correct: false },
    ],
  },
];

export const binaryTreeCodeQuiz = [
  {
    question: "If the node you are searching for is greater than the root",
    type: 0,
    options: [
      { answer: "Traverse left", correct: false },
      { answer: "Return the node", correct: false },
      { answer: "Traverse right", correct: true },
      { answer: "The node does not exist", correct: false },
    ],
  },
  {
    question: "What conditions need to be accounted for when deleting",
    type: 1,
    options: [
      { answer: "No children", correct: true },
      { answer: "1 NULL child", correct: true },
      { answer: "2 Children", correct: true },
      { answer: "Negative value", correct: false },
    ],
  },
  {
    question: "When deleting a node with two children",
    type: 0,
    options: [
      { answer: "It can be replaced by the right child", correct: false },
      { answer: "It can be replaced by the left child", correct: false },
      { answer: "It can be replaced by the leftmost child in the right subtree", correct: true },
      { answer: "It cannot be deleted", correct: false },
    ],
  },
  {
    question: "A new nodes children are initialized to NULL",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
];
