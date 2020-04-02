import React from 'react' 

class Clock extends React.Component { 
  constructor(){ 
    super()
    const time = new Date()
    this.state = { 
      hours: time.getHours(),
      minutes: time.getMinutes()
    }
  }

  currentTime() { 
    const time = new Date()
    let hrs = time.getHours()
    let min = time.getMinutes()
    if(hrs !== this.state.hours || min !== this.state.minutes){ 
      this.setState( { hours: hrs, minutes: min } )
    }
  }

  componentDidMount(){ 
    setInterval( () => this.currentTime(), 1000)
  }

  render(){ 
    return( 
      <div className="clock"> 
        { 
        this.state.hours === 0 ? 12 : (this.state.hours > 12) ? this.state.hours - 12 : this.state.hours 
        }:{ 
        this.state.minutes > 9 ? this.state.minutes : `0${this.state.minutes}`
        }
      </div>
    )
  }
}

export default Clock 