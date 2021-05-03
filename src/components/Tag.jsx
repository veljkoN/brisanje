import React,{useState} from 'react'
import useGif from '../hooks/useGif'
import Button from '../UIElements/Button'
import Card from '../UIElements/Card'
import Image from '../UIElements/Image'

const Tag = () =>{
    const [ tag, setTag ] = useState('')
    const {gif, fetchGif} = useGif(tag)
    const handleClick = () => {
        fetchGif(tag)
        setTag('')
    }
    return(
        <Card className='card'>
            <h6 className='text-warning'>Tag Gif</h6>
            <Image src={gif} alt="Random tag gif" width='100%' heigh='400px' />
            <div className="card-body">
                <div className="input-group">
                    <input value={tag} placeholder='Enter new tag' className='form-control' onChange={(e)=>setTag(e.target.value)} />
                    <Button class='warning ml-1' click={handleClick} disabled={tag.length===0}>
                        CLICK ON NEW
                    </Button>
                </div>    
            </div>
        </Card>
    )
}
export default Tag 