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
    this.getUsers=this.getUsers.bind(this);
  }
  
  componentWillMount(){
   this.getUsers();
  }
  
 getUsers(){
  $.ajax({
      url:"/user",
      success:(res)=>{
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
        <UserList  data={this.state.data} getUsers={this.getUsers} />
        <UserAddBox getUsers={this.getUsers} />
      </div>
      
    );
  }
}

module.exports = UserPage;
