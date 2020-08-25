import React, {useState, useEffect} from 'react'

export default function Students() {
    const [state, setState] = useState({
        students: [],
        loading: true
    })

    const getData = async() => {
        const res = await fetch('/api/students')
        const data = await res.json()
        const names = data.map((item, i) => <li key={i}>{item.name}</li>)
        setState({
            students: names
        })
    }

    useEffect(()=> {
        if (state.loading) {
            getData()
        }
    })
 
    return (
        <ul>
            {state.students}
        </ul>
    )
}