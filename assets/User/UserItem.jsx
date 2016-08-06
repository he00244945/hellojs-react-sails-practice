require('vendor/bootstrap.scss');

class UserItem extends React.Component{
   
   Delete(){
      $.ajax({
            type: 'DELETE',
            url: '/user/destroy?id='+this.props.id,
            data:this.props.value,
            success: (data)=>{
               console.log(data);
            },
            error:error=>{
                     console.log(error);
                             }
});
   }
   
    render() {
    return (
      <div>
       
       <li className="list-group-item" onClick={this.Delete.bind(this)}>
     X   {this.props.value}
       </li>
       
      </div>
    );
  }
}

module.exports = UserItem;