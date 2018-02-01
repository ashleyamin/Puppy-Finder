import React from 'react';

const SingleFavorite = () => {

    render() {

        return (
            <div className="SingleFavorite">
                // Render image file(s) of favorite dog
                // Use <h2></h2> for name of puppy... ie. {this.props.id.name}
                // Begin a from with a dropdown list which renders options for user to choose rating (*good, **great, ***greater interest...)

                <form name={formname} >
                    <select name={}>
                        <optgroup>
                            <option value={$1}></option>
                            <option value={$2}></option>
                            <option value={$3}></option>

                        </optgroup>

                    </select>

                    // within the same form add a label notes for a textarea for comments and details with Save/Submit button
                    <textarea name={}>


                    </textarea>

                    // Button for remove(delete from favorites table & data from {notes and 'rating' table})
                    <button onClick={handleClick = ()=> {}}>Submit</button>

                    // Button for remove(delete from favorites table & data from {notes and 'rating' table})
                    <button onClick={handleClick = ()=> {}}>Delete</button>

                </form>

            </div>

        )

    }

}

export default SingleFavorite;