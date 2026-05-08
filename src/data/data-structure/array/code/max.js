export const max = {
  java: `void findMax(int[] arr, int n) {
    // 1. Check empty array
    if (n == 0) {
        System.out.println("Array is empty");
        return;
    }

    // 2. Initialize max
    int max = arr[0];

    // 3. Traverse array
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            // 4. Update max
            max = arr[i];
        }
    }

    // 5. Print maximum value
    System.out.println("Max value: " + max);
}`,

  cpp: `void findMax(int arr[], int n) {
    // 1. Check empty array
    if (n == 0) {
        cout << "Array is empty";
        return;
    }

    // 2. Initialize max
    int max = arr[0];

    // 3. Traverse array
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            // 4. Update max
            max = arr[i];
        }
    }

    // 5. Print maximum value
    cout << "Max value: " << max;
}`,

  python: `def findMax(arr, n):
    # 1. Check empty array
    if n == 0:
        print("Array is empty")
        return

    # 2. Initialize max
    max = arr[0]

    # 3. Traverse array
    for i in range(1, n):
        if arr[i] > max:
            # 4. Update max
            max = arr[i]

    # 5. Print maximum value
    print("Max value:", max)`,

  pseudo:`FUNCTION findMax(arr, n)
    // 1. Check empty array
    IF n == 0
        PRINT "Array is empty"
        RETURN
    END IF

    // 2. Initialize max
    max = arr[0]

    // 3. Traverse array
    FOR i = 1 TO n - 1
        IF arr[i] > max
            // 4. Update max
            max = arr[i]
        END IF

    END FOR

    // 5. Print maximum value
    PRINT "Max value: ", max

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