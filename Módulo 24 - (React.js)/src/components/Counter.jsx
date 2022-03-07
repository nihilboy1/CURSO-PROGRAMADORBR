import React, {useEffect, useState} from 'react';


const Counter = (props) => {
  const [count, set_count] = useState(props.count);

  useEffect(() => {
      set_count(parseInt(localStorage.getItem("count")))

      return () => {
        console.log('O ELEMENTO SUMIU')
      }
  }, [])

  useEffect(() => {
    document.title = count
    localStorage.setItem("count", count)
  }, [count])

  function add(){
    set_count(count + 1)
    console.log("Att")
  }

  return ( 
      <>
        <h1>Counter: {count}</h1>
        <button onClick={add}>ADD</button>
      </>
   );
}
 
export default Counter;





















// class Counter extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {count: this.props.count}
//     this.add = this.add.bind(this)
//   }


//   add(){
//     // this.setState({count: this.state.count += 1})
//     this.setState((state) => {
//       return {count: state.count + 1}
//     })
//   }

//   render(){
//     return (
//       <>
//       <h1>Counter: {this.state.count}</h1>
//       <button onClick={this.add}>ADD</button>
//       </>
//     )
//   }
// }

// export default Counter