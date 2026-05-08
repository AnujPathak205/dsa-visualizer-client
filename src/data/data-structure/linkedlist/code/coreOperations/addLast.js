export const addLast = {
  java:`public void addLast(int data){
  // 1. Creating new Node
  Node newNode = new Node(data);

  if(head == null){
      head = tail = newNode;
      size++;
      return;
  }

  // 2. tail.next <- newNode
  tail.next = newNode;

  // 3. tail <- newNode
  tail = newNode;

  size++;
}
`,

  cpp:`void addLast(int data){
  // 1. Creating new Node
  Node* newNode = new Node(data);

  if(head == nullptr){
      head = tail = newNode;
      size++;
      return;
  }

  // 2. tail->next = newNode
  tail->next = newNode;

  // 3. tail = newNode
  tail = newNode;

  size++;
}
`,

  python:`def addLast(self, data):
  # 1. Creating new Node
  newNode = Node(data)

  if self.head is None:
      self.head = self.tail = newNode
      self.size += 1
      return

  # 2. tail.next = newNode
  self.tail.next = newNode

  # 3. tail = newNode
  self.tail = newNode

  self.size += 1`,

  pseudo:`FUNCTION addLast(data)
    // 1. Creating new Node
    newNode = CREATE NODE(data)

    IF head == null
        head = tail = newNode
        size = size + 1
        RETURN
    END IF

    // 2. tail.next <- newNode
    tail.next = newNode

    // 3. tail <- newNode
    tail = newNode

    size = size + 1

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,
      3:3,
      5:5,
      6:6,
      7:7,
      8:8,
      12:12,
      15:15,
      17:17
    },

    python:{
      1:1,
      3:3,
      5:5,
      6:6,
      7:7,
      8:8,
      12:11,
      15:14,
      17:16
    }
  }
}