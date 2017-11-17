import React from 'react';



class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false,
      newInput: "",
      updatedField: false
    }
    // manualling bind your functions here
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleProp = this.handleProp.bind(this);
  }

  handleUpdate(i){
    i.preventDefault();
    this.setState({
      newInput: i.target.value
    })
  }

  handleProp(i){
    i.preventDefault();
    this.props.update([this.props.task, this.state.newInput]);
    this.setState({
      updatedField: false
    })
  }


// Don't worry about the code below.
// There was a bug in the app where if you click complete on a task and then
// delete the task, the following task was marked complete.
// This function below prevents that behaviour from happenning.
// to learn more about how this method works below, check out react lifecycles.
// Docs-----
// https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops
componentWillReceiveProps(nextProps){
  if(nextProps !== this.props){
    this.setState({
      complete: false
    })
  }
}


render(){
  return(
    <div>
      <li>{this.props.task}
      {/* change  the below code from a function to a variable */}
        <button onClick={ ()=>this.props.del(this.props.task) }>Delete</button>

        {this.state.complete ?
          <button onClick={ ()=> this.setState({ complete: false })}>Not Complete</button>:

          <button onClick={ ()=> this.setState({ complete: true })}> Complete</button>
        }

        {this.state.updatedField ?
          <button onClick={ this.handleUpdate }> Update Complete</button>:
          <button onClick={ ()=> this.setState({ updatedField: true })}>Update</button>
        }
      </li>


      {this.state.updatedField ?
        <form onSubmit= { this.handleProp }>
        <input placeholder={ this.props.task } onChange={ this.handleUpdate }/>
        </form>
        :
        ""
      }

      {this.state.complete ? "mission complete" : "Mission NOT Complete"}
    </div>
    )
  }
}

export default Todo;
