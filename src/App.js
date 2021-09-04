import axios from 'axios'
import './App.css';

function App() {
  const clickHandler = ()=>{
   // TEST ADDING A BOOK ***********************😎
  //   const additionalUrl = '/api/books'
  //   const baseUrl = `http://localhost:4000${additionalUrl}`
  //   const title = 'AAA'
  //   axios({
  //     method: 'POST',
  //     data:{
  //       title
  //     },
  //     url: baseUrl
  //   }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
  // }
  // TEST ADDING A BOOK without title ***********************😎
  //   const additionalUrl = '/api/books'
  //   const baseUrl = `http://localhost:4000${additionalUrl}`
  //   const title = ''
  //   axios({
  //     method: 'POST',
  //     data:{
  //       title
  //     },
  //     url: baseUrl
  //   }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
  // }
  // GET ALL BOOKS *********************** 😎
    // const additionalUrl = '/api/books'
    // const baseUrl = `http://localhost:4000${additionalUrl}`
    // axios({
    //   method: 'GET',
    //   url: baseUrl
    // }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
  // GET BOOK BY ID *********************** 😎
    // const id = '61338f4bcda1f807904ad43d'
    // const additionalUrl = '/api/books'
    // const baseUrl = `http://localhost:4000${additionalUrl}/${id}`
    // axios({
    //   method: 'GET',
    //   url: baseUrl
    // }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
  // GET BOOK BY wrong ID *********************** 😎
    // const id = '61338f4bcda1f807904ad555'
    // const additionalUrl = '/api/books'
    // const baseUrl = `http://localhost:4000${additionalUrl}/${id}`
    // axios({
    //   method: 'GET',
    //   url: baseUrl
    // }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
  // COMMENT A BOOK with no comments *********************** 😎
    // const id = '61338f4bcda1f807904ad43d'
    // const additionalUrl = '/api/books'
    // const baseUrl = `http://localhost:4000${additionalUrl}/${id}`
    // const comment = ''
    // axios({
    //   method: 'POST',
    //   data: {
    //     comment
    //   },
    //   url: baseUrl
    // }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
  // COMMENT A BOOK *********************** 😎
  // const id = '61338f4bcda1f807904ad43d'
  // const additionalUrl = '/api/books'
    // const baseUrl = `http://localhost:4000${additionalUrl}/${id}`
    // const comment = 'hello world'
    // axios({
      //   method: 'POST',
      //   data: {
        //     comment
        //   },
        //   url: baseUrl
        // }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
    // COMMENT A BOOK with wrong id *********************** 😎
    // const id = 'lapatadita'
    // const additionalUrl = '/api/books'
    // const baseUrl = `http://localhost:4000${additionalUrl}/${id}`
    // const comment = 'hello world'
    // axios({
    //   method: 'POST',
    //   data: {
    //     comment
    //   },
    //   url: baseUrl
    // }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
    // DELETE A BOOK *********************** 😎
    // const id = '61338f4bcda1f807904ad43d'
    // const additionalUrl = '/api/books'
    // const baseUrl = `http://localhost:4000${additionalUrl}/${id}`
    // axios({
    //   method: 'DELETE',
    //   url: baseUrl
    // }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
    // DELETE All BOOK *********************** 😎
  const additionalUrl = '/api/books'
    const baseUrl = `http://localhost:4000${additionalUrl}`
    axios({
        method: 'DELETE',
        url: baseUrl
        }).then(res=>console.log(res.data)).catch(err=>{throw new Error(err)})
  }

  return (
    <div className="App">
      <button onClick={clickHandler}>Click to test</button>
    </div>
  );
}

export default App;
