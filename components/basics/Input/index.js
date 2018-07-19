import React from 'react'
import classNames from 'classnames'

class Input extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.initialValue}
        className={className(this.props.newStyle ? "" : "textField", this.props.className)}
      />
    )
  }
}

export default Input;
