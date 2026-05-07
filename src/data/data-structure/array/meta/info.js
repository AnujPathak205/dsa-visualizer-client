export const arrayInfo = {
    title: "Array",

    description: "A linear data structure that stores elements in contiguous memory locations.",

    explanation: `
Array stores elements in continuous memory locations.
It allows direct access using index.

Example:
arr[0], arr[1], arr[2]...

Fast for access but costly for insertion/deletion.
  `,


    
    basicCode:{java: `// Java Array Example
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

print(arr[0])  # 10`},

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

    realLifeExample: `
Array is like a row of lockers:
Each locker has a fixed position (index).
You can directly access any locker.
  `,

    practiceLink: [
        "https://leetcode.com/problems/two-sum/",
        "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "https://leetcode.com/problems/maximum-subarray/"
    ]
}