import './App.css';
import React from 'react'
import  Table from './Table'
import  Box from './Box'

 const data = [
   {
     'name':'Nikolay',
     'age': 5,
     'job':'developer',
     'percent':10,
   },
   {
    'name':'Djon',
    'age': 10,
    'job':'teacher',
    'percent':20,
  },
  {
    'name':'11Djon',
    'age': 120,
    'job':'tacher',
    'percent':240,
  },
 ]


 class App extends React.Component {
   constructor(props){
     super(props)
     this.state ={
       data:data,
       serchData:''
     }
   }

handelInput = (e) => {
  console.log(e.target.value);
  this.setState({ serchData: e.target.value})
}


  //  sortBy = path => {
  //    this.setState({data:{path}})
  //  }
    // sortBy(key){
    //   this.setState({
    //     data:data.sort((a,b)=> {return a[key] - b[key]})
    // })
    // }

   render(){
     let filteredDogs = this.state.data.filter((dog)=>{
       return dog.name.toLowerCase().includes(this.state.serchData.toLowerCase())
     })
    return (
      <div className="App">
          <Box handelInput =  {this.handelInput}/>
          <Table filteredDogs={filteredDogs}  /> 
      </div>
    );
   }
  
}

export default App;
