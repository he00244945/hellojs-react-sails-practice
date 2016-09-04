require('vendor/bootstrap.scss');
var UserItem =require('User/UserItem.jsx');
class UserList extends React.Component{
   
   constructor(props){
   	super(props);
   }
   
    render() {
     
    return (
      <div >
     	<ul className="list-group">
     	{
     		this.props.data.map((userName)=>{
     			return <li className="list-group-item">
     			<UserItem id={userName.id} name={userName.name} getUsers={this.props.getUsers} />
     			</li>
     		})

     	}
     	</ul>

      </div>
    );
  }
}

module.exports = UserList;