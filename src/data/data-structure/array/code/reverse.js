export const reverse = {
      java:`void reverse(int[] arr, int n, int capacity) {
    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
}` ,

   cpp:`void reverse(int arr[], int n, int capacity) {
    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
}`, 

    python:`def reverse(arr, n, capacity):
    for i in range(n // 2):
         arr[i], arr[n-i-1] = arr[n-i-1], arr[i]`,

    
    pseudo:`FUNCTION reverse(arr, n, capacity)
    FOR i = 0 TO (n / 2) - 1
        temp = arr[i]
        arr[i] = arr[n - i - 1]
        arr[n - i - 1] = temp

    END FOR

END FUNCTION`,

    lines:{
        pseudo:{
            1:1,
            2:2,
            3:3,
            4:4,
            5:5
        },

        python:{
            1:1,
            2:2,
            3:3,
            4:3,
            5:3
        }
    }
}