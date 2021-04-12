import Input from '../Input';

export default function TextInput({ inputID, iconName, hint }){
    return <Input inputID={inputID} iconName={iconName} hint={hint} type="text"/>;
}