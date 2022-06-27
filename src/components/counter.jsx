import React, {Component} from 'react';

class Counter extends  Component
{
    componentDidUpdate (prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        if(prevProps.counter.value!==this.props.counter.value){
            //Ajax call and get new data from the server
        console.log('Ajax call and get new data from the server',prevProps.counter.value+' != '+this.props.counter.value);
        }
        else{
        console.log('sont preille',prevProps.counter.value);

        }
    
    }
  //  state={
    //    value:this.props.counter.value
        
        //count:this.props.value
       //count:0

    //};
   
   // handleIncriment= () =>{
        //this.setState({count:this.state.count + 1});
     //   this.setState({ value:this.state.value + 1 });
    
    //};
    render(){
        //console.log('Produit selectionner = '+this.props.id+' , total= '+ this.formatCount());
        //console.log('props',this.props);
        console.log('Counter - rendered');
       
        return(
        <div>
            <p>  produit {this.props.counter.id}______________</p>
            
            <span className={this.getBadgeClasses()}>{this.formatCount()} </span>        
             <button onClick={()=>this.props.OnIncriment(this.props.counter)}  className="btn btn-secondary btn-sm"> 
              +
              </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="brn btn-danger btn-sm m-2" >
            Supprimer
          </button>
       </div>
          );         
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        return classes+= (this.props.counter.value ===0) ? "warning" :"primary";
    }
    formatCount(){
        //const {value} = this.state;
        //return value===0 ? 'zero' : value;
        const {value} = this.props.counter;
        return value===0 ? 'zero' : value;
    }    
}
export default Counter;
