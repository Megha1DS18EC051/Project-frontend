const Reducer=(cart=[],action)=>{
    if(action.type==="ADD"){
        let tempcart=cart.filter((productSweet)=>productSweet.id===action.payload.id);
        if(tempcart<1){
            return [...cart,action.payload];

        }
        else{
            return cart;
        }
    }if(action.type==="REMOVE")
    {
        return cart.filter((productSweet)=>productSweet.id!==action.payload.id);
    }
    if (action.type==="INCREASE"){
        let tempcart=cart.map((productSweet)=>{
            if(productSweet.id===action.payload.id){
                return {...productSweet,quantity:productSweet.quantity+1};
            }
            return productSweet;
        });
        return tempcart;
    }
    if (action.type==="DECREASE"){
        let tempcart=cart.map((productSweet)=>{
            if(productSweet.id===action.payload.id){
                return {...productSweet,quantity:productSweet.quantity-1};
            }
            return productSweet;
        });
        return tempcart;
    }
    return cart;

};

export default Reducer;