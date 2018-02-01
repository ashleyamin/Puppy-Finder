import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

//const SingleFavorite = () => {
class SingleFavorite extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            breed: '',
            photourl: '',
            sex: '',
            description: '',
            altered: '',
            housetrained: '',
            shelternumber: '',
            op_id: '',
            notes: ''

        }

    }

    componentDidMount () {
        axios.get(`/api/puppy/${this.props.match.params.id}`)
            .then(res => {
                const favorite = res.data.data;

                this.setState({
                name: favorite.name,
                image: favorite.photourl,
                sex: favorite.sex,
                altered: favorite.altered,
                description: favorite.description,
                opinion: favorite.op_id,
                shelter: favorite.shelternumber,
                notes: favorite.notes

                })

            })
            .catch(err => console.log(err));

    }

    handleFormSubmit(e) {
        e.preventDefault();
        axios
            .put(`/route/${this.props.match.params.id}`, {
                opinion: this.state.opinion,
                notes: this.state.notes

            })
            .then(res => {
                this.setState({
                    updateFavorite: res.data.id,
                    fireRedirect: true,

                });

            })

            .catch(err => console.log(err));

    }

    removeFavorite() {
        axios.delete(`/route/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    fireRedirect:true

                })

            })
            .catch(err => { console.log(err)})

    }

    render() {

        return (
            <div className="SingleFavorite">
                // Render image file(s) of favorite dog
                <img src={this.state.photourl} />
                // Use <h2></h2> for name of puppy... ie. {this.props.id.name}
                <h2>{this.state.name}</h2>
                // Begin a from with a dropdown list which renders options for user to choose rating (*good, **great, ***greater interest...)

                <form>

                    <select>
                        <optgroup>
                            <option name="good" value="Good Dog"></option>
                            <option name="great" value="Good Dog"></option>
                            <option name="best" value="Good Dog"></option>

                        </optgroup>

                    </select>

                    {/* within the same form add a label notes for a textarea for comments and details with Save/Submit button */}
                    <textarea value={this.state.notes} name="notes">


                    </textarea>

                    {/* Button for remove(delete from favorites table & data from {notes and 'rating' table}) */}
                    <button onClick={handleFormSubmit(event)}>Submit</button>

                    {/* Button for remove(delete from favorites table & data from {notes and 'rating' table}) */}
                    <button onClick={remoteFavorite()}>Delete</button>
                    {this.state.fireRedirect ? <Redirect push to={`/favorites`} /> : ''}

                </form>

            </div>

        )

    }

}

export default SingleFavorite;