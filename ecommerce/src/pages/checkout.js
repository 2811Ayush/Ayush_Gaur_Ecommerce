import Head from "next/head";
import React, { useEffect, useState } from "react";
import{useForm} from 'react-hook-form'
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BiRupee } from "react-icons/bi";
import { getCartItem } from "@/utils/cartitems";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from 'axios';



axios.get('https://api.example.com/data')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });

function Checkout(){
  const {register,handleSubmit,watch,formState:{errors}}=useForm()
  const[cart,setCart]=useState(getCartItem());
  const [cartItems,setCartItems]=useState(0);
  const [yourCart,setYourCart]=useState({});
  const router=useRouter();

  useEffect(()=>{
    const tempYourCart = Cookies.get('yourCart');
    if(!tempYourCart){
      router.push('/')
    }
    setYourCart(tempYourCart && JSON.parse(Cookies.get('yourCart')))
    setCartItems(cart?.length)
  },[cart])
  
  
  const checkoutHandler = async (data) => {
    try {
      await axios.post('/api/submit-form', data);

      alert('Data entered successfully!');

      router.push('/thank-you');

      console.log('Form data submitted successfully');
      // Redirect or show a success message to the user
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle the error and show an error message to the user
    }
  };
    
    return(
        <>
        <Head>
            <title>
                Checkout
            </title>
        </Head>
        <Breadcrumb title={"Checkout"}/>

<form onSubmit={handleSubmit(checkoutHandler)}>
<div class="row g-4">
    <div class="col-md-5 col-lg-4 order-md-last">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">Your cart</span>
        <span class="badge badge-secondary rounded-pill">{cartItems}</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between">
        
            <div class="my-0">SubTotal (<BiRupee size={21}/>)</div>
            <strong>{yourCart?.subTotal?.toFixed(2)}</strong>
          
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
        
            <div class="my-0">Total(<BiRupee size={21}/>)</div>
            <strong>{yourCart?.gstAmount?.toFixed(2)}</strong>
        
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
        
            <div class="my-0">GST 18%(<BiRupee size={21}/>)</div>
            <strong>{yourCart?.grandTotal?.toFixed(2)}</strong>

        </li>
      </ul>

      <div class="card p-2">
        <div class="input-group">
            <button type='submit' className="w-100 btn btn-primary btn-lg">Order Place</button>
        </div>
      </div>
    </div>
    <div class="col-md-7 col-md-8">
      <h4 class="mb-3">Billing address</h4>

        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" {...register('firstName',{required:true})} required/>
            {errors.firstName && <div class="text-danger">
              Valid first name is required.
            </div>}
          </div>
          <div class="col-sm-6">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder=""  {...register('lastName',{required:true})} required/>
            {errors.lastName && <div class="text-danger">
              Valid last name is required.
            </div>}
          </div>
          <div class="col-12">
          <label for="mobile">Mobile</label>
          <div class="input-group">
            <input type="number" class="form-control" id="mobile" placeholder="+91"  {...register('mobile',{required:true})} required/> 
            {errors.mobile && <div class="text-danger">
              Valid 10 digit number required.
            </div>}
          </div>
        </div>
        <div class="col-12">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" {...register('email',{required:true})} placeholder="you@example.com"/>
          {errors.email && <div class="text-danger">
            Please enter a valid email address for shipping updates.
          </div>}
        </div>
        <div class="mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" placeholder="1234 Main St" {...register('address',{required:true})} required/>
          {errors.address && <div class="text-danger">
            Please enter your shipping address.
          </div>}
        </div>
        <div class="col-12">
          <label for="landmark">Landmark</label>
          <input type="text" class="form-control" id="landmark" {...register('landmark',{required:true})} placeholder="Apartment or suite"/>
          {errors.landmark && <div class="text-danger">
              Please enter a valid landmark.
          </div>}
        </div>

        <div class="col-md-5">
            <label for="country">Country</label>
            <select class="form-select" id="india" {...register('country',{required:true})} required>
              <option value="">Choose...</option>
              <option value="india">India</option>
            </select>
            {errors.country && <div class="text-danger">
              Please select a valid country.
            </div>}
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select class="form-select" id="state" {...register('state',{required:true})} required>
              <option value="">Choose...</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="uttarpradesh">Uttar Pradesh</option>
            </select>
            {errors.state && <div class="text-danger">
              Please provide a valid state.
            </div>}
          </div>
          <div class="col-md-3">
            <label for="zip">Zip</label>
            <input type="text" class="form-control" id="zip" placeholder="" {...register('zip',{required:true})} required/>
            {errors.zip && <div class="text-danger">
              Zip code required.
            </div>}
          </div>
      </div>



      <div class="card p-2">
        <div class="input-group">
            <button type='submit' className="w-100 btn btn-primary btn-lg">Submit</button>
        </div>
      </div>




        <hr class="mb-4"/>
        
        <h4 class="mb-3">Payment</h4>

        <div class="my-3">
    
          <div class="form-check">
            <input id="cod" name="paymentMethod" type="radio" {...register('paymentMethod',{required:true})} class="form-check-input" checked="true" required/>
            <label class="form-check-label" for="cod">Cash on Delivery</label>
          </div>
        </div>
        <hr class="my-4"/>

    </div>
</div>
</form>

  </>
    )
}

export default Checkout