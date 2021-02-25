import React from 'react';

export default class SearchBar extends React.Component{
     constructor(props){
         super(props)

         this.state={term:''};
        
         this.onTermSubmit = this.onTermSubmit.bind(this);
     }
 
     

     onTermSubmit(event) {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
     }
    render(){
        return(
            <div className="search-bar ui segment">
             <form className="ui form" onSubmit={this.onTermSubmit}>
                 <div className="field">
                 <label>Video Search</label>
                 <input type="text" onChange={e => {this.setState({term:e.target.value})}} value={this.state.term} />
                 </div>
             </form>
            </div>
        )
    }
}

