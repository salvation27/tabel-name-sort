import React from 'react'


export default function Table({filteredDogs}) {
  return (
         <table className="table table-inverse">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>
                  <button
                  // onClick= {()=> sortBy('age')}
                  >
                     Age
                  </button>
                </th>
                <th>Job</th>
                <th>Percent</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredDogs.map((item,i)=>{
                  return(
                    <tr key ={i}>
                    <th scope="row">{i+1}</th>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.job}</td>
                    <td>{item.percent}%</td>
                  </tr>
                  )
                })
              }
              
            </tbody>
          </table>
  )
}
