const TextInput = (props) => {

    return (
        <div className={"form-group row m-2 text-start"}>
            <label htmlFor={props.id} className={"col-sm-2 col-form-label"}><b>{props.label}</b></label>
            <div className={"col-sm-10"}>
                <input id={props.id}
                       type="text"
                       required
                       className={"form-control"}
                       value={props.value}
                       onChange={e => props.onChange(e.target.value)}
                />
            </div>
            <div className={"col-sm-12 text-start"} style={{color: "red"}}>
                {props.error}
            </div>
        </div>
    )
}

export default TextInput