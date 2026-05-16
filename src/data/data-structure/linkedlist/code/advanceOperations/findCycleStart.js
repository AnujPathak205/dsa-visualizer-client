import { m } from "framer-motion";

export const findCycleStart = {
  java:`public void findCycleStart(){

    // 1. Initialize slow and fast pointers
    Node slow = head;
    Node fast = head;

    boolean isCycle = false;

    // 2. Detect cycle
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast){
            isCycle = true;
            break;
        }
    }

    // 3. No cycle found
    if(!isCycle){
        System.out.println("No Cycle");
        return;
    }

    // 4. Move slow to head
    slow = head;

    // 5. Find cycle start
    while(slow != fast){
        slow = slow.next;
        fast = fast.next;
    }

    // 6. Cycle start node
    System.out.println("Cycle starts at : " + slow.data);
}`,

  cpp:`void findCycleStart(){

    // 1. Initialize slow and fast pointers
    Node* slow = head;
    Node* fast = head;

    bool isCycle = false;

    // 2. Detect cycle
    while(fast != nullptr && fast->next != nullptr){
        slow = slow->next;
        fast = fast->next->next;

        if(slow == fast){
            isCycle = true;
            break;
        }
    }

    // 3. No cycle found
    if(!isCycle){
        cout << "No Cycle" << endl;
        return;
    }

    // 4. Move slow to head
    slow = head;

    // 5. Find cycle start
    while(slow != fast){
        slow = slow->next;
        fast = fast->next;
    }

    // 6. Cycle start node
    cout << "Cycle starts at : " << slow->data << endl;
}`,

  python:`def findCycleStart(self):

    # 1. Initialize slow and fast pointers
    slow = self.head
    fast = self.head

    isCycle = False

    # 2. Detect cycle
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            isCycle = True
            break

    # 3. No cycle found
    if not isCycle:
        print("No Cycle")
        return

    # 4. Move slow to head
    slow = self.head

    # 5. Find cycle start
    while slow != fast:
        slow = slow.next
        fast = fast.next

    # 6. Cycle start node
    print("Cycle starts at :", slow.data)`,

  pseudo:`FUNCTION findCycleStart()

    // 1. Initialize slow and fast pointers
    slow = head
    fast = head

    isCycle = false

    // 2. Detect cycle
    WHILE fast != null AND fast.next != null
        slow = slow.next
        fast = fast.next.next

        IF slow == fast
            isCycle = true
            BREAK
        END IF
    END WHILE

    // 3. No cycle found
    IF isCycle == false
        PRINT "No Cycle"
        RETURN
    END IF

    // 4. Move slow to head
    slow = head

    // 5. Find cycle start
    WHILE slow != fast
        slow = slow.next
        fast = fast.next
    END WHILE

    // 6. Cycle start node
    PRINT slow.data

END FUNCTION`,

    lines:{
        pseudo:{

        },

        python:{
            
        }
    }
};