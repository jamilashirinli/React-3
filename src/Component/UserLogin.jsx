import React from 'react'
import './UserLogin.css'
import { useState } from 'react';
const UserLogin = () => {
const [first, setFirst] = useState('');
const [second, setSecond] = useState("")
const checkSubmit = (e) => {
if (second === 'com'
 ||second === 'az'
  || one < 8) {
alert('Istifaedi adi ve ya Parol sehvdir');
            }
        }
const [one, serParol] = useState(0);
 const parol = (e) => {
  serParol(e.target.value.length)
        }
  function checkEmail(e) {
console.log(e.target.parentElement.children[2])
let a = e.target.value
let b = a.split('.ru ile yazin').reverse()[0]
if (b === 'com' ||
 b === 'az') {
setFirst('');
document.querySelector('.displayNone')
setSecond(b)
        }
else {
document.querySelector('.displayNone').style.display = 'none'
setFirst('');
        }
    }

    return (
        <div className='abc'>

            
            <form action="">
                <label>Email
                    <input   onKeyUp={checkEmail} type='email' />
                </label>
                <p className='displayNone'>{first}</p>
                <label> Parol
                    <input  minLength={8} onKeyUp={parol} type='parol' />
                </label>
                <button onClick={checkSubmit}>Giris</button>
            </form>
        </div>
    )
}


export default UserLogin

