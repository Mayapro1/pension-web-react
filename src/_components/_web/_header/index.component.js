import React from 'react';
import WNavBar from './_navbar/index.component';
import WBanner from './_banner/index.component';
import FluidPane from '../../Notifications/FluidPane';


class WHeader extends React.Component {
    render() {
      return (
        <div className="bg-primary">
          <FluidPane/>
            <WNavBar/>
            <WBanner/>
        </div>
      );
    }
}
export default WHeader;
