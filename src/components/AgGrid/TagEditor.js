import React, { useState, forwardRef, useEffect } from "react";
import ReactTags from 'react-tag-autocomplete'
export default forwardRef((props, ref) => {

    const [tags,setTags]=useState([])
    const [suggestions,setSuggestions]=useState([])
    useEffect(()=>{
        if(!props.value || !props.suggestions) return
        setTags(props.suggestions.filter(i=>props.value.includes(i.id)))
            },[props.value,props.suggestions])

    useEffect(()=>{
if(!props.suggestions) return
setSuggestions(props.suggestions)
    },[props.suggestions])
    const onDelete =(i)=> {

        setTags(prevTags=>{
        const item=prevTags.filter((tag,index)=>index===i)
        setSuggestions(prev=>[...prev,...item])
        return prevTags.filter((tag,index)=>index!==i)
    })
    }
    
    const onAddition= async(tag) =>{
    //   const data=
     console.log({tag})
     const isTagNew=suggestions.filter(sug=>sug.name===tag.name.trim())[0]
     if(isTagNew){
         setTags(prev=>[...prev,tag])
         setSuggestions(prev=>prev.filter(i=>i.id!==tag.id))
     return
        }
    
    }

    return (
<ReactTags
                ref={ref}
                tags={tags}
                suggestions={suggestions}
                onDelete={onDelete}
                onAddition={onAddition} 
                minQueryLength ={0}
                disabled
                />
        );
})
