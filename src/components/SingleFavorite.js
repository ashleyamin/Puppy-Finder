import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

//const SingleFavorite = () => {
class SingleFavorite extends Component {
    constructor() {
        super();
        this.state = {
          dataLoaded: false,
          puppyData: null,
          opinionsData: null,
          notes: '',
          op_Id: 1,
          fireRedirect: false,
        }
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
    }
    componentDidMount () {
      axios.all ([
        axios.get(`/api/puppy/${this.props.match.params.id}`),
        axios.get('/api/opinions')
        ])
      .then(axios.spread((puppy, opinions) => {
        this.setState({
        dataLoaded: true,
        puppyData: puppy.data.data,
        opinionsData: opinions.data.data,
        notes: puppy.data.data.notes,
        op_Id: puppy.data.data.op_id,
      })
      console.log(this.state.puppyData);
    }))
    .catch(err => {
      console.log('inside singlefavorite err', err);
    })
  }
    handleFormChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value,
      })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        axios
            .post(`/api/puppy/${this.props.match.params.id}`, {
                id: this.props.match.params.id,
                op_ID: this.state.op_Id,
                notes: this.state.notes,

            })
            .then(res => {
                this.setState({
                    fireRedirect: true,
                });
            })

            .catch(err => console.log(err));

    }
    removeFavorite() {
        axios.delete(`/api/puppy/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    fireRedirect:true
                })
            })
            .catch(err => { console.log(err)})
    }
    showSingleFavorite() {
      return(
              <div className="singlefave">
                <div className="solopupper">
                  <img src={this.state.puppyData.photourl} />
                  <h2>{this.state.puppyData.name}</h2>
                  <p>{this.state.puppyData.description}</p>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                    <select name="op_Id" value={this.state.op_Id} onChange={this.handleFormChange}>
                      <option value="1">Good Dog</option>
                      <option value="2">Great Dog</option>
                      <option value="3">Best Dog</option>
                    </select>

                    {/* within the same form add a label notes for a textarea for comments and details with Save/Submit button */}
                    <textarea value={this.state.notes} name="notes" onChange={this.handleFormChange} />

                    {/* Button for remove(delete from favorites table & data from {notes and 'rating' table}) */}
                    <button>Submit</button>

                    {/* Button for remove(delete from favorites table & data from {notes and 'rating' table}) */}
                </form>
                <button onClick={this.removeFavorite}>Delete</button>
                {this.state.fireRedirect ? <Redirect push to={`/favorites`} /> : ''}
              </div>
        )
    }
    render() {

        return (
            <div className="SingleFavorite">
              { this.state.dataLoaded ? this.showSingleFavorite() : '' }
              <button><Link to="/favorites">Back to Your Favorites</Link></button>
            </div>

        )

    }

}

export default SingleFavorite;
