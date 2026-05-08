export const update = {
  java:`public void update(int index, int data){
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

  // 4. Update value
  node.data = data;

  // 5. Print confirmation
  System.out.println("Updated successfully");
}
`,

  cpp:`void update(int index, int data){
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

  // 4. Update value
  node->data = data;

  // 5. Print confirmation
  cout << "Updated successfully" << endl;
}
`,

  python:`def update(self, index, data):
    # 1. Check bounds
    if index < 0 or index >= self.size:
        print("Index out of bound")
        return

    # 2. Initialize pointer
    node = self.head

    # 3. Traverse to index
    for i in range(index):
        node = node.next

    # 4. Update value
    node.data = data

    # 5. Print confirmation
    print("Updated successfully")
`,

  pseudo:`FUNCTION update(index, data)

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

    // 4. Update value
    node.data = data

    // 5. Print confirmation
    PRINT "Updated successfully"

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

      17:18,

      20:21
    },

    python:{
      1:1,

      3:3,
      4:4,
      5:5,

      9:8,

      12:11,
      13:12,

      17:15,

      20:18
    }
  }
}