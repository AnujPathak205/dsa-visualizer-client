export const removeLast = {
  java:`public void removeLast(){
  if(head == null){
      System.out.println("List is already empty");
      return;
  }

  if(head == tail){
      head = tail = null;
      size--;
      return;
  }

  // 1. Traverse to second last node
  Node node = head;
  while(node.next != tail){
      node = node.next;
  }

  // 2. node.next <- null
  node.next = null;

  // 3. tail <- node
  tail = node;

  size--;
}
`,

  cpp:`void removeLast(){
  if(head == nullptr){
      cout << "List is already empty" << endl;
      return;
  }

  if(head == tail){
      head = tail = nullptr;
      size--;
      return;
  }

  // 1. Traverse to second last node
  Node* node = head;
  while(node->next != tail){
      node = node->next;
  }

  // 2. node->next = nullptr
  node->next = nullptr;

  // 3. tail = node
  tail = node;

  size--;
}
`,

  python:`def removeLast(self):
  if self.head is None:
      print("List is already empty")
      return

  if self.head == self.tail:
      self.head = self.tail = None
      self.size -= 1
      return

  # 1. Traverse to second last node
  node = self.head
  while node.next != self.tail:
      node = node.next

  # 2. node.next = None
  node.next = None

  # 3. tail = node
  self.tail = node

  self.size -= 1`,

  pseudo:`FUNCTION removeLast()

    IF head == null
        PRINT "List is already empty"
        RETURN
    END IF

    IF head == tail
        head = tail = null
        size = size - 1
        RETURN
    END IF

    // 1. Traverse to second last node
    node = head

    WHILE node.next != tail
        node = node.next
    END WHILE

    // 2. node.next <- null
    node.next = null

    // 3. tail <- node
    tail = node

    size = size - 1

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,

      2:3,
      3:4,
      4:5,

      7:8,
      8:9,
      9:10,
      10:11,

      14:15,

      15:17,
      16:18,


      20:22,
      23:25,

      25:27,
    },

    python:{
      1:1,

      2:2,
      3:3,
      4:4,

      7:6,
      8:7,
      9:8,
      10:9,

      14:12,

      15:13,
      16:14,

      20:17,
      23:20,

      24:20,
      25:22,
      
    }
  }
}