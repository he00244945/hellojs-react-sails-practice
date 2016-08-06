require('vendor/bootstrap.scss');

class UserAddBox extends React.Component{
    
    submit(){
        var n =this.input.value;
        console.log(n);
        this.props.AddUser.push(n);
        $.ajax({
            type: 'POST',
            url: '/user/create?name='+this.input.value,
            data:this.input.value,
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
       <input type="text" ref={(ref)=>{this.input=ref}} />
       <button onClick={this.submit.bind(this)}>submit</button>
      </div>
    );
  }
}

module.exports = UserAddBox;