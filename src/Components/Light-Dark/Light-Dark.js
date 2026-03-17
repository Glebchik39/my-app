import './Light-Dark.css';
import React from 'react';

export function Card(props)
{
  const [count, setCard] = React.useState(0)
  
  // React.useEffect(() => {
 
  // }) 

  function izbranCount() {
    setCard(count + 1)
  }

  function zbros()
  {
    setCard(0)  
  }

  return(
    <div>
      <h2>Счетчик ищбранного: {count}</h2>
      <br></br>
      <div className='card'>
        <img src='/telek.jpg' alt="" />
        <p>Телек классный</p>
        <div className='niz'>
        <p>300$</p>
        <button onClick={izbranCount}>Избранное</button>
        </div>
      </div>
      <br></br>
      <button onClick={zbros}>Удалить все из избранного</button>
    </div>
  )
}
// export function LifgtDark()
// {
//   const[lineDark,setState] = React.useState('light')
//   const[image,setImage] = React.useState('/pngwing.com (2).png')

//   function func()
//   {
//     let value =(lineDark=='light'?'dark':'light');
//     let value2 =(image=='/pngwing.com (2).png'?'/pngwing.com (3).png':'/pngwing.com (2).png')
//     setState(value)
//     setImage(value2)

//      document.body.className = value;

//   }

//   return <div>
//     <button onClick={func}>
//       <img src={image}/>
//       </button>
//     <p>gjfkgjgkhjgkhjgkhjkgjhkgjhkgjhkgjhkgjhkjhkgjhkjgh</p>
//     <div className='container'>
//       <div className='card'>
//         <h2 className='zagolovok1'>Basic</h2>
//         <p className='price'>$2.99</p>
//       <ul>
//         <li>✔ Sample Text Here</li>
//         <li>✘ Other Text Title</li>
//         <li>✘ Text Space Goes Here</li>
//         <li>✘ Description Space</li>
//       </ul>
//       <button className='button1'>Select Package</button>
//     </div>
//   </div>


//   <div className='container'>
//       <div className='card'>
//         <h2 className='zagolovok2'>Standart</h2>
//         <p className='price'>$5.99</p>
//       <ul>
//         <li>✔ Sample Text Here</li>
//         <li>✘ Other Text Title</li>
//         <li>✘ Text Space Goes Here</li>
//         <li>✘ Description Space</li>
//       </ul>
//       <button className='button2'>Select Package</button>
//     </div>
//   </div>



//   <div className='container'>
//       <div className='card'>
//         <h2 className='zagolovok3'>Basic</h2>
//         <p className='price'>$2.99</p>
//       <ul>
//         <li>✔ Sample Text Here</li>
//         <li>✘ Other Text Title</li>
//         <li>✘ Text Space Goes Here</li>
//         <li>✘ Description Space</li>
//       </ul>
//       <button className='button3'>Select Package</button>
//     </div>
//   </div>
//   </div>

// }


