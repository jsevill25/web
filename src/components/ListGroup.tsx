
function ListGroup(){
   
   const items = [
   	'Caracas',
   	'valencia',
   	'bolivar',
   	'barcelona',
   	'barinas'
   ];

   

return (
<>
	
<h1>List</h1>
{items.length == 0 && <p>no fund</p>  }
<ul className="list-group">
 {items.map((item , index) =>(<li className="list-group-item" key={item} onClick={()=> console.log(item,index)}>{item}</li>))
} 
</ul>
</>
);
 
}

export default ListGroup;
