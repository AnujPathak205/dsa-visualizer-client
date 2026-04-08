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
    basic:{java: `// Java Array Example
int[] arr = new int[5];

arr[0] = 10;
arr[1] = 20;

System.out.println(arr[0]); // 10
    `,

    cpp: `#include <iostream>
using namespace std;

int main() {
    int arr[5];

    arr[0] = 10;
    arr[1] = 20;

    cout << arr[0]; // 10
    return 0;
}
    `,

    python: `# Python Array Example (using list)
arr = [10, 20, 30]

print(arr[0])  # 10
    `},

    insertion:{
      java:`void insert(int[] arr, int n, int capacity, int pos, int value) {
    // check overflow
    if (n >= capacity || pos < 0 || pos > n) {
        System.out.println("Insertion not possible");
        return;
    }

    // shift elements
    for (int i = n - 1; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }

    // insert value
    arr[pos] = value;
}
`,

      cpp:`void insert(int arr[], int n, int capacity, int pos, int value) {
    // check overflow
    if (n >= capacity|| pos < 0 || pos > n) {
        cout << "Insertion not possible" << endl;
        return;
    }

    // shift elements
    for (int i = n - 1; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }

    // insert value
    arr[pos] = value;
}`,
      python:`def insert(arr, n, capacity, pos, value):
    # check overflow
    if n >= capacity || pos < 0 || pos > n:
        print("Insertion not possible (Array is full)")
        return


    # shift elements
    for i in range(n - 1, pos - 1, -1):
        arr[i + 1] = arr[i]


    # insert value
    arr[pos] = value`
    },

    deletion:{
      java:`void delete(int[] arr, int n, int capacity, int pos) {
    // check underflow
    if (n <= 0 || pos < 0 || pos >= n) {
        System.out.println("Deletion not possible (Array is empty)");
        return;
    }

    // shift elements left
    for (int i = pos; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // optional: clear last element
    arr[n - 1] = 0;
    }`,
        cpp:`void deleteElement(int arr[], int n, int capacity, int pos) {
    // check underflow
    if (n <= 0 || pos < 0 || pos >= n) {
        cout << "Deletion not possible (Array is empty)" << endl;
        return;
    }

    // shift elements left
    for (int i = pos; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // optional: clear last element
    arr[n - 1] = 0;
}`,

      python:`def delete(arr, n, capacity, pos):
    # check underflow
    if n <= 0 || pos < 0 || pos >= n:
        print("Deletion not possible (Array is empty)")
        return


    # shift elements left
    for i in range(pos, n - 1):
        arr[i] = arr[i + 1]


    # optional: clear last element
    arr[n - 1] = 0`
    },

    search:{
      java:`void search(int[] arr, int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            System.out.println("Element found at index: " + i);
            return;
        }
    }

    System.out.println("Element not found");
}
`,    cpp:`void search(int arr[], int n, int capacity, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            cout << "Element found at index: " << i << endl;
            return;
        }
    }
        
    cout << "Element not found" << endl;
}`,
      python:`def search(arr, n, capacity, key):
    for i in range(n):
        if arr[i] == key:
            print("Element found at index:", i)
            return

            

    print("Element not found")`
    }


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

  quiz:[
  {
    question: "What is an array?",
    options: [
      "A collection of elements of different types",
      "A collection of elements of the same type stored in contiguous memory",
      "A linked data structure",
      "A type of stack"
    ],
    answer: "A collection of elements of the same type stored in contiguous memory"
  },
  {
    question: "What is the index of the first element in an array?",
    options: ["0", "1", "-1", "Depends on array type"],
    answer: "0"
  },
  {
    question: "What is the time complexity of accessing an element by index in an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)"
  },
  {
    question: "Which operation is costly in an array?",
    options: [
      "Accessing an element by index",
      "Updating an element by index",
      "Inserting or deleting an element in the middle",
      "Iterating through the array"
    ],
    answer: "Inserting or deleting an element in the middle"
  },
  {
    question: "Which of these is a real-world analogy for an array?",
    options: [
      "Train of carriages",
      "Bookshelf with numbered slots",
      "Pile of plates",
      "Queue of people"
    ],
    answer: "Bookshelf with numbered slots"
  },
  {
    question: "Arrays are stored in what type of memory?",
    options: ["Non-contiguous", "Contiguous", "Stack memory only", "Heap memory only"],
    answer: "Contiguous"
  },
  {
    question: "Which array type allows dynamic resizing?",
    options: ["Static array", "Dynamic array", "Singly linked list", "Stack"],
    answer: "Dynamic array"
  },
  {
    question: "Which of these is a common application of arrays?",
    options: [
      "Storing a list of numbers for computation",
      "Undo operations in editors",
      "CPU scheduling",
      "Implementing LIFO structure"
    ],
    answer: "Storing a list of numbers for computation"
  },
  {
    question: "In a 2D array, how are elements stored in memory?",
    options: ["Row-major order", "Column-major order", "Both depending on language", "Random order"],
    answer: "Both depending on language"
  },
  {
    question: "What is the time complexity to search for an element in an unsorted array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(n)"
  }
],

practiceLink: [
  "https://leetcode.com/problems/two-sum/",
  "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
  "https://leetcode.com/problems/maximum-subarray/"
]

};