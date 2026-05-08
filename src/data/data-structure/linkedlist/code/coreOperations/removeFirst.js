export const removeFirst = {
  java:`public void removeFirst(){
  if(head == null){
      System.out.println("List is already empty");
      return;
  }

  // 1. head <- head.next
  head = head.next;

  // 2. if list becomes empty
  if(head == null){
      tail = null;
  }

  size--;
}
`,

  cpp:`void removeFirst(){
  if(head == nullptr){
      cout << "List is already empty" << endl;
      return;
  }

  // 1. head = head->next
  head = head->next;

  // 2. if list becomes empty
  if(head == nullptr){
      tail = nullptr;
  }

  size--;
}
`,

  python:`def removeFirst(self):
  if self.head is None:
      print("List is already empty")
      return

  # 1. head = head.next
  self.head = self.head.next

  # 2. if list becomes empty
  if self.head is None:
      self.tail = None

  self.size -= 1`,

  pseudo:`FUNCTION removeFirst()

    IF head == null
        PRINT "List is already empty"
        RETURN
    END IF

    // 1. head <- head.next
    head = head.next

    // 2. if list becomes empty
    IF head == null
        tail = null
    END IF

    size = size - 1

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

      14:14,

      15:16
    },

    python:{
      1:1,
      2:2,
      3:3,
      4:4,

      8:7,

      11:10,
      12:11,

      15:13
    }
  }
}