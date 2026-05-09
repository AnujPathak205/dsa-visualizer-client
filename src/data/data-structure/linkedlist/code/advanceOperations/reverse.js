export const reverse = {
  java:`public void reverse(){
  // 1. Initialize pointers
  Node prev = null;
  Node curr = head;

  // 2. Traverse list
  while(curr != null){
      Node next = curr.next;

      // 3. Reverse link
      curr.next = prev;

      // 4. Move pointers
      prev = curr;
      curr = next;
  }

  // 5. Update head and tail
  tail = head;
  head = prev;
}`,

  cpp:`void reverse(){
  // 1. Initialize pointers
  Node* prev = nullptr;
  Node* curr = head;

  // 2. Traverse list
  while(curr != nullptr){
      Node* next = curr->next;

      // 3. Reverse link
      curr->next = prev;

      // 4. Move pointers
      prev = curr;
      curr = next;
  }

  // 5. Update head and tail
  head = prev;
  tail = head;
}`,

  python:`def reverse(self):
    # 1. Initialize pointers
    prev = None
    curr = self.head

    # 2. Traverse list
    while curr is not None:
        next = curr.next

        # 3. Reverse link
        curr.next = prev

        # 4. Move pointers
        prev = curr
        curr = next

    # 5. Update head and tail
    self.tail = self.head
    self.head = prev`,

  pseudo:`FUNCTION reverse()

    // 1. Initialize pointers
    prev = null
    curr = head

    // 2. Traverse list
    WHILE curr != null
        next = curr.next

        // 3. Reverse link
        curr.next = prev

        // 4. Move pointers
        prev = curr
        curr = next
    END WHILE

    // 5. Update head and tail
    tail = head
    head = prev

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,

      3:4,
      4:5,
      
      7:8,
      8:9,

      11:12,

      14:15,
      15:16,

      19:20,
      20:21
    },

    python:{
      1:1,

      3:3,
      4:4,
      
      7:7,
      8:8,

      11:11,

      14:14,
      15:15,

      19:18,
      20:19
    }
  }
};