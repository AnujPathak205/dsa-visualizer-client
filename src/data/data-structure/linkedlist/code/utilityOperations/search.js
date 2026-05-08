export const search = {
  java:`public void search(int key){
  // 1. Initialize pointer and index
  Node node = head;
  int index = 0;

  // 2. Traverse list
  while(node != null){
      if(node.data == key){
          System.out.println(key+" found at index "+index);
          return;
      }
      node = node.next;
      index++;
  }

  // 3. Not found
  System.out.println("NOT FOUND");
}`,

  cpp:`void search(int key){
  // 1. Initialize pointer and index
  Node* node = head;
  int index = 0;

  // 2. Traverse list
  while(node != nullptr){
      if(node->data == key){
          cout << key << " found at index "<< index << endl;
          return;
      }
      node = node->next;
      index++;
  }

  // 3. Not found
  cout << "NOT FOUND" << endl;
}`,

  python:`def search(self, key):
    # 1. Initialize pointer and index
    node = self.head
    index = 0

    # 2. Traverse list
    while node is not None:
        if node.data == key:
            print(key," found at index ",index)
            return
        node = node.next
        index += 1

    # 3. Not found
    print("NOT FOUND")`,

  pseudo:`FUNCTION search(key)

    // 1. Initialize pointer and index
    node = head
    index = 0

    // 2. Traverse list
    WHILE node != null

        IF node.data == key
            PRINT key, " found at index ", index
            RETURN
        END IF

        node = node.next
        index = index + 1

    END WHILE

    // 3. Not found
    PRINT "NOT FOUND"

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,

      3:4,
      4:5,

      7:8,

      8:10,
      9:11,
      10:12,

      12:15,
      13:16,

      17:21,

      20:20
    },

    python:{
      1:1,

      3:3,
      4:4,

      7:7,

      8:8,
      9:9,
      10:10,

      12:11,
      13:12,

      17:15,
    }
  }
}