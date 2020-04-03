import React from 'react' 

class MainFocus extends React.Component {
  constructor() { 
    super() 
    this.state = { 
      editMode: true, 
      focusToday: " "
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){ 
    const {value} = event.target
    localStorage.setItem('focusToday', value);
    this.setState({focusToday: value});
  }

  submitHandler(e) { 
    e.preventDefault();
    this.setState(prevState => ({ editMode: !prevState.editMode })) 
  }

  componentDidMount() { 
    const focusT = localStorage.getItem('focusToday');
    this.setState({focusToday: focusT});
  }

  render() { 
    const focusToday = () => { 
      if (this.state.editMode) {
      return (
        <form className="focus-content" onSubmit={this.submitHandler}>
          <h3 className="main-focus">What is your main focus for today?</h3>
          <input className="main-focus__input" type="text" autoComplete="off" onChange={this.handleChange}  />
        </form>
      )} else { 
        return ( 
          <div className="today-container">
            <p className="today">today</p>
            <p className="todaysFocus" onClick={this.submitHandler}>{ this.state.focusToday}</p>
          </div>
        )
      }
    }
    return ( 
      <div className="focus-wrapper">
        {focusToday()}
      </div>
    );
  }
}

export default MainFocus;