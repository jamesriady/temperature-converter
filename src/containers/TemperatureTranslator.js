import Select from '../components/Select';

function TemperatureTranslator(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Select value={props.leftSelect} onChange={(val) => props.onTranslatorUpdate('leftSelect', val)} />
                </div>
                <span className="icon-group col-sm" onClick={() => props.onTranslatorUpdate('', '')}>
                    <i className="fa fa-arrows-h" aria-hidden="true"/>
                </span>
                <div className="col-sm">
                    <Select value={props.rightSelect} onChange={(val) => props.onTranslatorUpdate('rightSelect', val)} />
                </div>
            </div>
        </div>
    )
}

export default TemperatureTranslator