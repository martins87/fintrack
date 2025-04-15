"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/app/components/ui/Container";
import Typography from "@/app/components/ui/Typography";
import Centered from "@/app/components/ui/Centered";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Logo from "@/app/components/Logo";
import trading from "@/app/assets/images/photo-1579226905180-636b76d96082.png";
import { useRouter } from "next/navigation";
import { User } from "@/app/types/user";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleLogin = () => {
    if (email === "" || senha === "") {
      setErrorMsg("Favor preencher todos os campos");
      return;
    }

    const users = localStorage.getItem("userdata");
    // No users registered yet
    if (!users) {
      setErrorMsg("Usuário não encontrado");
      return;
    }

    const parsedUsers = JSON.parse(users);
    // User not found
    const userFound = parsedUsers.find((user: User) => user.email === email);
    if (!userFound) {
      setErrorMsg("Usuário não encontrado");
      return;
    }

    const storedEmail = userFound.email;
    const storedSenha = userFound.senha;
    if (email !== storedEmail || senha !== storedSenha) {
      setErrorMsg("Email ou senha incorretos");
      return;
    }

    setErrorMsg("");
    router.push("/cotacoes");
  };

  return (
    <Container className="min-h-screen">
      <Centered className="gap-x-20">
        <Centered
          direction="col"
          className="w-full h-full md:w-1/2 gap-y-2 mb-auto"
          items="start"
          justify="start"
        >
          <Logo />
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
          <Button label="Login" primary onClick={handleLogin} />
          {errorMsg && (
            <Typography className="text-lg text-red-500">{errorMsg}</Typography>
          )}
          <Centered justify="start" className="gap-x-1.5">
            <Typography className="text-xl text-black/75">
              Ainda não tem uma conta?
            </Typography>
            <Link href="/cadastro">
              <Typography className="text-xl text-[#0057FC]" weight="600">
                Cadastre-se
              </Typography>
            </Link>
          </Centered>
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
