import React from 'react';
import axios from 'axios';
import Restaurant from "./component/restaurant";
import { Route, BrowserRouter} from "react-router-dom";
import Review from "./component/review";

class App extends React.Component {
  state={
    latitude: "",
    longitude: "",
    data: [],
    name: "",
    filterData: [],
    reviews:[]
  }

  handleClick = (id) =>{
    axios({
      method: 'GET',
      url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${id}`,
      headers: {
        "user-key": "a725a13c0e61675a1eb07e3df050cd20",
        "content-type": "application/json"
      }
    }).then(async response => {
      await this.setState({
        reviews:response.data.user_reviews
      })
      }).catch(error => {
        console.log(error);
      })
  }
  handleChange = async (e) => {
    await this.setState({
      name:e.target.value
    })
    let result =[];
    let item = this.state.name.toLocaleLowerCase();
    for(let i = 0; i < this.state.data.length; ++i){
      if(this.state.data[i].restaurant.name.toLocaleLowerCase().indexOf(item)=== 0){
        result.push(this.state.data[i].restaurant);
        this.setState({
          filterData: result
        })
      }
    }
  }
  componentDidMount = () => {
    const show =  async  (position) => { 
      await this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })

      axios({
        method: 'GET',
        url: 'https://developers.zomato.com/api/v2.1/search?lat=28.694937600000003&lon=77.3141978&cuisines=All',
        headers: {
          "user-key": "a725a13c0e61675a1eb07e3df050cd20",
          "content-type": "application/json"
        }
      }).then(async response => {
        
          this.setState({
            data: response.data.restaurants
          })
        }).catch(error => {
          console.log(error);
        })
    }
    
    if(navigator.geolocation){
      navigator.geolocation.watchPosition(show);
    }else{
      console.log("not supported")
    }
  }

  render(){
    
    return (
      <BrowserRouter>
        <Route exact path="/">
        <div className=" container col-md-4 mb-3">
        <input className="  form-control " type="text" placeholder="Search specific restaurant from the all restaurant..." onChange={ this.handleChange} />
        </div>
        {this.state.name === "" ? <h3 className="text-center mb-2">All Restaurant</h3> : <h3 className="text-center mb-2">Searched Restaurant</h3>}
        <Restaurant
        data ={this.state.data}
        filterData={this.state.filterData}
        name={this.state.name}
        handleClick={this.handleClick}
        />
        </Route>
        <Route path="/review">
          <Review
          reviews={this.state.reviews}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
