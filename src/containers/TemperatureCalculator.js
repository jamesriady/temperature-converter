import Temperature from '../components/Temperature';

function TemperatureCalculator(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Temperature value={props.leftValue} onChange={props.onChange}/>
                </div>
                <div className="col-sm">
                    <Temperature readOnly={true} value={props.rightValue} />
                </div>
            </div>
        </div>
    )
}

export default TemperatureCalculator