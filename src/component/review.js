import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class review extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center text-secondary">All Reviews</h3>
                <Link to="/"><button className="btn btn-dark">Go to Home Page</button></Link>
                <table className="table mt-3 text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.reviews.map((data, index) => {
                            return (
                                <tr>
                                    <td><img src={data.review.user.profile_image} className="rounded-circle" alt="..." style={{"width":"40px"}} /></td>
                                    <td>{data.review.user.name}</td>
                                    <td className="text-secondary">{data.review.review_text}</td>
                                    <td className="text-warning">{data.review.rating} Star</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
