import React from 'react'
import { Usernewdata ,Portfolio} from './Usernewdata'
import './Usernew.css'
import { Link } from 'react-router-dom'
const Usernew = () => {
  return (
    <div className='app'>
      <div className='Sidebar'>
        <ul >
         { Usernewdata.map((val,key)=>{
          return <li  key={key} style={{listStyleType:'none'}}>
         
            <div style={{padding:12,color:'aliceblue',fontSize:23}}>
              {val.title}<br/>{"_________________"}
            </div>
            </li>
          })}
         </ul>
       </div>
       
      <div className='main-menu'>
        
        <div className='upperpart'>
            <div className='upperpartone'>
                Portfolio
            </div>
            <div className='upperpartwo'>
                  Analytics
            </div>
            <div className='upperpartthree'>
                  Prices
            </div>
            </div>
            <h3 style={{marginLeft:300,fontSize:25,marginTop:10}}>Channels Listed</h3>
            <div className='lowerpart'>
              
              <ul>
              { Portfolio.map((val,key)=>{
              return <li key={key} style={{listStyleType:'none'}}>
              {" "}
              
                <div style={{padding:16,color:'black',fontSize:23}} className='listitems'>
                  {val.title} 
                  
                  
                </div> 
              </li>
              
              })}
              </ul> 
              <ul>
              { Portfolio.map((val,key)=>{
              return <li key={key} style={{listStyleType:'none'}}>
              {" "}
              <div>
              <Link to="/" className='buttonSell' type="submit">
                    + Sell Shares
                </Link>
                
                </div> 
              </li>
              
              })}
              </ul> 
              

              <Link to="/" className='button' type='submit'> Load More  </Link>
            </div>
      </div>
    </div>
  )
}

export default Usernew
