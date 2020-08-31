
import React, { Component } from "react"

class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.location.query.id
        }
    }
    async componentDidMount() {
        const data = await fetch(`users/${this.state.user}`);
        const userInfo = await data.json()
        this.setState({
            user: userInfo
        })

        console.log(this.state.user.name)
    }

    render() {
        const userState = this.state.user
        return (
            <body>
                <div id="singleUser" className="orderDetails">
                    <div class="container1">
                        <div class="shopper">
                            <a href="homepage">
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
                                <textarea className="description">description placeholder</textarea>
                            </div>
                        </div>
                    </div>
                    <div class="main-container">

                        <ul className="orders">
                            Orders

                        <a href={"placeholder"}>
                                <li>placeholder: user X order names</li>
                            </a>
                        </ul>
                        <div class="right">

                            <div class="personal">
                                Personal Information
                                <div>Name: {userState.name}</div>
                                <address>Address: {userState.address}</address>
                                <textarea>description placeholder</textarea>
                        </div>
                            <div class="wallet">
                                Wallet
                                <div>Shipping Address</div>
                                <address>{userState.address}</address>
                                <div>Billing Address</div>
                                <address>{userState.address}</address>
                        </div>
                        </div>
                    </div>
                    <div class="footer">
                        footer?
                    </div>
                </div>
            </body>
        )
    }
}
export default SingleUser