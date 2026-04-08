export const queueData = {
  title: "Queue",

  description: "A linear data structure that follows FIFO principle.",

  explanation: `
Queue follows FIFO (First In First Out).
The first element added is removed first.

Think of a queue like a line at a ticket counter:
The person who comes first gets served first.
  `,

  operations: [
    {
      name: "Enqueue",
      description: "Add element to the rear of queue"
    },
    {
      name: "Dequeue",
      description: "Remove element from the front"
    },
    {
      name: "Peek",
      description: "View front element without removing"
    }
  ],

  complexity: [
    {
      opName: "enqueue",
      TC: "O(1)"
    },
    {
      opName: "dequeue",
      TC: "O(1)"
    },
    {
      opName: "peek",
      TC: "O(1)"
    },
    {
      opName: "space",
      TC: "O(n)"
    }
  ],

  code: {
    basic:{
    java:`
// Java Queue Example
import java.util.Queue;
import java.util.LinkedList;

Queue<Integer> queue = new LinkedList<>();

queue.add(10);   // enqueue
queue.add(20);

System.out.println(queue.remove()); // 10 (dequeue)
System.out.println(queue.peek());   // 20
  `,
  cpp:`
#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;

    q.push(10);   // enqueue
    q.push(20);

    cout << q.front() << endl; // 10 (dequeue element)
    q.pop();                   // remove

    cout << q.front() << endl; // 20 (peek)

    return 0;
}
  `,
  python:`
from collections import deque

queue = deque()

queue.append(10)   # enqueue
queue.append(20)

print(queue.popleft())  # 10 (dequeue)
print(queue[0])         # 20 (peek)
  `
  }
  
},

  realLifeExample: `
Queue at a bus stop or ticket counter.
First person in line is served first.
  `,

  questions: [
    {
      question: "What principle does queue follow?",
      answer: "FIFO (First In First Out)"
    },
    {
      question: "Which operation removes element?",
      answer: "Dequeue"
    },
    {
      question: "What is time complexity of enqueue?",
      answer: "O(1)"
    }
  ],

  quiz:[
  { question: "What is a queue data structure?", options: ["A linear data structure following FIFO", "A linear data structure following LIFO", "A tree-based structure", "A graph-based structure"], answer: "A linear data structure following FIFO" },
  { question: "Which operation removes an element from the front of a queue?", options: ["Enqueue", "Dequeue", "Push", "Pop"], answer: "Dequeue" },
  { question: "Which operation adds an element to the rear of a queue?", options: ["Enqueue", "Dequeue", "Push", "Pop"], answer: "Enqueue" },
  { question: "A circular queue helps to solve which problem?", options: ["Overflow", "Underflow", "Wasted space", "Sorting"], answer: "Wasted space" },
  { question: "Which of these is a real-world analogy for a queue?", options: ["A pile of plates", "A line of people waiting", "Books on a shelf", "A train of carriages"], answer: "A line of people waiting" },
  { question: "In a queue, elements are accessed in which order?", options: ["Last in, First out", "First in, First out", "Random order", "Sorted order"], answer: "First in, First out" },
  { question: "Which type of queue allows insertion and deletion at both ends?", options: ["Simple Queue", "Circular Queue", "Deque", "Priority Queue"], answer: "Deque" },
  { question: "Which queue is used in CPU scheduling?", options: ["Priority Queue", "Circular Queue", "Deque", "Stack"], answer: "Priority Queue" },
  { question: "If a queue is empty and we try to dequeue, what happens?", options: ["Overflow", "Underflow", "Segmentation Fault", "Null Error"], answer: "Underflow" },
  { question: "Which queue is suitable for storing tasks in order of arrival?", options: ["Priority Queue", "Circular Queue", "Normal Queue", "Deque"], answer: "Normal Queue" }
],

practiceLink: [
  "https://leetcode.com/problems/implement-queue-using-stacks/",
  "https://leetcode.com/problems/sliding-window-maximum/",
  "https://leetcode.com/problems/design-circular-queue/"
]};