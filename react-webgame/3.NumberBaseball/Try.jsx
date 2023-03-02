// import React, { memo } from 'react';

// const Try = memo(({tryInfo}) => {
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div>{tryInfo.result}</div>
//     </li>
//   );
// });

// export default Try;

import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <div>index : {this.props.index} value : {this.props.value}</div>
            </li>
        )
    }
}

export default Try;