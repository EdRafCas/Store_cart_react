import {useParams} from  'react-router-dom';
import GalleryProducts from './../Elements/ProductList';


const Product = (props) => {
      const {id} =useParams();
      

      return ( 
            <>
                  {GalleryProducts[id-1] ?
                  <div>
                        <h1>{GalleryProducts[id-1].name}</h1>
                        <h1>{GalleryProducts[id-1].price}</h1>
                  </div>
                  :
                  ""
                  }
            </>
       );
}
 
export default Product;