import React from 'react'
import { connect } from 'react-redux'
import { Logout } from '../../Store/Action/Action'
import Navbar from '../../components/NavBar/Navbar'
import firebase from '../../config/Firebase/Firebase'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password:'',
            profile:'',
            array:[]
        }


    }

componentDidMount(){
    let array = []
firebase.firestore().collection('allUsers').get().then(res=>{
    console.log('component',res)
    res.forEach(UserDetails=>{
        let UserData= UserDetails.data()
        array.push(UserData)
        this.setState({array})
    })
})
}



    render() {
        let data = this.state.array
        return (
            <div>

                <Navbar />
               {data.map((val,i)=> <h1 key={i} ><img src={val.profile}/><br /> {val.email}  </h1>)}

            </div>
        )
    }
}


export default Home
