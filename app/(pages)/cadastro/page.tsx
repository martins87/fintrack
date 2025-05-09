"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { User } from "@/app/types/user";
import Container from "@/app/components/ui/Container";
import Typography from "@/app/components/ui/Typography";
import Centered from "@/app/components/ui/Centered";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import franqLogo from "@/app/assets/images/franq-logo.svg";
import trading from "@/app/assets/images/photo-1579226905180-636b76d96082.png";

const LoginPage = () => {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleConcluirCadastro = () => {
    if (
      !nome ||
      !cpf ||
      !dataNascimento ||
      !telefone ||
      !email ||
      !senha ||
      !senhaConfirmacao
    ) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (senha !== senhaConfirmacao) {
      setErrorMsg("As senhas não coincidem.");
      return;
    }

    const users = localStorage.getItem("userdata");
    let parsedUsers: User[] = [];

    try {
      parsedUsers = users ? JSON.parse(users) : [];
      if (!Array.isArray(parsedUsers)) {
        parsedUsers = [];
      }
    } catch (error) {
      parsedUsers = [];
      console.log(error);
    }

    const emailExistente = parsedUsers.some((user) => user.email === email);
    if (emailExistente) {
      setErrorMsg("Já existe um usuário cadastrado com este e-mail.");
      return;
    }

    const userData = {
      nome,
      cpf,
      dataNascimento,
      telefone,
      email,
      senha,
      senhaConfirmacao,
      timestamp: Date.now(),
    };

    parsedUsers.push(userData);
    localStorage.setItem("userdata", JSON.stringify(parsedUsers));

    router.push("/cotacoes");
  };

  const handleVoltar = () => router.push("/login");

  return (
    <Container className="min-h-screen justify-start md:justify-center mt-20 md:mt-0">
      <Centered className="gap-x-20">
        <Centered
          direction="col"
          className="w-full h-full md:w-1/2 gap-y-6 mb-auto"
          items="start"
          justify="start"
        >
          <Image src={franqLogo} alt="" />
          <Typography className="text-4xl mt-10" font="sora">
            Cadastro
          </Typography>
          <Typography className="text-xl text-black/55">
            Cadastre-se para acessar a plataforma
          </Typography>
          <Centered direction="col" className="gap-y-2">
            <Input
              placeholder="Nome Completo*"
              value={nome}
              setValue={setNome}
            />
            <Input placeholder="CPF*" value={cpf} setValue={setCpf} />
            <Input
              placeholder="Data de Nascimento*"
              value={dataNascimento}
              setValue={setDataNascimento}
            />
            <Input
              placeholder="Telefone*"
              value={telefone}
              setValue={setTelefone}
            />
            <Input placeholder="Email*" value={email} setValue={setEmail} />
            <Input
              placeholder="Senha*"
              value={senha}
              setValue={setSenha}
              password
            />
            <Input
              placeholder="Confirmar Senha*"
              value={senhaConfirmacao}
              setValue={setSenhaConfirmacao}
              password
            />
            {errorMsg && (
              <Typography className="text-lg text-red-500">
                {errorMsg}
              </Typography>
            )}
            <Button
              label="Concluir cadastro"
              primary
              onClick={handleConcluirCadastro}
            />
            <Button
              className="bg-inherit"
              label="Voltar"
              secondary
              onClick={handleVoltar}
            />
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
