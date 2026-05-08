export const size = {
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
`,

  pseudo:`FUNCTION size()

    // 1. Print size
    PRINT size

END FUNCTION`,


  lines:{
    pseudo:{
      1:1,
      3:4
    },

    python:{
      1:1,
      3:3
    }
  }
};