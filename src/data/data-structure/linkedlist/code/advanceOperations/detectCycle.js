export const detectCycle = {
  java:`public void findCycle(){
  // 1. Initialize slow and fast pointers
  Node slow = head;
  Node fast = head;

  // 2. Traverse list
  while(fast != null && fast.next != null){
      slow = slow.next;
      fast = fast.next.next;

      // 3. Cycle detected
      if(slow == fast){
          System.out.println("Cycle Detected");
          return;
      }
  }

  // 4. No cycle
  System.out.println("No Cycle");
}`,

  cpp:`void findCycle(){
  // 1. Initialize slow and fast pointers
  Node* slow = head;
  Node* fast = head;

  // 2. Traverse list
  while(fast != nullptr && fast->next != nullptr){
      slow = slow->next;
      fast = fast->next->next;

      // 3. Cycle detected
      if(slow == fast){
          cout << "Cycle Detected" << endl;
          return;
      }
  }

  // 4. No cycle
  cout << "No Cycle" << endl;
}`,

  python:`def findCycle(self):
    # 1. Initialize slow and fast pointers
    slow = self.head
    fast = self.head

    # 2. Traverse list
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        # 3. Cycle detected
        if slow == fast:
            print("Cycle Detected")
            return

    # 4. No cycle
    print("No Cycle")`,

  pseudo:`FUNCTION findCycle()

    // 1. Initialize slow and fast pointers
    slow = head
    fast = head

    // 2. Traverse list
    WHILE fast != null AND fast.next != null
        slow = slow.next
        fast = fast.next.next

        // 3. Cycle detected
        IF slow == fast
            PRINT "Cycle Detected"
            RETURN
        END IF
    END WHILE

    // 4. No cycle
    PRINT "No Cycle"

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,

      3:4,
      4:5,

      7:8,
      8:9,
      9:10,

      12:13,
      13:14,
      14:15,

      19:20
    },

    python:{
      1:1,

      3:3,
      4:4,

      7:7,
      8:8,
      9:9,

      11:11,
      12:12,
      13:13,

      19:17
    }
  }
};