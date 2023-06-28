import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi'


export default function CategoryDetailPage() {
  const api = useApi();
  const param = useParams();

  const [categoryDetail,setCategoryDetail] = useState(null)

  useEffect(()=>{
    (async()=>{
      const res = await api.get(`public/categories/getBySlug/${param.slug}`)
      console.log(">>>RES_CATEGORIE_DETAIL",res);
      setCategoryDetail(res.data.data);
    })()
  },[])
  if(categoryDetail === null){
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
                        <h3>{categoryDetail.category.name}</h3>
                        <p className='text-white'>{categoryDetail.category.description}</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="most-popular">
                  <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section">
                        <h4><em>Service</em></h4>
                        </div>
                      <div className="row">
                        {categoryDetail.services.map((item) => {
                            return(
                             <div className="col-lg-3 col-sm-6" >
                              <div className="item">
                              <Link to={`/service/${item.slug}`} >
                                  <img src={item.image} 
                                       onError={(target) => {
                                          target.currentTarget.src = "../../../public/assets/images/no-img.png"
                                  }}  />
                                  <h4>{item.name}</h4>
                              </Link>
                              
                                </div>
                              </div>
                            )
                        })}
                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                {/* blog */}

                <div className="most-popular">
                  <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section">
                        <h4><em>Blogs</em></h4>
                        </div>
                      <div className="row">
                        {categoryDetail.blogs.map((item) => {
                            return(
                             <div className="col-lg-3 col-sm-6" >
                              <div className="item">
                              <Link to={`service/:slug`} >
                                  <img src={item.image} 
                                       onError={(target) => {
                                          target.currentTarget.src = "../../../public/assets/images/no-img.png"
                                  }}  />
                                  <h4>{item.title}</h4>
                              </Link>
                              
                                </div>
                              </div>
                            )
                        })}
                        
              
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
