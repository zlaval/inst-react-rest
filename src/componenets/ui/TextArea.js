const TextArea = (props) => {


    return (
        <div className={"form-group row m-2 text-start"}>
            <label className={"col-sm-2 col-form-label"} htmlFor={props.id}><b>{props.label}</b></label>
            <div className={"col-sm-10"}>
                <textarea
                    id={props.id}
                    className={"form-control"}
                    rows={4}
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            </div>
        </div>
    )

}

export default TextArea