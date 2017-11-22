import React from 'react';



class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false
    }
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      complete: true
    })

  }

shouldComponentUpdate(nextProps, nextState){
  console.log('a');
  return true
}

componentWillUpdate(nextProps, nextState){
  console.log('b');
}
componentDidUpdate(prevProps, prevState){
  console.log('c');
}

componentWillReceiveProps(nextProps){
  console.log('d')
  if(nextProps !== this.props){
    this.setState({
      complete: true
    })
  }
}

componentWillMount(){
  console.log('e')
}

componentDidMount(){
  console.log('f')
}


render(){
  return(
    !this.state.complete ?
    <div>
      <li>{this.props.task}

        <button onClick={ (event)=> this.handleClick(event) }>complete</button>
      </li>
      <br></br>
      mission not complete
    </div>
    :
    <div>
      <li>{this.props.task}
      </li>
      <br></br>
      mission complete
    </div>
    )
  }
}



export default Todo;
