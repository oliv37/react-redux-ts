import * as React from "react";
import { FormEvent, ChangeEvent } from "react";

interface FormProps {
    onSubmit: (value: string) => void;
}

interface FormState {
    itemValue: string
}

const getInitalState = () => ({itemValue: ''});

export default class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps) {
        super(props);

        this.state = getInitalState();
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({itemValue: event.target.value});
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (this.state.itemValue) {
            this.props.onSubmit(this.state.itemValue);
            this.setState(getInitalState());
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="item name" 
                    onChange={this.handleChange} 
                    value={this.state.itemValue} 
                />
                <input type="submit" value="Add" />
            </form>
        )
    }
}