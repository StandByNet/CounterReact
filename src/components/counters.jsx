import React,{Component} from 'react';
import Counter from './counter';


class Counters extends Component
 {   
    render(){
        console.log('Counters - rendered');
        const{ OnReset, counters ,OnDelete,OnIncrement}=this.props; 
        return(
        <diw>
            <button onClick={OnReset} className="btn primary sm m-2"> Rest </button>
            {counters.map(counter => (
            <Counter
            key={counter.id} 
            onDelete={OnDelete}
            counter={counter}
            OnIncriment={OnIncrement}    
            id={counter.id}
            //value={counter.value}
            //selected = {counter.selected}
            >
                </Counter>
            
            ))}
        </diw>);
    }
}

export default Counters;