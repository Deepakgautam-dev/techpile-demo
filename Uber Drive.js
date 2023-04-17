import React,{useState,useRef} from 'react';
import './App.css'

export default function App(){
  const [imgurl,setImgurl] = useState('images/img2.jpg')
  const Heading = useRef()
  const para = useRef()
  const input = useRef()
  const collection=[
  {title:"Request a ride now",des:""},
  {title:"Get in the driver's seat and get paid",des:"Driver on the palteform with the largest and network of active rides."},
  {title:"Make money by renting our your car",des:"Conver with thousends of drivers and earn more per week with ubers free fleet management tools."}]
  

  function Firstbtn(){
    Heading.current.innerText = collection[0].title
    para.current.style.display = "none"
    input.current.style.display = "block"
    setImgurl('images/img2.jpg')
  }
  function Secondbtn(){
    para.current.style.display = "block"
    Heading.current.innerText = collection[1].title
    para.current.innerText = collection[1].des
    input.current.style.display = "none"
    setImgurl('images/img3.jpg')
  }
  function Thirdbtn(){
    para.current.style.display = "block"
    Heading.current.innerText = collection[2].title
    para.current.innerText = collection[2].des
    input.current.style.display = "none"
    setImgurl('images/img4.jpg')
  }

  return (
    <React.Fragment>    
        <div className="row" style={{backgroundImage:`url(${imgurl})`,backgroundSize:"100% 100%"}}>
        <div className="col-2"></div>
        <div className="col-5 p-4 my-4 max-Width">
        <div className="row">
        <div className="col-4 cursor-pointer" onClick={Firstbtn}><center><img src="images/demo6.png" alt="worng.." style={{width:'25px'}}/><br/>Ride</center></div>
        <div className="col-4 cursor-pointer" onClick={Secondbtn}><center><img src="images/demo6.png" alt="worng.." style={{width:'25px'}}/><br/>Drive And Deliver</center></div>
        <div className="col-4 cursor-pointer" onClick={Thirdbtn}><center><img src="images/demo6.png" alt="worng.." style={{width:'25px'}}/><br/>home and </center></div>
        </div>
        <hr/>
        <h1 className="my-4" ref={Heading} >Request a ride now</h1>
        <div ref={input}>
        <input type="text" className="form-control my-3" placeholder="Enter Pickup Location"/>
        <input type="text" className="form-control my-2" placeholder="Enter Description"/>
        </div>
        <p ref={para}></p>
        <button className="btn btn-primary my-4">Get Started</button>
        <button className="btn btn-light my-4 ms-3">Get Started</button>
        </div>
        </div>
    </React.Fragment>
  );
}



