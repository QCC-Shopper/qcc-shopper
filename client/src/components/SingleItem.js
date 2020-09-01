import React, {useState, useEffect} from 'react'

export default function SingleItem(props) {
    const [state, setState] = useState({
        carData: {}
    })

    const addItem = async() => {
        console.log('item added')
        try {
            const response = await fetch('order/add', {
                method: 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json',},
                body: JSON.stringify({userId: localStorage.getItem('id'), itemId: state.carData.id})
            })
            const result = await response.json()
            console.log(result.response)
        } catch(er) {console.log(er)}
    }

    useEffect(()=> {
        const getData = async() => {
            try {
                const response =  await fetch(`/items/${props.location.query.id}`)
                const data = await response.json()
                setState({
                    carData: data[0]
                })
            } catch(er) {console.log(er)}
        }
        getData()
    }, [])

    return(
        <div>
            <div className='car-div'>
                <img src={state.carData.imageUrl} alt='a sweet ride'></img>
                <h3>{state.carData.name}</h3>
                <h3>{state.carData.price}</h3>
                <h3>{state.carData.description}</h3>
                <br></br>
                <button onClick={addItem}>Add to cart</button>
                <hr></hr>
            </div>
        </div>
    )
}

