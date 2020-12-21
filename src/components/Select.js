import { options } from '../constants/temperature';

function Select (props) {
    return (
        <select className="form-control" value={props.value} onChange={({ target }) => props.onChange(target.value)}>
            { options.map(opt => {
                return <option value={opt.key} key={opt.key}>{opt.label}</option>
            }) }
        </select>
    )
}

export default Select