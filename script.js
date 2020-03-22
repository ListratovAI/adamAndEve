class God{
    /**
     * @returns Human[]
     */
      static create(){
        let man = new Man ();
        let woman = new Woman ();
    
        return [man, woman];
        // code
      }
    }
    class Human {
    }
    
    class Man extends Human {
    }
    
    class Woman extends Human {
    }
    