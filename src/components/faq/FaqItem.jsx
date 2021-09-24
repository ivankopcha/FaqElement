import React, {useState} from "react";

const FaqItem = ({title,content}) => {
    
    const [opened, setOpened] = useState(false);
    
    const openItem =()=>{
        setOpened(!opened);
    }  

    return(
        <div className='item-wrapper'>
            <label>
                <input className='item-checkbox' type='checkbox' checked={opened} onChange={()=>openItem()}/>
                <h4 className='item-title'>{title}</h4>
            </label>
            <p className='item-content' style={{display: opened ? 'block' : 'none'}}>{content}</p>
        </div>
    );
}

export default FaqItem;