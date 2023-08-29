
import './App.css';
import User from './Components/User';
// import './Redux/store'
// import Form from './Form'
// import Account from './Redux/Account'
import Sample from './Components/Sample';


function App() {
  return (
    <>
      {/* // <div className="App"> */}
      {/* // <h1>Welcome to TShop</h1> */}
      {/* // </div> */}
      {/* // <h1>Redux Example</h1> */}
      {/* <Form/> */}
      {/* <Account /> */}
      <Sample/>
      <User name='Sathish' age='24'/>
      <User name='rama' age='26'/>
    </>
  );
}

export default App;
