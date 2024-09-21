import axios  from 'axios';
import { createContext, useEffect, useState } from "react";


/* 
*context API 
*Uygulamada birden çok bileşenin ihtiyacı olan verileri
*bileşenlerden tamamen bağımsız bir şekilde merkezi bir noktada
konumlandıran merkezlerde yönetmeye yarar
* Verileri ve verileri değiştirmeye yarayan 
fonksiyonları tutar
* context tuttuğumuz değişkenleri bileşenler 
doğrudan aktarım yapabilen merkezi state yönetim aracıdır.
*/

// Context Yapısının temelini oluştuurma 
export const ProductContext = createContext();

// sağlayıcı ve onun tuttuğu verileri tanımlama
export function ProductProvider( {children}) {
 const [products , setProducts] =useState(null);
 const [selectedCategory, setSelectedCategory] = useState(null);


 useEffect(() => {
   // kategori yoksa atacağı istek linki:
   // https://fakestoreapi.com/products
   // kategori varsa : 
   //https://fakestoreapi.com/products/category/category_ismi


    axios
      .get(`https://fakestoreapi.com/products${selectedCategory ? "/category/"+ 
         
         selectedCategory : ''
       }`
      )

      .then((res) => setProducts(res.data));
  }, [selectedCategory]);


    //context yapısında tuttuğumuz verileri bileşenler sağlar
     return (
      <ProductContext.Provider 
      value={{ products, setSelectedCategory }}>
      {children}
     </ProductContext.Provider>
     );
}