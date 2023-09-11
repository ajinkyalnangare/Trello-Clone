import { Icon } from "@mui/material";
import React from "react"
import TextArea from 'react-textarea-autosize'
import Card from '@mui/material/Card';
import { border } from "@mui/system";
import Button from '@mui/material/Button';
import {connect } from "react-redux";
import {addList,addCard} from "../actions";
class TrelloActionButton extends React.Component{
    state={
        fromOpen:false,
        text:""

    }
    openForm=()=>{

      
       this.setState({
        fromOpen:true

       });
       
    };
    closeForm=(e)=>{
         this.setState({
            fromOpen:false
         });
    };
    handelInputChange=e=>{
    this.setState({
        text:e.target.value 
    });
    };  
    handeleAddList=()=>{
        const {dispatch}=this.props;
        const {text} =this.state;
        if(text){
            dispatch(addList(text));
        }
        return;
    };
    handleAddCard = () =>{
        const { dispatch,listID}=this.props;
        const {text} =this.state;
        if(text){
            dispatch(addCard(listID,text)); 
        }
    }
    renderAddButton=()=>{
        const {list}=this.props;
        const buttonText= list ? "Add another list" :"Add another card"
        const buttonTextOpacity=list ? 1 : 0.5;
        const buttonTextColor= list ? "white" : "inherit";
        const buttonTextBackground=list ? "rgb(0,0,0,.15)" : "inherit";
        return(
            <div
            onClick={this.openForm}
            style={{
                ...styles.openFormButtonGroup,
                opacity:buttonTextOpacity,color:buttonTextColor,backgroundColor:buttonTextBackground}}>
                <Icon>
                    add
                </Icon>
                <p>
                    {buttonText}
                </p>
            </div>
        )
    }
    renderForm=()=>{
        const {list}=this.props;
        const placeholder = list ? "Enter list title...":"Enter a title for this card..."

        const buttonTitle = list ? "Add List" :"Add Card";
        return <div>
       <Card   style={{
        overflow:"visible",
        minHeight:80,
        minWidth:272,
        padding:"6px 8px 2px"
       }}>
 <TextArea placeholder={placeholder} autoFocus onBlur={this.closeForm}
 value={
    this.state.text
 }
 onChange={this.handelInputChange}
 style={{
    resize:"none",
    width:"100%",
    overflow:"hidden",
    outline:"none",
    border:"none"
 }}
 />

 
       </Card>
      <div style={styles.fromButtonGroup}>
        <Button
        onMouseDown={list ? this.handeleAddList :this.handleAddCard}
        variant="contained" style={{
            color:"white", 
            backgroundColor:"#5aac44"
        }}> {buttonTitle}{" "}</Button>
        <Icon style={{marginLeft:8,cursor:"pointer"}}>close</Icon>
      </div>
   </div>
    }
    render(){
        return this.state.fromOpen ? this.renderForm(): this.renderAddButton();
    }
};



const styles={
    openFormButtonGroup:{
        display:"flex",
        alignItems:"center",
        cursor:"pointer",
        borderRadius:3,
        height:36,
        width:272,
        paddingLeft:10
    },
    fromButtonGroup:{
    marginTop:0,
    display:"flex",
    alignItems:"center"
    }
};
export default connect() (TrelloActionButton);