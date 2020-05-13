import React, { Component } from 'react'
import {Link} from  "react-router-dom";

export default class restaurant extends Component {
    render() {
        return (
            <div className="container d-flex flex justify-content-center">
                <div className="d-flex flex-row flex-wrap justify-content-around">
                {this.props.name === "" ? this.props.data.map(restro =>{
                    return(
                        <div className="card mb-3 bg-light shadow px-3" style={{"max-width": "540px","border":"none","borderRadius":"10px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={restro.restaurant.featured_image} className="card-img  my-3" alt="..." style={{"height":"200px"}} />
                    </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-center">{restro.restaurant.name}</h5>
                    <hr/>
                    <p className="card-text">Cuisine: {restro.restaurant.cuisines}</p>
                    <p className="card-text">Address: {restro.restaurant.location.address}</p>
                    <div>
                    <Link to="/review"><button className="btn btn-success float-right  " onClick={() => this.props.handleClick(restro.restaurant.id)}>Reviews</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
                    )
                }):!this.props.filterData[0]? <h3 className="text-secondary">No Restaurant Found!</h3> : this.props.filterData.map(restro =>{
                    return(
                        <div className="card mb-3 bg-light shadow px-3" style={{"max-width": "500px","border":"none","borderRadius":"10px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={restro.featured_image} className="card-img  my-3" alt="..." style={{"height":"200px"}} />
                    </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-center">{restro.name}</h5>
                    <hr/>
                    <p className="card-text">Cuisine: {restro.cuisines}</p>
                    <p className="card-text">Address: {restro.location.address}</p>
                    <div>
                    <Link to="/review"><button className="btn btn-success float-right  " onClick={() => this.props.handleClick(restro.id)}>Reviews</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
                    )
                }) }
                </div>
            </div>
    )
    }
}
