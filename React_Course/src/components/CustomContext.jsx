class Context {    // Context is class, then we will make a constructor 
    constructor(value){
        this.value = value;
    };

    Provider = ({children , value}) => {  // Provider is method
        this.value = value;
        return children;
    };
    Consumer = ({children}) => children(this.value);  // Consumer is another method
}

function createContext (value= null){
    const context = new Context(value);
    return {
        Provider : context.Provider,
        Consumer : context.Consumer
    }
};
export default createContext;