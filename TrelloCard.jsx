import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from "react-beautiful-dnd";
import { Provider } from "react-redux";
import styled from "styled-components";
const CardContainer=styled.div`
margin-bottom:8px;
`;
const TrelloCard =({text,id,index})=>{
    return(
      <Draggable draggableId={String(id)} index={index }>
        {Provided =>(
          <CardContainer  ref={Provided.innerRef} {...Provided.draggableProps} {...Provided.dragHandleProps} >

        
         <Card  >
         <CardContent>   <Typography gutterBottom>
             {text}
           </Typography></CardContent>
      
       
         </Card>
         
         </CardContainer>
        )}
      
      </Draggable>
    )

}


export default TrelloCard;
