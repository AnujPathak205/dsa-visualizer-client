export const min = {
  java: `void findMin(int[] arr, int n) {
    // 1. Check empty array
    if (n == 0) {
        System.out.println("Array is empty");
        return;
    }

    // 2. Initialize min
    int min = arr[0];

    // 3. Traverse array
    for (int i = 1; i < n; i++) {
        if (arr[i] < min) {
            // 4. Update min
            min = arr[i];
        }
    }

    // 5. Print minimum value
    System.out.println("Min value: " + min);
}`,

  cpp: `void findMin(int arr[], int n) {
    // 1. Check empty array
    if (n == 0) {
        cout << "Array is empty";
        return;
    }

    // 2. Initialize min
    int min = arr[0];

    // 3. Traverse array
    for (int i = 1; i < n; i++) {
        if (arr[i] < min) {
            // 4. Update min
            min = arr[i];
        }
    }

    // 5. Print minimum value
    cout << "Min value: " << min;
}`,

  python: `def findMin(arr, n):
    # 1. Check empty array
    if n == 0:
        print("Array is empty")
        return

    # 2. Initialize min
    min = arr[0]

    # 3. Traverse array
    for i in range(1, n):
        if arr[i] < min:
            # 4. Update min
            min = arr[i]

    # 5. Print minimum value
    print("Min value:", min)`,


    pseudo:`FUNCTION findMin(arr, n)
    // 1. Check empty array
    IF n == 0
        PRINT "Array is empty"
        RETURN
    END IF

    // 2. Initialize min
    min = arr[0]

    // 3. Traverse array
    FOR i = 1 TO n - 1
        IF arr[i] < min
            // 4. Update min
            min = arr[i]
        END IF

    END FOR

    // 5. Print minimum value
    PRINT "Min value: ", min

END FUNCTION`,


    lines:{
        pseudo:{
            1:1,
            3:3,
            4:4,
            5:5,
            9:9,
            12:12,
            13:13,
            15:15,
            20:21

        },

        python:{
            1:1,
            3:3,
            4:4,
            5:5,
            9:8,
            12:11,
            13:12,
            15:14,
            20:17
        }
    }
}
