// function ListGroup() {
//     return <>
//       <h1>List</h1>
//       <ul className="list-group">
//       <li className="list-group-item">An item</li>
//       <li className="list-group-item">A second item</li>
//       <li className="list-group-item">A third item</li>
//       <li className="list-group-item">A fourth item</li>
//       <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </>
  
// }

// export default ListGroup;


function ListGroup() {
    let items = [ //rendering list of items dynamically.
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    items = [];

    if (items.length === 0)
        return <>
        <h1>List</h1>
        <p>No item found</p>;
</> 
        
    return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
            <li key={item}>{item}</li>
            ))}
      </ul>
    </>
    );
  
}

export default ListGroup;




//conditional rendering 

// conditional rendering using curly braces. 

// function ListGroup() {
//     let items = [ //rendering list of items dynamically.
//         'New York',
//         'San Francisco',
//         'Tokyo',
//         'London',
//         'Paris'
//     ];

//     items = [];

//     return (
//     <>
//       <h1>List</h1>
//     { items.length === 0 ? <p>No item found</p> : null} 
//       <ul className="list-group">
//         {items.map((item) => (
//             <li key={item}>{item}</li>
//             ))}
//       </ul>
//     </>
//     );
  
// }

// export default ListGroup;