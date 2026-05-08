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
    arr[pos] = value`,

    pseudo:`FUNCTION insert(arr, n, capacity, pos, value)
    // 1. Check overflow or invalid position 
    IF n >= capacity OR pos < 0 OR pos > n
        PRINT "Insertion not possible"
        RETURN
    END IF

    // 2. Shift elements to right
    FOR i = n - 1 TO pos STEP -1
        arr[i + 1] = arr[i]
    END FOR

    // 3. Insert value
    arr[pos] = value

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


};