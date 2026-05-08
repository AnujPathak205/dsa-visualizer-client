export const addFirst = {
    java:`public void addFirst(int data){
  //1. Creating new Node
  Node newNode = new Node(data);

  if(head == null){
      head = tail = newNode;
      size++;
      return;
  }

  //2. newNode's next <- head
  newNode.next = head;

  //3.head <- newNode
  head = newNode;

  size++;
}
`,
     cpp:`void addFirst(int data) {
  // 1. Create new node
  Node* newNode = new Node(data);

  if (head == nullptr) {
      head = tail = newNode;
      size++;
      return;
  }

  // 2. newNode->next = head
  newNode->next = head;

  // 3. head = newNode
  head = newNode;

  size++;
}
`,   python:`def addFirst(self, data):
  # 1. Create new node
  newNode = Node(data)

  if self.head is None:
      self.head = self.tail = newNode
      self.size += 1
      return

  # 2. newNode.next = head
  newNode.next = self.head

  # 3. head = new_node
  self.head = new_node

  self.size += 1`,

  pseudo:`FUNCTION addFirst(data)
    // 1. Create new node
    newNode = CREATE NODE(data)

    IF head == null
        head = tail = newNode
        size = size + 1
        RETURN
    END IF

    // 2. Link new node to head
    newNode.next = head

    // 3. Move head to new node
    head = newNode

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