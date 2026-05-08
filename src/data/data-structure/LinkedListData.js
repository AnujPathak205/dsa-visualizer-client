export const linkedListData = {
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

};