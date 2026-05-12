export const insertionSortData = {
  title: "Insertion Sort",

  problem: `Given an array of integers, sort the array in ascending order using Insertion Sort.`,

  intuition: `Insertion Sort builds the sorted array one element at a time. 
It takes each element and inserts it into its correct position in the already sorted part of the array.`,

  steps: [
    "Start from the second element (index 1)",
    "Take the current element as key",
    "Compare it with elements before it",
    "Shift all greater elements one position to the right",
    "Insert the key at its correct position",
    "Repeat until the array is sorted"
  ],

  code: {
    lines:{
    pseudo:{
      1:1
    }
  },
    pseudo:"Pseudo code is not available,try java,cpp,python",
    java: `public static void insertionSort(int[] arr) {
      int n = arr.length;

      for(int i = 1; i < n; i++) {
          int key = arr[i];
          int j = i - 1;

          while(j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j--;
          }

          arr[j + 1] = key;
      }
  }`,

    cpp: `#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}`,

    python: `def insertion_sort(arr):
    n = len(arr)

    for i in range(1, n):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

    return arr`
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
      question: "What is the best-case time complexity of Insertion Sort?",
      answer: "O(n)"
    },
    {
      question: "Why is Insertion Sort efficient for small or nearly sorted arrays?",
      answer: "Because it performs fewer shifts when elements are already close to their correct positions."
    },
    {
      question: "Is Insertion Sort a stable sorting algorithm?",
      answer: "Yes, it preserves the order of equal elements."
    },
    {
      question: "How does Insertion Sort differ from Bubble Sort?",
      answer: "Insertion Sort places elements in their correct position by shifting, while Bubble Sort swaps adjacent elements repeatedly."
    }
  ],

   quiz: [
  {
    question: "What is the best-case time complexity of Insertion Sort?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: "O(n)"
  },
  {
    question: "What is the worst-case time complexity of Insertion Sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    answer: "O(n²)"
  },
  {
    question: "Insertion Sort works by:",
    options: [
      "Dividing array into halves",
      "Swapping random elements",
      "Inserting elements into sorted portion",
      "Using recursion"
    ],
    answer: "Inserting elements into sorted portion"
  },
  {
    question: "Insertion Sort is best suited for:",
    options: [
      "Large datasets",
      "Random datasets",
      "Nearly sorted arrays",
      "Graphs"
    ],
    answer: "Nearly sorted arrays"
  },
  {
    question: "Is Insertion Sort stable?",
    options: ["Yes", "No", "Sometimes", "Depends on implementation"],
    answer: "Yes"
  },
  {
    question: "What operation is mainly used in Insertion Sort?",
    options: ["Swapping", "Shifting elements", "Hashing", "Recursion"],
    answer: "Shifting elements"
  }
],
};