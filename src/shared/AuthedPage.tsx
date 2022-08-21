import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Logo from "../assets/img/logo";
import OnlyContext, { initialState } from "../context";
import Button from "./Button";
import Layout from "./Layout";
import Text from "./Text";

export interface RootState {
    auth: boolean
}

const AuthedPage = () => {
    const email = localStorage.getItem('email')
    return (
        <Layout>
            <Logo />
            <div>
                <Text size={40}>Здравствуйте, <b>{email}</b></Text>
                <Button backgroundColor="#f5f5f5" color="#000000">Выйти</Button>
            </div>
        </Layout>
    )
}

export default AuthedPage