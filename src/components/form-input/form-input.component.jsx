import {Input, GroupContainer, Label} from './form-input.styles';

const FormInput = ({label, ...otherProps}) => {
    return (
        <GroupContainer>
            <Input {...otherProps} />
            {label && (
                <Label shrink={otherProps.value.length} >
                    {label}
                </Label>
            )}
        </GroupContainer>
    );
}

export default FormInput;
