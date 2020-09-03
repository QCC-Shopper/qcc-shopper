import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
class AddUser extends Component {
    constructor() {
        super()
        this.state = {

            name: "",
            email: "",
            address: "",
            password: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }
    async handleSubmit(event) {
        console.log(this.state)

        event.preventDefault()
        try {
            const response = await axios.post("/sign_up", this.state)
            console.log(response)
        } catch (err) { console.error(err) }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="sign_up-container">
                <div className="child_container1">
                    <text>
                        <p className="welcome-msg">
                            Welcome to LeetRide <br />
                        </p>
                        <p className="slogan">
                            Home of Luxurious cars
                        </p>
                    </text>
                </div>
                <div className="child_container2" id="form-control">
                    <p>Create Your Account</p>
                    <div class="form_input">

                        <label>
                            <input placeholder="Name" value={this.state.name} onChange={this.handleChange} id="name" type="text" name="name" />
                        </label>

                        <label>
                            <input placeholder="Email" value={this.state.email} onChange={this.handleChange} id="email" type="email" name="email" />
                        </label>

                        <label>
                            <input placeholder="Address" value={this.state.address} onChange={this.handleChange} id="address" type="text" name="address" />
                        </label>

                        <label>
                            <input placeholder="Password" value={this.state.password} onChange={this.handleChange} id="password" type="password" name="password" />
                        </label>
                    </div>
                    <div className="submit">
                        <input type="submit" />

                    </div>
                </div>
            </form>
        )
    }
}
export default AddUser