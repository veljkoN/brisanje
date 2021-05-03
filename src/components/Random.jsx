import React from 'react'
import useGif from '../hooks/useGif'
import Button from '../UIElements/Button'
import Card from '../UIElements/Card'
import Image from '../UIElements/Image'

const Random = () =>{
    const {gif, fetchGif} = useGif()
    return(
        <Card className='card'>
            <h6 className='text-success'>Random Gif</h6>
                <Image src={gif} alt="Random gif" width='100%' heigh='400px' />
            <div className="card-body">
                <Button class='success' click={fetchGif} >
                    CLICK ON NEW
                </Button>
            </div>
        </Card>
        
    )
}
export default Random