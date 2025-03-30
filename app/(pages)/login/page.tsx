"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/app/components/ui/Container";
import Typography from "@/app/components/ui/Typography";
import Centered from "@/app/components/ui/Centered";
import Input from "@/app/components/ui/Input";
import franqLogo from "@/app/assets/images/franq-logo.svg";
// import trading from "@/app/assets/images/trading.avif";
import trading from "@/app/assets/images/photo-1579226905180-636b76d96082.png";
import Button from "@/app/components/ui/Button";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return (
    <Container className="min-h-screen">
      <Centered className="gap-x-20">
        <Centered
          direction="col"
          className="w-full md:w-1/2 gap-y-4"
          items="start"
        >
          <Image src={franqLogo} alt="" />
          <Typography className="text-4xl" font="sora">
            Login
          </Typography>
          <Typography className="text-xl text-black/75">
            Faça Login para acessar sua conta
          </Typography>
          <Input placeholder="Email" value={email} setValue={setEmail} />
          <Input
            placeholder="Senha"
            value={senha}
            setValue={setSenha}
            password
          />
          <Button label="Login" primary />
          <Typography className="text-xl text-black/75">
            Ainda não tem uma conta? Cadastre-se
          </Typography>
        </Centered>
        <Centered
          className="hidden md:flex md:w-1/2"
          direction="col"
          items="end"
        >
          <Image
            className="rounded-xl w-auto max-h-[80vh]"
            src={trading}
            alt=""
            quality={100}
          />
        </Centered>
      </Centered>
    </Container>
  );
};

export default LoginPage;
