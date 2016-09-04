require('vendor/bootstrap.scss');

class UserItem extends React.Component{
   constructor(props){
    super(props);
    this.state={
      data:[]
    }
    this.Delete=this.Delete.bind(this);
   }

   Delete(){
      $.ajax({
            type: 'DELETE',
            url: '/user/destroy?id='+this.props.id,
            data:this.props.value,
            success: (data)=>{
              this.props.getUsers();
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
       
       <span>ID : {this.props.id}</span>,
       <span>Name : {this.props.name}</span>
       <button className="btn btn-danger btn-sm pull-right" onClick={this.Delete} > Del </button>
       
      </div>
    );
  }
}

module.exports = UserItem;