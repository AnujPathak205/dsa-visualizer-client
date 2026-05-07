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
        temp = arr[i]
        arr[i] = arr[n-i-1]
        arr[n-i-1] = temp`
}