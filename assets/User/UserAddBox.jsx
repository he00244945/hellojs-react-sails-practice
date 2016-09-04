require('vendor/bootstrap.scss');

class UserAddBox extends React.Component{
    constructor(props){
      super(props);
      this.submit=this.submit.bind(this);
    }
    submit(){
       
        $.ajax({
            type: 'POST',
            url: `/user/create?name=${this.input.value}`,
            data:this.input.value,
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
       <input type="text" ref={(ref)=>{this.input=ref}} />
       <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

module.exports = UserAddBox;