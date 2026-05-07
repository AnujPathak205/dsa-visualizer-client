export const min = {
  java: `void findMin(int[] arr, int n) {
    if (n == 0) {
        System.out.println("Array is empty");
        return;
    }

    int min = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    System.out.println("Min value: " + min);
}`,

  cpp: `void findMin(int arr[], int n) {
    if (n == 0) {
        cout << "Array is empty";
        return;
    }

    int min = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    cout << "Min value: " << min;
}`,

  python: `def findMin(arr, n):
    if n == 0:
        print("Array is empty")
        return


    min = arr[0]

    for i in range(1, n):
        if arr[i] < min:
            min = arr[i]
            


    print("Min value:", min)`
}
