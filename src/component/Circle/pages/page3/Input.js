
const Input = ({name,value,label,onChange}) => {
    return ( 
        <form> 
            <div className="mb-3">
                <label htmlFor="email">{label}</label>
                <input
                onChange={onChange}
                value={value} 
                id={name} className="form-control" type="email"
                name={name}
                />
            </div>
       </form>
     );
}
 
export default Input;