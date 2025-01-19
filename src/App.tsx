// import ListGroup from "./components/ListGroup";

// //parent component

// function App() {
//   let items = [ //rendering list of items dynamically.
//         'New York',
//         'San Francisco',
//         'Tokyo',
//         'London',
//         'Paris'
//     ];

//     const handleSelectItem = (item: string) => { //handling the item event as function
//       console.log(item);
//     }

//   return <div><ListGroup items={items} heading = "Cities" onSelectItem={handleSelectItem}/></div> ;
//   //here we pass items,heading,and handleSelectItem function as prop to the child component
  
// }

// export default App;


import Alert from "./components/alert";



function App() {


  return <div><Alert>
    Hi <span>AI Engineer</span>
    </Alert></div> ;
 
  
}

export default App;