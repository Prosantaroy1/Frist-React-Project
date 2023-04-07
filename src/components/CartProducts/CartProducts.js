import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async() =>{
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();
   // console.log(products);
        const storedCard = getShoppingCart();
        const savedCard = [];
        //console.log(storedCard);
        //step 1
        for(const id in storedCard){
            //step 2
            const addedProduct = products.find(product => product.id === id);
            //step 3
            if(addedProduct){
                const qunatity = storedCard[id];
                addedProduct.qunatity = qunatity;
                //step 4
                savedCard.push(addedProduct);
            }
        
    }
    return savedCard;
}
export default cartProductsLoader;