import React, { Component } from "react"
import axios from "axios"
class AddUser extends Component {
    constructor(){
        super()
        this.state={

                name:"",
                email:"",
                address:"",
                password:""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]:value,
        })
    }
    async handleSubmit(event){
        console.log(this.state)

        event.preventDefault ()
        try{
            const response = await axios.post("/user", this.state)
            console.log(response)
        }catch(err){console.error(err)}
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Create Your Account</div>
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
                        <input  placeholder="Password" value={this.state.password} onChange={this.handleChange} id="password" type="password" name="password" />
                </label>
                <div>
                    <input type="submit"/>
                    </div>
            </form>
        )
    }
}
export default AddUser