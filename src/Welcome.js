import React,{Component} from "react"

export default class Welcome extends Component{

constructor(){

super(); 
this.state={
counter :0

};

setInterval(()=>{

this.setState({
counter:this.state.counter+1});

if(this.state.count >90)
{
	clearInterval();
	
}
}
	
	
	,1000);

}






render()
{
	
return <><h1> LVE 2021 APP. {this.state.counter}'s<h1/></>
}
}
