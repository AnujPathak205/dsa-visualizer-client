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

  practiceLink: "https://leetcode.com/problems/valid-parentheses/"
};