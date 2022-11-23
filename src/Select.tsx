import styles from "./Select.module.css"
export type SelectOptions = {
    label : string
    value : any
}

type SelectProps = {
    options : SelectOptions[]
    value? : SelectOptions
    onChange : (value : SelectOptions | undefined) => void
}

const Select = ({value, onChange, options} : SelectProps) => {
    return ( 
        <div tabIndex={0} className={styles.container}>
            <span className={styles.value}>value</span>
            <button className={styles["clear_btn"]}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={styles.options}>
                {options.map(option => (
                    <li key={option.value} className={styles.option}>{option.label}</li>
                )

                )
                    
                }
            </ul>

        </div> 
    );
}
 
export default Select;