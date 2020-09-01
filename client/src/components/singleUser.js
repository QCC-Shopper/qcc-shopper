
import React, { Component } from "react"

class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.location.query.id
        }
    }
    async componentDidMount() {
        const data = await fetch(`user/${this.state.user}`);
        const userInfo = await data.json()
        this.setState({
            user: userInfo
        })

        console.log(this.state.user)
    }

    render() {
        const userState = this.state.user
        return (
            <div>
                <div id="singleUser" className="orderDetails">
                    <div className="container1">
                        <div className="shopper">
                            <a href="homepage placeholder">
                                QCC-Shopper Logo
                            </a>
                            <a href="cartRoute">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/shopping-bag-1683006-1440921.png" width="50" height="50" />
                            </a>
                        </div>

                        <div className="personalInfo">
                            <div className="userImage">
                                <img src={userState.imageUrl} width="80" height="70" />
                                <button id="upload">Upload</button>
                            </div>
                            <div className="hidden">
                                <div className="name">Hi {userState.name}</div>
                                <address className="address">{userState.address}</address>
                                <div className="description">description placeholder</div>
                            </div>
                        </div>
                    </div>
                    <div className="main-container">

                        <ul className="orders">
                            Orders

                        <a href={"placeholder"}>
                                <li>placeholder: user X order names</li>
                            </a>
                        </ul>
                        <div className="right">

                            <div className="personal">
                                Personal Information
                                <div>Name: {userState.name}</div>
                                <address>Address: {userState.address}</address>
                                <div>description placeholder</div>
                        </div>
                            <div className="wallet">
                                Wallet
                                <div>Shipping Address</div>
                                <address>{userState.address}</address>
                                <div>Billing Address</div>
                                <address>{userState.address}</address>
                        </div>
                        </div>
                    </div>
                    <div className="footer">
                        footer?
                    </div>
                </div>
            </div>
        )
    }
}
export default SingleUser