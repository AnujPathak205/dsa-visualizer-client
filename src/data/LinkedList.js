export const linkedListData = {
  title: "Linked List",

  description: "A linear data structure where elements are stored in nodes and linked using pointers.",

  explanation: `
Linked List consists of nodes.
Each node contains:
1. Data
2. Pointer to next node

Elements are not stored in contiguous memory.

Types:
- Singly Linked List
- Doubly Linked List
  `,

  operations: [
    {
      name: "Insertion",
      description: "Add node at beginning, middle, or end"
    },
    {
      name: "Deletion",
      description: "Remove node"
    },
    {
      name: "Traversal",
      description: "Visit each node sequentially"
    }
  ],

  complexity: [
    {
      opName: "access",
      TC: "O(n)"
    },
    {
      opName: "insertion",
      TC: "O(1)"
    },
    {
      opName: "deletion",
      TC: "O(1)"
    },
    {
      opName: "space",
      TC: "O(n)"
    }
  ],

  code: {
    java: `
// Java LinkedList Example
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
    `,

    cpp: `
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = NULL;
    }
};
    `,

    python: `
# Python Linked List Example
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    `
  },

  realLifeExample: `
Linked List is like a treasure hunt:
Each clue (node) tells you where the next clue is.
You cannot directly jump to a position.
  `,

  questions: [
    {
      question: "What does each node contain?",
      answer: "Data and pointer to next node"
    },
    {
      question: "Is linked list stored in contiguous memory?",
      answer: "No"
    },
    {
      question: "What is time complexity of access?",
      answer: "O(n)"
    }
  ],

  practiceLink: "https://leetcode.com/problems/reverse-linked-list/"
};