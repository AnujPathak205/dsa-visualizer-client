export const get = {
  java:`public void get(int index){
  // 1. Check bounds
  if(index < 0 || index >= size){
      System.out.println("Index out of bound");
      return;
  }

  // 2. Initialize pointer
  Node node = head;

  // 3. Traverse to index
  for(int i = 0; i < index; i++){
      node = node.next;
  }

  // 4. Print result
  System.out.println(node.data);
}
`,

  cpp:`void get(int index){
  // 1. Check bounds
  if(index < 0 || index >= size){
      cout << "Index out of bound" << endl;
      return;
  }

  // 2. Initialize pointer
  Node* node = head;

  // 3. Traverse to index
  for(int i = 0; i < index; i++){
      node = node->next;
  }

  // 4. Print result
  cout << node->data << endl;
}
`,

  python:`def get(self, index):
    # 1. Check bounds
    if index < 0 or index >= self.size:
        print("Index out of bound")
        return

    # 2. Initialize pointer
    node = self.head

    # 3. Traverse to index
    for i in range(index):
        node = node.next

    # 4. Print result
    print(node.data)
`,

  pseudo:`FUNCTION get(index)

    // 1. Check bounds
    IF index < 0 OR index >= size
        PRINT "Index out of bound"
        RETURN
    END IF

    // 2. Initialize pointer
    node = head

    // 3. Traverse to index
    FOR i = 0 TO index - 1
        node = node.next
    END FOR

    // 4. Print result
    PRINT node.data

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,

      3:4,
      4:5,
      5:6,

      9:10,

      12:13,
      13:14,

      17:18
    },

    python:{
      1:1,

      3:3,
      4:4,
      5:5,

      9:8,

      12:11,
      13:12,

      17:15
    }
  }
}