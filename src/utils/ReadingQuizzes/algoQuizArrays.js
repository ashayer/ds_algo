export const insertionGeneralQuiz = [
  {
    question: "Which of the following is NOT true about Insertion Sort",
    type: 0,
    options: [
      { answer: "Has an average time complexity of n\u00B2", correct: false },
      { answer: "Stable and in-place", correct: false },
      { answer: "Best case of n", correct: false },
      { answer: "Efficient on all datasets", correct: true },
    ],
  },
  {
    question:
      "What would be the result of sorting the tuples by their letter? " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Insertion Sort is in-place but Unstable",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "Check all that apply to Insertion Sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Efficient on small datasets", correct: true },
      { answer: "Sorts in-place", correct: true },
      { answer: "Will maintain the order of the original list", correct: true },
    ],
  },
];

export const insertionCodeQuiz = [
  {
    question: "Which of the following is true about Insertion Sort?",
    type: 0,
    options: [
      { answer: "The elements to the left of the ith iterator are sorted", correct: true },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: false },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop?",
    type: 1,
    options: [
      { answer: "J reaches the first element", correct: true },
      { answer: "J becomes 0", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "The value at j-1 is less than or equal to the value at j", correct: true },
    ],
  },
  {
    question: "What is the equivalent WHILE loop for the inner loop?",
    type: 0,
    options: [
      { answer: "while(j > 0)", correct: false },
      { answer: "while(j > 1)", correct: false },
      { answer: "while(j < i)", correct: false },
      { answer: "while(j > -1)", correct: true },
    ],
  },
  {
    question: "The ith and jth values are swapped in the algorithm.",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
];

export const selectionGeneralQuiz = [
  {
    question:
      "What would be the output of Selection sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Selection Sort is in-place but unstable",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Check all that apply to Selection Sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Has a space complexity of O(n\u00B2)", correct: false },
      { answer: "More efficient that Insertion Sort", correct: false },
      { answer: "Will maintain the order of the original list", correct: false },
    ],
  },
  {
    question: "Which of the following is true about Selection Sort",
    type: 0,
    options: [
      { answer: "Has a best case of n\u00B2", correct: true },
      { answer: "Has a best case of n", correct: false },
      { answer: "Is stable and in-place", correct: false },
      { answer: "Swaps the ith and jth indexes", correct: false },
    ],
  },
];

export const selectionCodeQuiz = [
  {
    question: "Which of the following is true about Selection Sort?",
    type: 0,
    options: [
      { answer: "The elements to the right of the ith iterator are untouched", correct: false },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: true },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop?",
    type: 1,
    options: [
      { answer: "J reaches the last element", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "J finds the minimum element", correct: false },
      { answer: "J becomes 0", correct: false },
    ],
  },
  {
    question: "Each swap moves an element into its final position.",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "The ith and jth elements are swapped.",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
];

export const mergeGeneralQuiz = [
  {
    question:
      "What would be the output of Merge sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },

  {
    question: "Merge Sort splits the list into two halves",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Which of the following is true about Merge Sort?",
    type: 0,
    options: [
      {
        answer: "Its space complexity is constant",
        correct: false,
      },
      { answer: "Has a worst time complexity of n\u00B2", correct: false },
      { answer: "It is stable but out-of-place", correct: true },
      { answer: "Its worst case is slower than its best case", correct: false },
    ],
  },
  {
    question: "Check all that apply to Merge sort",
    type: 1,
    options: [
      { answer: "Will maintain the order of the original list", correct: true },
      { answer: "Quadratic", correct: false },
      { answer: "Requires extra space proportional to size of the list", correct: true },
      { answer: "Utilizes divide and conquer", correct: true },
    ],
  },
];

export const mergeCodeQuiz = [
  {
    question: "What condition stops the recursive calls?",
    type: 0,
    options: [
      { answer: "The right index is less than or equal to the left index", correct: true },
      { answer: "The left index is less than the middle index", correct: false },
      { answer: "The left index is less than the right index", correct: false },
      { answer: "The right index is greater than the middle index", correct: false },
    ],
  },
  {
    question: "What are the parameters passed into the MERGE function?",
    type: 1,
    options: [
      { answer: "An array", correct: true },
      { answer: "A left index", correct: true },
      { answer: "A right index", correct: true },
      { answer: "A middle index ", correct: true },
    ],
  },
  {
    question: "In the MERGE function what is i and j initialized to.",
    type: 0,
    options: [
      { answer: "i = 0 j = right index,", correct: false },
      { answer: "i = left j = middle", correct: false },
      { answer: "i = left + 1 j = middle", correct: false },
      { answer: "i = left j = middle + 1", correct: true },
    ],
  },
  {
    question: "The created temp array is updated with values from the parameter array",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
];

export const quickGeneralQuiz = [
  {
    question: "What is generally the best pivot choice?",
    type: 0,
    options: [
      { answer: "The middle index", correct: false },
      { answer: "The average value of first, middle, and last index", correct: false },
      { answer: "The left most index", correct: true },
      { answer: "The median of the first, middle, and last index", correct: false },
    ],
  },
  {
    question: "Which best describes the function of the pivot?",
    type: 0,
    options: [
      { answer: "To split the list into equal halves", correct: false },
      { answer: "To separate elements by their value compared to the pivot", correct: true },
      { answer: "To find the smallest value in the list", correct: false },
      { answer: "To act as a pointer to swap elements", correct: false },
    ],
  },
  {
    question: "Quick Sort breaks down each element into its own sub-list",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "With the leftmost as the pivot, which list would give the worst case performance?",
    type: 1,
    options: [
      { answer: "[1,1,1,1,1]", correct: true },
      { answer: "[5,4,3,2,1]", correct: true },
      { answer: "[1,2,3,4,5]", correct: true },
      { answer: "[2,1,4,5,3]", correct: false },
    ],
  },
];

export const quickCodeQuiz = [
  {
    question: "What does the partition function return?",
    type: 0,
    options: [
      { answer: "The sorted array", correct: false },
      { answer: "The next pivot index", correct: true },
      { answer: "One half the passed in array", correct: false },
      { answer: "A sorted array", correct: false },
    ],
  },
  {
    question: "How is the pivot index found in the partition function?",
    type: 1,
    options: [
      {
        answer: "Index where smaller values are on the left and bigger on the right",
        correct: true,
      },
      { answer: "The index in the middle of the array", correct: true },
      { answer: "The smallest value in the array", correct: false },
      { answer: "The largest value in the array", correct: true },
    ],
  },
  {
    question: "What is the state of the array after the first partition loop. [3,1,2,4]",
    type: 0,
    options: [
      { answer: "[2,1,4,3]", correct: false },
      { answer: "[1,2,4,3]", correct: false },
      { answer: "[2,1,3,4]", correct: true },
      { answer: "[1,2,3,4]", correct: false },
    ],
  },
  {
    question: "The pivotIndex is swapped with the leftmost index",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
];
