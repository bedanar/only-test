import React from "react";
import Layout from "./Layout";
import Logo from "../assets/img/logo";
import LoginForm from "./LoginForm";


export default function AuthPage() {
    return <Layout>
            <Logo />
            <LoginForm />
        </Layout>
}