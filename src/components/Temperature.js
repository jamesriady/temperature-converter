function Temperature(props) {
    function handleChange({ target}) {
        const { value } = target
        props.onChange(value)
    }

    return (
        <div>
            <input type="text" readOnly={props.readOnly} className="form-control" value={props.value} onChange={handleChange} />
        </div>
    )
}

export default Temperature;