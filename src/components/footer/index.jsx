import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Footer() {
  const categoryState = useSelector(state => state.categoriesState)
  return (
    <>    
        <footer>
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <p>Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All rights reserved. 
                <br/>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">TemplateMo</a>  Distributed By <a href="https://themewagon.com" target="_blank" >ThemeWagon</a></p>
                </div>
                <div className="col-lg-6">
                  <strong>Categories</strong>
                  <ul>
                    <li style={{display:'flex',flexDirection:'column'}}>
                      {categoryState.categories.map((item,index)=>{
                         if(index < 5){
                          return (
                            <Link to={item.slug} >
                            {item.name}
                          </Link>
                          )
                         }   
                         return null;                      
                      })}
                     
                    </li>
                  </ul>
                </div>
            </div>
            </div>

        </footer>    
    </>
  )
}
