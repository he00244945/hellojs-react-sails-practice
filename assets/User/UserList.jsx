require('vendor/bootstrap.scss');
var UserItem =require('User/UserItem.jsx');
class UserList extends React.Component{
   
   
   
    render() {
     
    return (
      <div >
      <ul className="list">
      {this.props.renderData.map((user)=>{return <UserItem key={user.id} value={user.name} id={user.id}/>})}  
      
      </ul>
      </div>
    );
  }
}

module.exports = UserList;