"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Container from "@/app/components/ui/Container";
import Typography from "@/app/components/ui/Typography";
import Centered from "@/app/components/ui/Centered";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import franqLogo from "@/app/assets/images/franq-logo.svg";
// import trading from "@/app/assets/images/trading.avif";
import trading from "@/app/assets/images/photo-1579226905180-636b76d96082.png";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleVoltar = () => router.push("/login");

  return (
    <Container className="min-h-screen">
      <Centered className="gap-x-20">
        <Centered
          direction="col"
          className="w-full h-full md:w-1/2 gap-y-2 mb-auto"
          items="start"
          justify="start"
        >
          <Image src={franqLogo} alt="" />
          <Typography className="text-4xl" font="sora">
            Cadastro
          </Typography>
          <Typography className="text-xl text-black/75">
            Cadastre-se para acessar a plataforma
          </Typography>
          <Input
            placeholder="Nome Completo*"
            value={email}
            setValue={setEmail}
          />
          <Input placeholder="CPF*" value={email} setValue={setEmail} />
          <Input
            placeholder="Data de Nascimento*"
            value={email}
            setValue={setEmail}
          />
          <Input placeholder="Telefone*" value={email} setValue={setEmail} />
          <Input placeholder="Email" value={email} setValue={setEmail} />
          <Input
            placeholder="Senha"
            value={senha}
            setValue={setSenha}
            password
          />
          <Input
            placeholder="Confirmar Senha"
            value={senha}
            setValue={setSenha}
            password
          />
          <Button label="Concluir cadastro" primary />
          <Button label="Voltar" secondary onClick={handleVoltar} />
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
