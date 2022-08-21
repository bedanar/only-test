import React, { useState } from "react";
import Label from "./Label";
import Input from './Input'
import Checkbox from "./Checkbox";
import Button from "./Button";
import { InputContainer } from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage, { ErrorServerMessage } from "./ErrorMessage";
import DangerIcon from "../assets/img/danger";
import Text from './Text'

type Inputs = {
    email: string,
    password: string,
};
type DataProps = {
    email: string,
    pass: string
}
export default function LoginForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [ disabled, setDisabled ] = useState(true)
    const [data, setData] = useState<DataProps>({email: '', pass: ''})
    const onSubmit: SubmitHandler<Inputs> = data => {
        localStorage.setItem("email", JSON.stringify(data.email))
        localStorage.setItem("password", JSON.stringify(data.password))
        setDisabled(true)
        setData({email: data.email, pass: data.password})
    }
    return (
        // @ts-ignore
        <form onSubmit={handleSubmit(onSubmit)}>
            {data.email === "steve.jobs@example.com" && data.pass === "password" ? true : <ErrorServerMessage>
                    <DangerIcon />
                    <Text>Пользователя {data.email} не существует</Text>
                </ErrorServerMessage>}
            <div>
                <InputContainer >
                    <Label>Логин</Label>
                    <Input  placeholder="steve.jobs@example.com" 
                    defaultValue="steve.jobs@example.com" 
                    {...register("email", { required: "Обязательное поле" })} 
                    // @ts-ignore
                    type="email" error={errors.email?.message}
                    onChange={() => setDisabled(false)} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </InputContainer>
                <InputContainer>
                    <Label>Пароль</Label>
                    <Input placeholder="123244" defaultValue="122334" 
                    {...register("password", { required: "Обязательное поле" })} 
                    type="password"
                    // @ts-ignore
                    error={errors.password?.message} 
                    onChange={() => setDisabled(false)}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                </InputContainer>
                <Checkbox>
                    <input type="checkbox" id="password" />
                    <label htmlFor="password">Запомнить пароль</label>
                </Checkbox>
                {errors.exampleRequired && <span>This field is required</span>}
                <Button type="submit" disabled={disabled}>Войти</Button>
            </div>
        </form>
    )
}