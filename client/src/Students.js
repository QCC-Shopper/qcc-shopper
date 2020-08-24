import React from 'react'

export default class Students extends React.Component {
    constructor() {
        super()
        this.state = {
            students: []
        }
    }

    async componentDidMount() {
        const res = await fetch('/api/students')
        const data = await res.json()
        console.log(data)
    }

    render() {
        return (
            <ul>
                {this.state.students}
            </ul>
        )
    }
}