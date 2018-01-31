import React, {Component} from 'react';

class Results extends Component {
  constructor () {
    super();
    this.state = {

    }
  }

  //make the api call to puppy_dev database
  componentDidMount () {
    axios.get ('')
      .then(res => {
        this.setState({
      })
    })
  }

  render() {
    return(
      <div className='results'>
      </div>
      )
  }

}

export default Results;
