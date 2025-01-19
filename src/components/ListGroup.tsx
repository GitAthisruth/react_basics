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


// function ListGroup() {
//     let items = [ //rendering list of items dynamically.
//         'New York',
//         'San Francisco',
//         'Tokyo',
//         'London',
//         'Paris'
//     ];

//     items = [];

//     if (items.length === 0)
//         return <>
//         <h1>List</h1>
//         <p>No item found</p>;
// </> 
        
//     return (
//     <>
//       <h1>List</h1>
//       <ul className="list-group">
//         {items.map((item) => (
//             <li key={item}>{item}</li>
//             ))}
//       </ul>
//     </>
//     );
  
// }

// export default ListGroup;


//OR

// //conditional rendering 

// // conditional rendering using curly braces. 

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
//     { items.length === 0 ? <p>No item found</p> : null} // // condtional render
//       <ul className="list-group">
//         {items.map((item) => (
//             <li key={item}>{item}</li>
//             ))}
//       </ul>
//     </>
//     );
  
// }

// export default ListGroup;




// // OR


// function ListGroup() {
//     let items = [ //rendering list of items dynamically.
//         'New York',
//         'San Francisco',
//         'Tokyo',
//         'London',
//         'Paris'
//     ];

//     items = [];

//     // const message = items.length === 0 ? <p>No item found</p> : null

//     const getMessage = () => { //declare a function

//         return items.length === 0 ? <p>No item found</p> : null
//     }

//     return (
//     <>
//         <h1>List</h1>
//         {getMessage()} 
//       <ul className="list-group">
//         {items.map((item) => (
//             <li key={item}>{item}</li> //key used to find elements
//             ))}
//       </ul>
//     </>
//     );
  
// }

// export default ListGroup;



//OR


// function ListGroup() {
//     let items = [ //rendering list of items dynamically.
//         'New York',
//         'San Francisco',
//         'Tokyo',
//         'London',
//         'Paris'
//     ];

//     items = []; //here we reassign item list as empty.

//     // const message = items.length === 0 ? <p>No item found</p> : null

//     const getMessage = () => { //declare a function

//         return items.length === 0 ? <p>No item found</p> : null
//     }

//     return (
//     <>
//         <h1>List</h1>
//         {items.length === 0 ? <p>No item found</p> : null} 
//         {items.length === 0 && <p>No item found</p>} // // && true or false true then <p> item print.
//       <ul className="list-group">
//         {items.map((item) => (
//             <li key={item}>{item}</li> //key used to find elements
//             ))}
//       </ul>
//     </>
//     );
  
// }

// export default ListGroup;



//Handling Items


function ListGroup() {
    let items = [ //rendering list of items dynamically.
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];


    return (
    <>
        <h1>List</h1>
        {items.length === 0 ? <p>No item found</p> : null} 
      <ul className="list-group">
        {items.map((item) => (
            <li className="list-group-item" key={item} onClick={() => console.log('Clicked')}
            >
            {item} 
            </li> 
            ))}
      </ul>
    </>
    );
  
}

export default ListGroup;