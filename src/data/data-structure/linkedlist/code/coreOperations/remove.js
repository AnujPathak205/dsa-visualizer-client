export const remove = {
  java:`public void remove(int index){
  if(index < 0 || index >= size){
      System.out.println("Index out of bound");
      return;
  }

  if(index == 0){
      removeFirst();
      return;
  }

  if(index == size - 1){
      removeLast();
      return;
  }

  // 1. Traverse to (index-1)
  Node node = head;
  for(int i = 0; i < index - 1; i++){
      node = node.next;
  }

  // 2. node.next <- node.next.next
  node.next = node.next.next;

  size--;
}
`,

  cpp:`void remove(int index){
  if(index < 0 || index >= size){
      cout << "Index out of bound" << endl;
      return;
  }

  if(index == 0){
      removeFirst();
      return;
  }

  if(index == size - 1){
      removeLast();
      return;
  }

  // 1. Traverse to (index-1)
  Node* node = head;
  for(int i = 0; i < index - 1; i++){
      node = node->next;
  }

  // 2. node->next = node->next->next
  node->next = node->next->next;

  size--;
}
`,

  python:`def remove(self, index):
  if index < 0 or index >= self.size:
      print("Index out of bound")
      return

  if index == 0:
      self.removeFirst()
      return

  if index == self.size - 1:
      self.removeLast()
      return

  # 1. Traverse to (index-1)
  node = self.head
  for i in range(index - 1):
      node = node.next

  # 2. node.next = node.next.next
  node.next = node.next.next

  self.size -= 1`,

  pseudo:`FUNCTION remove(index)

    IF index < 0 OR index >= size
        PRINT "Index out of bound"
        RETURN
    END IF

    IF index == 0
        removeFirst()
        RETURN
    END IF

    IF index == size - 1
        removeLast()
        RETURN
    END IF

    // 1. Traverse to (index-1)
    node = head

    FOR i = 0 TO index - 2
        node = node.next
    END FOR

    // 2. node.next <- node.next.next
    node.next = node.next.next

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

            12:13,
            13:14,
            14:15,

            18:19,
            19:21,
            20:22,

            24:26,
            26:28
        },

        python:{
            1:1,

            2:2,
            3:3,
            4:4,

            7:6,
            8:7,
            9:8,

            12:10,
            13:11,
            14:12,

            18:15,
            19:16,
            20:17,

            24:20,
            26:22
        }
    }
};