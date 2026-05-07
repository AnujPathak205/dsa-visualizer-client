export const deletion = {
      java:`void delete(int[] arr, int n, int capacity, int pos) {
    // check underflow
    if (n <= 0 || pos < 0 || pos >= n) {
        System.out.println("Deletion not possible");
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

}