
import Product from './Product';


const Page2 = ({ products, onPlus, onMinus, onDelete, onReset }) => { 


  return (
    <div className="d-flex justify-content-center flex-wrap gap-3 p-4 mt-5"> 
      <button className="btn btn-primary d-flex justify-content-center flex-wrap gap-3 p-4 mt-5"
      onClick={onReset} 
      >reset</button>
      {products.map((p,index) => (
        <Product onDelete={onDelete} 
        onPlus={onPlus} 
        onMinus={onMinus} 
        id={p.id} key={index} title={p.title} count={p.count}>
          <p>{p.aboutProduc}</p>
        </Product>
      ))}
    </div>
  );

  
};

export default Page2;