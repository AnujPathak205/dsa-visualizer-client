export const max =  {
  java: `void findMax(int[] arr, int n) {
    if (n == 0) {
        System.out.println("Array is empty");
        return;
    }

    int max = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    System.out.println("Max value: " + max);
}`,

  cpp: `void findMax(int arr[], int n) {
    if (n == 0) {
        cout << "Array is empty";
        return;
    }

    int max = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    cout << "Max value: " << max;
}`,

  python: `def findMax(arr, n):
    if n == 0:
        print("Array is empty")
        return


    max = arr[0]

    for i in range(1, n):
        if arr[i] > max:
            max = arr[i]



    print("Max value:", max)`
}