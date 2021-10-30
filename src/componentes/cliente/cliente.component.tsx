import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import "./cliente.component.scss";
import Modal from "../modal/modal.component";

interface Pessoa {
  nome: string;
  rua: string;
  cep: string;
}

function Cliente() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [cep, setCep] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const salvar = () => {
    const novaPessoa: Pessoa = {
      nome: nome,
      rua: rua,
      cep: cep,
    };
    setPessoas(pessoas.concat([novaPessoa]));
    setModalVisible(false);
  };
  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };
  const handleRua = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRua(event.target.value);
  };
  const handleCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  return (
    <div className="cliente-container">
      <div className="campos">
        <Button onClick={() => setModalVisible(true)}>Novo Cliente</Button>
        <Modal
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          title="Cliente"
          onSave={salvar}
        >
          <TextField id="nome" label="Nome do Cliente" onChange={handleNome} />
          <TextField id="rua" label="Rua" onChange={handleRua} />
          <TextField id="cep" label="cep" onChange={handleCep} />
        </Modal>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Nome</b>
                </TableCell>
                <TableCell>
                  <b>Rua</b>
                </TableCell>
                <TableCell>
                  <b>Cep</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pessoas.map((pessoa) => (
                <TableRow
                  key={pessoa.nome}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {pessoa.nome}
                  </TableCell>
                  <TableCell>{pessoa.rua}</TableCell>
                  <TableCell component="th" scope="row">
                    {pessoa.cep}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Cliente;
