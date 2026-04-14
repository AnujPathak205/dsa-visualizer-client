export const selectionSortData = {
  title: "Selection Sort",

  problem: `Given an array of integers, sort the array in ascending order using Selection Sort.`,

  intuition: `Selection Sort works by repeatedly selecting the smallest element from the unsorted part of the array and placing it at its correct position. 
It divides the array into sorted and unsorted parts and grows the sorted portion one element at a time.`,

  steps: [
    "Start from index 0",
    "Assume current index has the minimum element",
    "Traverse the remaining array to find the actual minimum",
    "Swap the minimum element with current index",
    "Move to the next index",
    "Repeat until the array is sorted"
  ],

  code: {
    java: `public static void selectionSort(int[] arr) {
    int n = arr.length;

    for(int i = 0; i < n - 1; i++) {
        int minIndex = i;

        for(int j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}`,

    cpp: `void selectionSort(int arr[], int n) {


    for(int i = 0; i < n - 1; i++) {
        int minIndex = i;

        for(int j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}`,

    python: `def selection_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        min_index = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j



        temp = arr[i]
        arr[i] = arr[min_index]
        arr[min_index] = temp `
  },

  complexity: {
    time: {
      best: "O(n²)",
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
      question: "What is the time complexity of Selection Sort in all cases?",
      answer: "O(n²)"
    },
    {
      question: "Is Selection Sort a stable sorting algorithm?",
      answer: "No, it is not stable by default."
    },
    {
      question: "How many swaps does Selection Sort perform?",
      answer: "At most n-1 swaps."
    },
    {
      question: "What is the main idea behind Selection Sort?",
      answer: "Repeatedly selecting the minimum element and placing it at the correct position."
    }
  ],

  quiz: [
    {
      question: "What is the time complexity of Selection Sort in the best case?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      answer: "O(n²)"
    },
    {
      question: "What is the main idea of Selection Sort?",
      options: [
        "Swapping adjacent elements",
        "Selecting minimum and placing it correctly",
        "Divide and conquer",
        "Using recursion"
      ],
      answer: "Selecting minimum and placing it correctly"
    },
    {
      question: "Is Selection Sort stable?",
      options: ["Yes", "No", "Sometimes", "Depends on input"],
      answer: "No"
    },
    {
      question: "How many swaps does Selection Sort make?",
      options: ["n", "n-1", "n²", "log n"],
      answer: "n-1"
    },
    {
      question: "Selection Sort is best suited for:",
      options: [
        "Large datasets",
        "Nearly sorted arrays",
        "Small datasets",
        "Graphs"
      ],
      answer: "Small datasets"
    },
    {
      question: "Which part of array is sorted in Selection Sort?",
      options: [
        "Right side",
        "Left side",
        "Middle",
        "Random"
      ],
      answer: "Left side"
    }
  ],
};