import React from 'react';


var Iframe = React.createClass({     
  render: function() {
    return(         
      <div>          
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
      </div>
    )
  }
});

class App extends React.Component {
  render() {
    return (
      <main>  

     <h1>Iframe test </h1>
     <iframe src="https://calculator-react-ugbq6sejbq-uc.a.run.app/" title="test">  </iframe>
  </main>
    );
  }
}

export default App;
