import { useEffect, useState } from "react"
import styles from "./Select.module.css"
export type SelectOption = {
    label : string
    value : string | number
}

type MultipleSelectProps = {
    multiple : true
    value : SelectOption[]
    onChange : (value : SelectOption[]) => void
}

type SingleSelectProps = {
    multiple ? : false
    value? : SelectOption
    onChange : (value : SelectOption | undefined) => void
}

type SelectProps = {
    options : SelectOption[]

} & (MultipleSelectProps | SingleSelectProps )

const Select = ({multiple , value, onChange, options} : SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const clearOptions = () =>{
        multiple ?onChange([]) :  onChange(undefined)
        
    }

    const selectOption = (option : SelectOption) =>{
        if (multiple){
            if (value.includes(option))
                onChange(value.filter(o => o !== option))
            else
            onChange([...value, option])
        }
        else{
            ( option !== value)
            onChange(option)
        }
    }

    const isOptionSelected = ( option : SelectOption) =>{

        return multiple ? value.includes(option) : option === value
    }

    useEffect(()=>{
        if(isOpen) setHighlightedIndex(0)
    }, [isOpen])


    return ( 
        <div 
        onClick={()=> setIsOpen(prev => !prev)} 
        tabIndex={0} 
        className={styles.container}
        >
            <span className={styles.value}>{multiple ? value.map(v => (
                <button 
                key={v.value} 
                className={styles.option_badge}
                onClick={(e)=> {e.stopPropagation()
                    selectOption(v)}}
                >
                    {v.label}
                    <span className={styles.remove_btn}>&times;</span>
                </button>
            )) : value?.label}</span>
            <button 
            onClick={(e)=>{ e.stopPropagation()
                 clearOptions()}} 
            className={styles["clear_btn"]}
            >
                &times;
            </button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${ isOpen && styles.show }` }>
                {options.map((option, index) => (
                    <li 
                    key={option.value} 
                    onMouseEnter={()=> setHighlightedIndex(index)}
                    className={`
                        ${styles.option} 
                        ${isOptionSelected(option) && styles.selected} 
                        ${index === highlightedIndex && styles.highlighted}`
                    }
                    onClick={e => {
                        e.stopPropagation()
                        selectOption(option)
                        setIsOpen(false)
                    }}
                    >
                        {option.label}
                    </li>
                )

                )
                    
                }
            </ul>

        </div> 
    );
}
 
export default Select;