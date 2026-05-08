import { kbd } from "framer-motion/client";

export const midNode = {
  java:`public void findMiddle(){
  // 1. Initialize slow and fast pointers
  Node slow = head;
  Node fast = head;

  // 2. Traverse list
  while(fast != null && fast.next != null){
      slow = slow.next;
      fast = fast.next.next;
  }

  // 3. Middle node
  System.out.println(slow.value);
}
`,

  cpp:`void findMiddle(){
  // 1. Initialize slow and fast pointers
  Node* slow = head;
  Node* fast = head;

  // 2. Traverse list
  while(fast != NULL && fast->next != NULL){
      slow = slow->next;
      fast = fast->next->next;
  }

  // 3. Middle node
  cout << slow->value << endl;
}
`,

  python:`def findMiddle(self):
    # 1. Initialize slow and fast pointers
    slow = self.head
    fast = self.head

    # 2. Traverse list
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # 3. Middle node
    print(slow.value)
`,

  pseudo:`FUNCTION findMiddle()

    // 1. Initialize slow and fast pointers
    slow = head
    fast = head

    // 2. Traverse list
    WHILE fast != null AND fast.next != null
        slow = slow.next
        fast = fast.next.next
    END WHILE

    // 3. Middle node
    PRINT slow.value

END FUNCTION`,

    lines:{
      pseudo:{
        1:1,
        3:4,
        4:5,
        7:8,
        8:9,
        9:10,
        13:14
      },

      python:{
        1:1,
        3:3,
        4:4,
        7:7,
        8:8,
        9:9,
        13:12
      }
    }
};