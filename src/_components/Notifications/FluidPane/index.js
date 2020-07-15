import React from 'react'; 
import { NavLink } from 'react-router-dom';

class FluidPane extends React.Component {
    render() {
      return (
          <div className="text-center py-2" style={{height:"100px !important"}}>
             <div className="mb-0 pb-0 bg-dark position-absolute w-100 top-0 py-3" >
                 <p className="text-white font-weight-bolder">Find out how PensionAnalytica is #KeepingTheLightsOn for businesses during COVID-19. <NavLink to="/login" className="btn btn-sm rounded-pill btn-outline-warning ">Learn More</NavLink></p>
                 <br/> <br/> <br/>
             </div>
          </div>
      );
    }
}

export default FluidPane;