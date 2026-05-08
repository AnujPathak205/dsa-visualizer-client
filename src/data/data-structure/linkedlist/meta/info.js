export const linkedlistInfo = {
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

    basicCode:{
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


    realLifeExample: `
Linked List is like a treasure hunt:
Each clue (node) tells you where the next clue is.
You cannot directly jump to a position.
  `,
    
    practiceLink: [
        "https://leetcode.com/problems/reverse-linked-list/",
        "https://leetcode.com/problems/merge-two-sorted-lists/",
        "https://leetcode.com/problems/linked-list-cycle/"
    ]
}