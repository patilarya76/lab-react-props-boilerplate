import './App.css';

function App(props) {
   //find using let how can styling be applied
  //  let galleryStyle={
  //  display:"grid",
  //  }
  console.log(props)
  let data = props.props;
   let styleMydiv={
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    marginLeft:"200px",
    
   }


   return(
    <>
    <h1 style={{textAlign:'center'}}>Kalvium Gallery</h1>
    <div style={styleMydiv}>
      <img  src={data[0].img} alt="" width={"500px"}/>
      <img src={data[1].img} alt="" width={"500px"}/>
      <img style={{marginTop:"50px"}} src={data[2].img} alt="" width={"500px"}/>
      <img style={{marginTop:"50px"}} src={data[3].img} alt="" width={"500px"}/>
    </div>
    
    </>
   )
}

export default App;
