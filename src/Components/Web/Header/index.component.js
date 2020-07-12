import React from 'react';
import WNavBar from './NavBar/index.component';
import WBanner from './Banner/index.component';


class WHeader extends React.Component {
    render() {
      return (
        <div className="bg-primary">
            <WNavBar/>
            <WBanner/>
        </div>
      );
    }
}
export default WHeader;
