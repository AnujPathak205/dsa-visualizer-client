export const insertion = {
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
    arr[pos] = value`};