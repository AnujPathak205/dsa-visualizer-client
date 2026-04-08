export const stackData = {
  title: "Stack",

  description: "A linear data structure that follows LIFO principle.",

  explanation: `
Stack follows LIFO (Last In First Out).
The last element added is removed first.

Think of a stack of plates:
You place a plate on top and remove from top.
  `,

  operations: [
    {
      name: "Push",
      description: "Add element to top of stack"
    },
    {
      name: "Pop",
      description: "Remove element from top"
    },
    {
      name: "Peek",
      description: "View top element without removing"
    }
  ],

  complexity: [
    {
      opName:"push",
      TC:"O(1)"
    },
    {
      opName:"pop",
      TC:"O(1)"
    },
    {
      opName:"peek",
      TC:"O(1)"
    },
    {
      opName:"space",
      TC:"O(n)"
    }
  ]
,
  code: {
    basic:{
    java:`
// Java Stack Example
import java.util.Stack;

Stack<Integer> stack = new Stack<>();

stack.push(10);
stack.push(20);

System.out.println(stack.pop()); // 20
System.out.println(stack.peek()); // 10
    `,
  cpp:`
#include <iostream>
using namespace std;

class Stack {
  int arr[100];
  int top = -1;

public:
  void push(int x) {
    arr[++top] = x;
  }
};
  `,
  python:`
class Stack:
  def __init__(self):
      self.stack = []

  def push(self, x):
      self.stack.append(x)
  `
  }
},

  realLifeExample: `  
Stack of plates in a kitchen.
Last plate placed is the first one removed.
  `,

  questions: [
    {
      question: "What principle does stack follow?",
      answer: "LIFO (Last In First Out)"
    },
    {
      question: "Which operation removes element?",
      answer: "Pop"
    },
    {
      question: "What is time complexity of push?",
      answer: "O(1)"
    }
  ],

  quiz: [
  {
    question: "What is a stack data structure?",
    options: [
      "A linear data structure following FIFO",
      "A linear data structure following LIFO",
      "A tree-based data structure",
      "A graph-based data structure"
    ],
    answer: "A linear data structure following LIFO"
  },
  {
    question: "Which operation removes the top element from a stack?",
    options: ["Push", "Pop", "Peek", "Insert"],
    answer: "Pop"
  },
  {
    question: "Which operation adds an element to the top of a stack?",
    options: ["Push", "Pop", "Enqueue", "Delete"],
    answer: "Push"
  },
  {
    question: "What does the 'peek' operation in a stack do?",
    options: [
      "Removes the top element",
      "Returns the top element without removing it",
      "Deletes the bottom element",
      "Inserts a new element at the bottom"
    ],
    answer: "Returns the top element without removing it"
  },
  {
    question: "Which of the following applications uses a stack?",
    options: [
      "Undo feature in text editors",
      "Breadth-First Search",
      "Hash tables",
      "Priority Queue"
    ],
    answer: "Undo feature in text editors"
  },
  {
    question: "If a stack is full and we try to push an element, what is it called?",
    options: ["Underflow", "Overflow", "Segmentation Fault", "Null Error"],
    answer: "Overflow"
  },
  {
    question: "If a stack is empty and we try to pop an element, what is it called?",
    options: ["Overflow", "Underflow", "Segmentation Fault", "Stack Trace"],
    answer: "Underflow"
  },
  {
    question: "In which order are elements accessed in a stack?",
    options: [
      "First in, First out",
      "Random order",
      "Last in, First out",
      "Sorted order"
    ],
    answer: "Last in, First out"
  },
  {
    question: "Which data structure can be used to evaluate expressions in postfix notation?",
    options: ["Queue", "Stack", "Linked List", "Binary Tree"],
    answer: "Stack"
  },
  {
    question: "Which of these is a real-world analogy for a stack?",
    options: [
      "A queue of customers",
      "A pile of plates",
      "A bookshelf",
      "A train of carriages"
    ],
    answer: "A pile of plates"
  }
],

practiceLink: [
  "https://leetcode.com/problems/valid-parentheses/",
  "https://leetcode.com/problems/next-greater-element-i/",
  "https://leetcode.com/problems/min-stack/"
]};