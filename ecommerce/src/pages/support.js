import React from 'react'
import Image from 'next/image'


function Support() {
  return (
    <>
    <div class="container mt-4">
         <div class="row d-flex justify-content-center"> 
         <div class="col-md-9"> <div class="card p-4 mt-3">
             <h3 class="heading mt-5 text-center">Hi! How can we help You?</h3> 
             <div class="row mt-4 g-1 px-4 mb-5 d-flex justify-content-center"> 
              
            <div class="col-md-2"> 
            <div class="card-inner p-3 d-flex flex-column align-items-center">
            <a href="/" class="nav-link font-italic">    
            <Image src="/images/1.png" width={50} height={50} alt="y"/> 
            <div class="text-center mg-text"> 
            <span class="mg-text">Product</span> 
            </div> 
            </a>
            </div> 
            </div> 
            <div class="col-md-2"> 
            <div class="card-inner p-3 d-flex flex-column align-items-center"> 
            <a href="/return" class="nav-link font-italic">
            <Image src="/images/2.png" width={50} height={50} alt="z"/> 
            <div class="text-center mg-text"> 
            <span class="mg-text">Return</span> 
            </div>
            </a> 
            </div> 
            </div> 
            <div class="col-md-2"> 
            <div class="card-inner p-3 d-flex flex-column align-items-center">
            <a href="/gurantee" class="nav-link font-italic">    
            <Image src="/images/3.png" width={50} height={50} alt="s"/> 
            <div class="text-center mg-text"> 
            <span class="mg-text">Guarantee</span> 
            </div> 
            </a>
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

export default Support