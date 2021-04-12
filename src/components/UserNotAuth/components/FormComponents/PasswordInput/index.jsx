import Input from '../Input';

export default function PasswordInput({ inputID, iconName, hint }){
    return <Input inputID={inputID} iconName={iconName} hint={hint} type="password"/>;
}