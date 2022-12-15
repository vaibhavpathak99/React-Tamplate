import React from 'react';
import { Button, Card, Space, Table, Tag } from 'antd';
// import Form from './Form';
// import Submit from './Submit'

{/* <td class="ant-table-cell">columns</td> */}


const columns  = [
   , 
  { 
   
    title: 'Barcode',
    dataIndex: 'Barcode',
    key: 'Barcode',
    
     
  },
  {
    title: 'EpcsExp',
    dataIndex: 'EpcsExp',
    key: 'EpcsExp',
    render(text, record) {
      return {
        
        props: {
          style: { background: parseInt(text) < 200 ? "red" : "green" }
        },
        children: <div>{text}</div>
      };
    }
  
  },
  {
    title: 'Found',
    dataIndex: 'Found',
    key: 'Found',
    
    render(text, record) {
      return {
        
        props: {
          style: { background: parseInt(text) < 200 ? "red" : "green" }
        },
        children: <div>{text}</div>
      };
    }
  
    
  },
  
  
];


  const data = [
   
    {
      key: 'xyz',
      Barcode: 'xyz',
      EpcsExp: 200,
      Found:200
      
     
    },
    {
      key: 'Abc',
      Barcode: 'Abc',
      EpcsExp: 50,
      Found:80
    },
    {
      key: 'Abc1',
      Barcode: 'Abc1',
      EpcsExp: 80,
      Found:78
    },
    {
      key: 'Abc2',
      Barcode: 'Abc2',
      EpcsExp: 25,
      Found:35
    }
      
  ];
  
const App = () =>{
  return(

    <>
    <label style={{marginLeft:"500px"}}>Enter box id  : </label>
    <input type="text" style={{margin:"30px 0px 50px 0px"}}></input>
    <button type='submit'>submit</button>
    <Table   className='head2' columns={columns} dataSource={data} />
    </>
  )
}






export default App;