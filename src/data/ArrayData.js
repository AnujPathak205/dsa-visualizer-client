export const arrayData = {
  title: "Array",

  description: "A linear data structure that stores elements in contiguous memory locations.",

  explanation: `
Array stores elements in continuous memory locations.
It allows direct access using index.

Example:
arr[0], arr[1], arr[2]...

Fast for access but costly for insertion/deletion.
  `,

  operations: [
    {
      name: "Access",
      description: "Get element using index"
    },
    {
      name: "Insertion",
      description: "Insert element at specific position"
    },
    {
      name: "Deletion",
      description: "Remove element from index"
    }
  ],

  complexity: [
    {
      opName: "access",
      TC: "O(1)"
    },
    {
      opName: "insertion",
      TC: "O(n)"
    },
    {
      opName: "deletion",
      TC: "O(n)"
    },
    {
      opName: "space",
      TC: "O(n)"
    }
  ],

  code: {
    java: `
// Java Array Example
int[] arr = new int[5];

arr[0] = 10;
arr[1] = 20;

System.out.println(arr[0]); // 10
    `,

    cpp: `
#include <iostream>
using namespace std;

int main() {
    int arr[5];

    arr[0] = 10;
    arr[1] = 20;

    cout << arr[0]; // 10
    return 0;
}
    `,

    python: `
# Python Array Example (using list)
arr = [10, 20, 30]

print(arr[0])  # 10
    `
  },

  realLifeExample: `
Array is like a row of lockers:
Each locker has a fixed position (index).
You can directly access any locker.
  `,

  questions: [
    {
      question: "What is time complexity of accessing an element in array?",
      answer: "O(1)"
    },
    {
      question: "Why is insertion costly in array?",
      answer: "Because elements need to be shifted"
    },
    {
      question: "Does array store elements in contiguous memory?",
      answer: "Yes"
    }
  ],

  practiceLink: "https://leetcode.com/problems/two-sum/"
};