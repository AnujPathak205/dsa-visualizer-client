export const removeCycle = {
  java:`public void removeCycle(){
  // 1. Initialize slow and fast pointers
  Node slow = head;
  Node fast = head;

  // 2. Detect cycle
  while(fast != null && fast.next != null){
      slow = slow.next;
      fast = fast.next.next;

      // 3. Cycle detected
      if(slow == fast){

          // 4. Move slow to head
          slow = head;

          // 5. Find previous node of cycle start
          Node prev = null;

          while(slow != fast){
              prev = fast;
              slow = slow.next;
              fast = fast.next;
          }

          // 6. Remove cycle
          prev.next = null;

          System.out.println("Cycle Removed");
          return;
      }
  }

  // 7. No cycle
  System.out.println("No Cycle");
}`,

  cpp:`void removeCycle(){
  // 1. Initialize slow and fast pointers
  Node* slow = head;
  Node* fast = head;

  // 2. Detect cycle
  while(fast != nullptr && fast->next != nullptr){
      slow = slow->next;
      fast = fast->next->next;

      // 3. Cycle detected
      if(slow == fast){

          // 4. Move slow to head
          slow = head;

          // 5. Find previous node of cycle start
          Node* prev = nullptr;

          while(slow != fast){
              prev = fast;
              slow = slow->next;
              fast = fast->next;
          }

          // 6. Remove cycle
          prev->next = nullptr;

          cout << "Cycle Removed" << endl;
          return;
      }
  }

  // 7. No cycle
  cout << "No Cycle" << endl;
}`,

  python:`def removeCycle(self):
    # 1. Initialize slow and fast pointers
    slow = self.head
    fast = self.head

    # 2. Detect cycle
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        # 3. Cycle detected
        if slow == fast:

            # 4. Move slow to head
            slow = self.head

            # 5. Find previous node of cycle start
            prev = None

            while slow != fast:
                prev = fast
                slow = slow.next
                fast = fast.next

            # 6. Remove cycle
            prev.next = None

            print("Cycle Removed")
            return

    # 7. No cycle
    print("No Cycle")`,

  pseudo:`FUNCTION removeCycle()

    // 1. Initialize slow and fast pointers
    slow = head
    fast = head

    // 2. Detect cycle
    WHILE fast != null AND fast.next != null
        slow = slow.next
        fast = fast.next.next

        // 3. Cycle detected
        IF slow == fast

            // 4. Move slow to head
            slow = head

            // 5. Find previous node of cycle start
            prev = null

            WHILE slow != fast
                prev = fast
                slow = slow.next
                fast = fast.next
            END WHILE

            // 6. Remove cycle
            prev.next = null

            PRINT "Cycle Removed"
            RETURN
        END IF
    END WHILE

    // 7. No cycle
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

      13:14,

      16:17,

      18:19,
      19:20,
      20:21,
      21:22,

      25:26,

      27:28,
      28:29,

      34:35
    },

    python:{
      1:1,

      3:3,
      4:4,

      7:7,
      8:8,
      9:9,

      12:12,

      15:15,

      17:17,
      18:18,
      19:19,
      20:20,

      23:23,

      25:25,
      26:26,

      32:30
    }
  }
};