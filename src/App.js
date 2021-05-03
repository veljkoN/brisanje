import React from 'react'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'
const App = () => {
    return (
        <div>
            <h3 className='text-center mt-2 mb-2'>Random GIF Application</h3>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <Random />
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <Tag />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
