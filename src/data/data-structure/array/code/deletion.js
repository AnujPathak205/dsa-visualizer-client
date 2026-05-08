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
    arr[n - 1] = 0`,


    pseudo:`FUNCTION delete(arr, n, capacity, pos)
    // 1. Check underflow or invalid position
    IF n <= 0 OR pos < 0 OR pos >= n
        PRINT "Deletion not possible"
        RETURN
    END IF

    // 2. Shift elements to left
    FOR i = pos TO n - 2
        arr[i] = arr[i + 1]
    END FOR

    // 3. Clear last element (optional)
    arr[n - 1] = 0

END FUNCTION`,


lines:{
        pseudo:{
            1:1,
            3:3,
            4:4,
            5:5,
            9:9,
            10:10,
            14:14
        },
        python:{
            1:1,
            3:3,
            4:4,
            5:5,
            9:8,
            10:9,
            14:12
        }
    },


}