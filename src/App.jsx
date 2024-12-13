import { list } from "postcss";
import products from "./data";
function App(){
    const listProducts= products.map(prod => <li>{prod.title}</li>) 

return(
    <>
    <section>{listProducts}</section>
    </>
);
}
export default App;