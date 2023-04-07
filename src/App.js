import './App.css';
import { UseFetch } from './useFetch';

function App() {
  

  const { data , loading , error }=UseFetch();
  //console.log("estamos fuera",data.pagination);
  
  const handleOpen=(x)=>{
   alert("Estamos: "+x);
    //return <input type="text" value={x}/>;
  }
  return (
    <div className="App">
      <h1>Fetch like a PRO</h1>
      
      <div className='card'>
        {error && <h2>Error:{error}</h2>}
        {loading && <h2>loading...</h2>}
        <ul className='mapeo'>
          {data?.map((x)=>{return (<li key={x.pagination.count}>hola</li>)})}
          {/*data?.map((user)=><li key={user.id}>{user.name}</li>)*/}     
        </ul> 
      </div>
    </div>
  );
}

export default App;