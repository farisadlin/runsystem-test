import React, {useState} from 'react'

function Display(props) {
    const [display, setDisplay] = useState(props)
    return (
        <div>
            <p>Nama: {display.name}</p>
            <p>Kontak: {display.contact}</p>
            <p>Email: {display.email}</p>
            <p>Password: {display.password}</p>
            <p>Jenis Kelamin: {display.gender}</p>
            <p>Kebutuhan: {display.kebutuhan}</p>
        </div>
    )
}

export default Display
