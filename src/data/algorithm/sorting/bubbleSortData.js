export const bubbleSortData = {
  title: "Bubble Sort",

  problem: `Given an array of integers, sort the array in ascending order using Bubble Sort.`,

  intuition: `Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. 
After each pass, the largest unsorted element moves to its correct position at the end of the array.`,

  steps: [
    "Start from index 0",
    "Compare current element with next element",
    "Swap if current element is greater",
    "Move to next pair",
    "After one pass, largest element is placed at the end",
    "Repeat for remaining elements (n-1 passes)"
  ],



  code: {
    lines:{
    pseudo:{
      1:1
    }
  },
    pseudo:"Pseudo code is not available,try java,cpp,python",
    java: `public static void bubbleSort(int[] arr) {
    int n = arr.length;

    for(int i = 0; i < n - 1; i++) {
        for(int j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,

    cpp: `void bubbleSort(int arr[], int n) {
    

    for(int i = 0; i < n - 1; i++) {
        for(int j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;   
            }
        }
    }
}`,

    python: `def bubble_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp `
  },

  complexity: {
    time: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    space: "O(1)"
  },

  practiceLink: [
    "https://leetcode.com/problems/sort-an-array/"
  ],

  questions: [
    {
      question: "What is the worst-case time complexity of Bubble Sort?",
      answer: "O(n²)"
    },
    {
      question: "Is Bubble Sort a stable sorting algorithm?",
      answer: "Yes, it maintains the relative order of equal elements."
    },
    {
      question: "What happens after each pass in Bubble Sort?",
      answer: "The largest unsorted element is placed at the end of the array."
    },
    {
      question: "When does Bubble Sort achieve O(n) time complexity?",
      answer: "When the array is already sorted and an optimized version is used."
    }
  ],

  quiz: [
  {
    question: "What is the worst-case time complexity of Bubble Sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    answer: "O(n²)"
  },
  {
    question: "What is the best-case time complexity of optimized Bubble Sort?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: "O(n)"
  },
  {
    question: "Bubble Sort is based on which technique?",
    options: ["Divide and Conquer", "Greedy", "Swapping adjacent elements", "Backtracking"],
    answer: "Swapping adjacent elements"
  },
  {
    question: "After each pass in Bubble Sort, what happens?",
    options: [
      "Smallest element moves to front",
      "Largest element moves to end",
      "Array becomes reversed",
      "Nothing changes"
    ],
    answer: "Largest element moves to end"
  },
  {
    question: "Is Bubble Sort a stable sorting algorithm?",
    options: ["Yes", "No", "Sometimes", "Depends on input"],
    answer: "Yes"
  },
  {
    question: "How many passes are required in Bubble Sort for n elements?",
    options: ["n", "n-1", "n/2", "log n"],
    answer: "n-1"
  }
],
};