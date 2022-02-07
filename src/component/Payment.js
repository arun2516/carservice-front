<div className='assurance' style={{display:"flex" , backgroundColor:"#5195e1", width:"80%", marginLeft:"10%",marginTop:"2%",  borderRadius:"10px"}}>
<div className='logo' style={{display:"flex", justifyContent:"center", alignItems:"center", width:"20%"}}>
  <AssuredWorkloadIcon style={{fontSize:"80px", color:"white"}}/>
</div>
<div className='assurance-content' style={{color:"white", width:"50%"}}> 
  <h1 style={{marginTop:"15px"}}>Buckle-Up Membership </h1>
  <ul>
    <li style={{marginTop:"15px"}}>
      Buckle-Up Membersip at 10$(Annual Package)
    </li>
    <li style={{marginTop:"15px"}}>
      Membership Holder Will get 15% Offer on every service in Buckle-Up (valid for 1 year)
    </li>
  </ul>
  <Button  onClick={handleClickOpen}><h4 style={{marginTop:"15px", marginBottom:"15px", color:"red"}}>Know More</h4></Button>
  <StripeCheckout 
    stripeKey={process.env.REACT_APP_KEY} 
    token={makePayment} 
    name="Buckle-Up Membership Payment"
    amount={product.price * 100}>
      <Button><h4 style={{marginTop:"15px", marginBottom:"15px", color:"red"}}> Become Member in just {product.price}$</h4>
</Button>
    </StripeCheckout>
</div>
</div>