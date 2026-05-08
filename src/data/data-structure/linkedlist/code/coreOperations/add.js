export const add = {
  java:`public void add(int data, int index){
  if(index < 0 || index > size){
      System.out.println("Index out of bound");
      return;
  }

  if(index == 0){
      addFirst(data);
      return;
  }

  if(index == size){
      addLast(data);
      return;
  }

  // 1. Creating new Node
  Node newNode = new Node(data);

  // 2. Traverse to (index-1)
  Node node = head;
  for(int i = 0; i < index-1; i++){
      node = node.next;
  }

  // 3. newNode.next <- node.next
  newNode.next = node.next;

  // 4. node.next <- newNode
  node.next = newNode;

  size++;
}`,

  cpp:`void add(int data, int index){
  if(index < 0 || index > size){
      cout << "Index out of bound" << endl;
      return;
  }

  if(index == 0){
      addFirst(data);
      return;
  }

  if(index == size){
      addLast(data);
      return;
  }

  // 1. Creating new Node
  Node* newNode = new Node(data);

  // 2. Traverse to (index-1)
  Node* node = head;
  for(int i = 0; i < index-1; i++){
      node = node->next;
  }

  // 3. newNode->next = node->next
  newNode->next = node->next;

  // 4. node->next = newNode
  node->next = newNode;

  size++;
}`,

  python:`def add(self, data, index):
  if index < 0 or index > self.size:
      print("Index out of bound")
      return

  if index == 0:
      self.addFirst(data)
      return

  if index == self.size:
      self.addLast(data)
      return

  # 1. Creating new Node
  newNode = Node(data)

  # 2. Traverse to (index-1)
  node = self.head
  for i in range(index - 1):
      node = node.next

  # 3. newNode.next = node.next
  newNode.next = node.next

  # 4. node.next = newNode
  node.next = newNode

  self.size += 1`,

  pseudo:`FUNCTION add(data, index)
    IF index < 0 OR index > size
        PRINT "Index out of bound"
        RETURN
    END IF

    IF index == 0
        addFirst(data)
        RETURN
    END IF

    IF index == size
        addLast(data)
        RETURN
    END IF

    // 1. Creating new Node
    newNode = CREATE NODE(data)

    // 2. Traverse to (index-1)
    node = head

    FOR i = 0 TO index - 2
        node = node.next
    END FOR

    // 3. newNode.next <- node.next
    newNode.next = node.next

    // 4. node.next <- newNode
    node.next = newNode

    size = size + 1

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,
      2:2,
      3:3,
      4:4,
      7:7,
      8:8,
      9:9,
      10:10,

      12:12,
      13:13,
      14:14,

      18:18,
      19:19,

      21:21,
      22:23,
      23:24,

      27:28,

      30:31,

      32:33
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

      21:18,
      22:19,
      23:20,

      27:23,

      30:26,

      32:28
    }
  }
}