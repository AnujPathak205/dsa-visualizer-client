export const traverse = {
  java:`public void traverse(){
  if(head == null){
      System.out.println("LinkedList is empty");
      return;
  }

  // 1. Start from head
  Node node = head;

  // 2. Traverse till end
  while(node != null){
      System.out.print(node.data + " -> ");
      node = node.next;
  }

  System.out.println("null");
}
`,

  cpp:`void traverse(){
  if(head == nullptr){
      cout << "LinkedList is empty" << endl;
      return;
  }

  // 1. Start from head
  Node* node = head;

  // 2. Traverse till end
  while(node != nullptr){
      cout << node->data << " -> ";
      node = node->next;
  }

  cout << "null" << endl;
}
`,

  python:`def traverse(self):
  if self.head is None:
      print("LinkedList is empty")
      return

  # 1. Start from head
  node = self.head

  # 2. Traverse till end
  while node is not None:
      print(node.data, end=" -> ")
      node = node.next

  print("null")`,

  pseudo:`FUNCTION traverse()

    IF head == null
        PRINT "LinkedList is empty"
        RETURN
    END IF

    // 1. Start from head
    node = head

    // 2. Traverse till end
    WHILE node != null
        PRINT node.data, " -> "
        node = node.next
    END WHILE

    PRINT "null"

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,

      2:3,
      3:4,
      4:5,

      8:9,
      11:12,
      12:13,
      13:14,

      16:17,
    },

    python:{
      1:1,

      2:2,
      3:3,
      4:4,

      8:7,
      11:10,
      12:11,
      13:12,

      16:14

    }
  }
}