export const isEmpty = {
  java:`public void isEmpty(){
  // 1. Check condition
  if(size == 0){
      System.out.println(true);
  }else{
      System.out.println(false);
  }
}`,

  cpp:`void isEmpty(){
  // 1. Check condition
  if(size == 0){
      cout << true << endl;
  }else{
      cout << false << endl;
  }
}`,

  python:`def isEmpty(self):
    # 1. Check condition
    if self.size == 0:
        print(True)
    else:
        print(False)`,

  pseudo:`FUNCTION isEmpty()

    // 1. Check condition
    IF size == 0
        PRINT true
    ELSE
        PRINT false
    END IF

END FUNCTION`,

  lines:{
    pseudo:{
      1:1,

      3:4,
      4:5,
      5:6,
      6:7
    },

    python:{
      1:1,

      3:3,
      4:4,

      6:6
    }
  }
}