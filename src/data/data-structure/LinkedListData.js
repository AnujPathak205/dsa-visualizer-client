export const linkedListData = {
  title: "Linked List",

  description: "A linear data structure where elements are stored in nodes and linked using pointers.",

  explanation: `
Linked List consists of nodes.
Each node contains:
1. Data
2. Pointer to next node

Elements are not stored in contiguous memory.

Types:
- Singly Linked List
- Doubly Linked List
  `,

  operations: [
    {
      name: "Insertion",
      description: "Add node at beginning, middle, or end"
    },
    {
      name: "Deletion",
      description: "Remove node"
    },
    {
      name: "Traversal",
      description: "Visit each node sequentially"
    }
  ],

  complexity: [
    {
      opName: "access",
      TC: "O(n)"
    },
    {
      opName: "insertion",
      TC: "O(1)"
    },
    {
      opName: "deletion",
      TC: "O(1)"
    },
    {
      opName: "space",
      TC: "O(n)"
    }
  ],

  complexityForOperations:{

  addFirst:{
    TC:"O(1)",
    SC:"O(1)",
    reason:"Only updates head pointer, no traversal needed"
  },

  addLast:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Requires traversal to reach last node (if no tail pointer)"
  },

  add:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Traversal needed to reach given index"
  },

  removeFirst:{
    TC:"O(1)",
    SC:"O(1)",
    reason:"Only updates head to next node"
  },

  removeLast:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Need to traverse to second last node"
  },

  remove:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Traversal required to reach node before target index"
  },

  traverse:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Visits every node once"
  },

  get:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Requires traversal to reach index"
  },

  update:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Traversal needed before updating value"
  },

  search:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"May need to check every node in worst case"
  },

  isEmpty:{
    TC:"O(1)",
    SC:"O(1)",
    reason:"Only checks if head is null or size is 0"
  },

  size:{
    TC:"O(1)",
    SC:"O(1)",
    reason:"If size variable maintained, direct return"
  },

  midNode:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Single pass using slow and fast pointers"
  },

  reverse:{
    TC:"O(n)",
    SC:"O(1)",
    reason:"Each node is visited once and pointers are reversed in-place"
  },
},

  code: {
    basic:{
    java: `
// Java LinkedList Example
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
    `,

    cpp: `
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = NULL;
    }
};
    `,

    python: `
# Python Linked List Example
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    `
  },

  addFirst:{
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

  self.size += 1`
  },

  addLast:{
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

  self.size += 1`
},

removeFirst:{
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

  self.size -= 1`
},

removeLast:{
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

  self.size -= 1`
},

add:{
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
}
`,

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
}
`,

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

  self.size += 1`
},

remove:{
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

  self.size -= 1`
},

traverse:{
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

  print("null")`
},get:{
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
`
},

update:{
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
`
},

search:{
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
}
`,
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
}
`,
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
    print("NOT FOUND")
`
},

isEmpty:{
  java:`public void isEmpty(){
  // 1. Check condition
  if(size == 0){
      System.out.println(true);
  }else{
      System.out.println(false);
  }
}
`,
  cpp:`void isEmpty(){
  // 1. Check condition
  if(size == 0){
      cout << true << endl;
  }else{
      cout << false << endl;
  }
}
`,
  python:`def isEmpty(self):
    # 1. Check condition
    if self.size == 0:
        print(True)
    else:
        print(False)
`
},

size:{
  java:`public void size(){
  // 1. Print size
  System.out.println(size);
}
`,
  cpp:`void size(){
  // 1. Print size
  cout << size << endl;
}
`,
  python:`def size(self):
    # 1. Print size
    print(self.size)
`
},
midNode:{
  java:`public void findMiddle(){
  // 1. Initialize slow and fast pointers
  Node slow = head;
  Node fast = head;

  // 2. Traverse list
  while(fast != null && fast.next != null){
      slow = slow.next;
      fast = fast.next.next;
  }

  // 3. Middle node
  System.out.println(slow.value);
}
`,
  cpp:`void findMiddle(){
  // 1. Initialize slow and fast pointers
  Node* slow = head;
  Node* fast = head;

  // 2. Traverse list
  while(fast != NULL && fast->next != NULL){
      slow = slow->next;
      fast = fast->next->next;
  }

  // 3. Middle node
  cout << slow->value << endl;
}
`,
  python:`def findMiddle(self):
    # 1. Initialize slow and fast pointers
    slow = self.head
    fast = self.head

    # 2. Traverse list
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        

    # 3. Middle node
    print(slow.value)
`
}
  },

  realLifeExample: `
Linked List is like a treasure hunt:
Each clue (node) tells you where the next clue is.
You cannot directly jump to a position.
  `,

  questions: [
    {
      question: "What does each node contain?",
      answer: "Data and pointer to next node"
    },
    {
      question: "Is linked list stored in contiguous memory?",
      answer: "No"
    },
    {
      question: "What is time complexity of access?",
      answer: "O(n)"
    }
  ],

  quiz: [
  { question: "What is a linked list?", options: ["A linear data structure with contiguous memory", "A linear data structure of nodes connected by pointers", "A stack-like structure", "A queue-like structure"], answer: "A linear data structure of nodes connected by pointers" },
  { question: "Which node points to the first node in a linked list?", options: ["Tail", "Head", "Root", "Top"], answer: "Head" },
  { question: "What is the time complexity to access the middle element in a singly linked list?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(n)" },
  { question: "Which linked list allows traversal in both directions?", options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Stack"], answer: "Doubly Linked List" },
  { question: "Which linked list forms a circle?", options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Stack"], answer: "Circular Linked List" },
  { question: "Insertion at the beginning of a linked list takes what time?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },
  { question: "Deletion at the end of a singly linked list takes what time?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(n)" },
  { question: "Which of these is a real-world analogy for a linked list?", options: ["Train of carriages", "Stack of plates", "Queue of people", "Books on a shelf"], answer: "Train of carriages" },
  { question: "Which pointer is used in a doubly linked list to traverse backward?", options: ["Next", "Previous", "Head", "Tail"], answer: "Previous" },
  { question: "Why is a linked list preferred over an array in dynamic memory?", options: ["Faster indexing", "Flexible size", "Less memory", "Sorted order"], answer: "Flexible size" }
],

practiceLink: [
  "https://leetcode.com/problems/reverse-linked-list/",
  "https://leetcode.com/problems/merge-two-sorted-lists/",
  "https://leetcode.com/problems/linked-list-cycle/"
]};