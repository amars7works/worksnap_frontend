import axios from 'axios'


  export const approvalRequest = (username) =>{
    let config = {
        url: "/api/get_requests/",
        method: 'GET',
        withCredentials: true,

        "user_name":username
        


    }
    axios(config)
    .then((res) => {
        this.setState({
            posts: res.data
        });
            // this.setState({personDetails: data.return[0], loading:false });

        console.log(res.data)
    });

  }