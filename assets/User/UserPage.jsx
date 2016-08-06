require('vendor/bootstrap.scss');
require('User/User.scss');
var UserList=require('User/UserList.jsx');
var UserAddBox=require('User/UserAddBox.jsx');
class UserPage extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      data:[]
    };
  }
  
  componentWillMount(){
    $.ajax({
      url:"/user",
      success:(res,users)=>{
        this.setState({data:res});
      },
      error:error=>{
        console.log(error);
      }
    }
   
      
    );
  }
  
 
  
  AddUser(user){
   var newuser=this.state.data.push(user);
   this.setState={data:newuser};
  }
  
  renderData(data){
    this.serState={data:data};
  }
  
  render() {
    return (
      <div>
        <h1>User Page</h1>
        <UserList  renderData={this.state.data} />
        <UserAddBox AddUser={this.state.data} />
      </div>
      
    );
  }
}

module.exports = UserPage;
