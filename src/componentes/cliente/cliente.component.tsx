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
import Modal from "./modal.component";

interface Pessoa {
  nome: string;
  idade: number;
}

function Cliente() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState(false);

  const salvar = () => {
    const novaPessoa: Pessoa = {
      nome: nome,
      idade: idade,
    };
    setPessoas(pessoas.concat([novaPessoa]));
  };
  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };
  const handleIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(Number(event.target.value));
  };

  return (
    <div className="cliente-container">
      <div className="campos">
        <Button onClick={() => setModalVisible(true)}>Open modal</Button>
          <Modal isOpen={modalVisible}
            onClose = {()=>{setModalVisible(false)}}
            title="Cliente"
          >
          </Modal>
        <TextField id="nome" label="Nome do Cliente" onChange={handleNome} />
        <TextField
          id="idade"
          label="Idade"
          type="number"
          onChange={handleIdade}
        />
        <Button variant="outlined" onClick={salvar}>
          Salvar
        </Button>
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
                  <b>Idade</b>
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
                    {pessoa.nome}{" "}
                  </TableCell>
                  <TableCell>{pessoa.idade}</TableCell>
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
