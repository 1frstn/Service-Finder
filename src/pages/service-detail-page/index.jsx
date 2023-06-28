import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi';

export default function ServiceDetailPage() {
  const param = useParams();
  const [services,setSErvices] = useState(null)
  const api = useApi();

  useEffect(() => {
    (async () => {

      const res = await api.get(`public/services/getBySlug/${param.slug}`)
      
      console.log(">>>SERVICE_DETAIL",res.data.data);
      setSErvices(res.data.data) 
    })()
  },[])

  if(services === null){
    return (
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
              <div className="page-content">
                 <h1>Page Loading...</h1>
                </div>
             </div>
           </div> 
       </div>)
  }
  
 /* services?.service.name "?" its null check if state before "?" null its not countinue*/

  return (
    <>
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
              <div className="page-content">
                <div className="main-banner">
                  <div className="row">
                    <div className="col-lg-7">
                        <div className="header-text">
                        <h3>{services.service.name}</h3>
                        <p className='text-white'>{services.service.description}</p>
                        </div>
                    </div>
                  </div>
                </div>
             </div>
           </div>
          </div>
        </div>
              
    </>
  )
}
