import React, {Suspense} from "react";
// const RemoteApp = React.lazy(() => import("app2/App"));
import RemoteApp from 'app2/App'
const FrictionData = React.lazy(() => import('app2/FrictionData'));  // Correct import

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>Product Listing</h1>
      </div>
      {/* <Suspense fallback={"loading..."}> */}
        <RemoteApp/>
        <React.Suspense fallback={<div>Loading Header...</div>}>
        <FrictionData />
      </React.Suspense>
      {/* </Suspense> */}
    </div>)
}


export default App;
