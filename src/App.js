import { Routes, Route} from "react-router-dom";
import ColorElement from './components/ColorElement';
import Nav from './components/Nav';




function App() {



  return(
        <>

        <div className='mainContainer'>
           <div className="content-container">
              <Nav />
            <Routes>
                <Route  path="/"/>
                <Route  path="/create" />
                <Route  path="/tippy" element={<ColorElement/>}/>
                <Route  path="/favorite"/>
                <Route  path="/mypost"/>


                

            </Routes>
           </div>

        </div>

            
        </>

      
    );


}

export default App;
