import React,{useState} from 'react';

const App=()=>{

  const [fullName,setFullName]=useState( {
    fname:'',
    lname:'',
    email:'',
    phone:'',
  });
 

  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    // console.log(event.target.placeholder);
    
    const {value,name}=event.target;

    setFullName((preValue)=>{
        // console.log(preValue);
        return{
          ...preValue,
          [name]:value,
        };
    })
  };

  const onSubmit=(event)=>{
    event.preventDefault();
    alert("Form Submitted");
  }

  return(
    <>
    <div className="main_div">
      <form onSubmit={onSubmit}>
        <div>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <input type="text" placeholder="Enter Your First Name" name='fname' 
              onChange={inputEvent} value={fullName.fname} autoComplete="off"/>
          <input type="text" placeholder="Enter Your Last Name" name='lname' 
              onChange={inputEvent} value={fullName.lname} autoComplete="off"/>
           <input type="email" placeholder="Enter Your Email" name='email' 
              onChange={inputEvent} value={fullName.email} autoComplete="off"/>
            <input type="number" placeholder="Enter Your Phone No " name='phone' 
              onChange={inputEvent} value={fullName.phone} autoComplete="off"/>
          <button type="submit" >Click Me 🤩 </button>
        </div>
      </form>
    </div>    
    </>
  );
}

export default App;