export const search = {
      java:`void search(int[] arr, int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            System.out.println("Element found at index: " + i);
            return;
        }
    }

    System.out.println("Element not found");
}`,    cpp:`void search(int arr[], int n, int capacity, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            cout << "Element found at index: " << i << endl;
            return;
        }
    }

    cout << "Element not found" << endl;
}`,
      python:`def search(arr, n, capacity, key):
    for i in range(n):
        if arr[i] == key:
            print("Element found at index:", i)
            return

    print("Element not found")`,


    pseudo:`FUNCTION search(arr, n, key)
    FOR i = 0 TO n - 1
        IF arr[i] == key
            PRINT "Element found at index: ", i
            RETURN
        END IF

    END FOR

    PRINT "Element not found"

END FUNCTION`,
    

    lines:{
        pseudo:{
            1:1,
            2:2,
            3:3,
            4:4,
            5:5,
            9:10

        },
        python:{
            1:1,
            2:2,
            3:3,
            4:4,
            5:5,
            9:7
        }
    },

}