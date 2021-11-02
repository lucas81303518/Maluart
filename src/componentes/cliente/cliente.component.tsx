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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiUserPlus } from "react-icons/fi";

interface Pessoa {
  nome: string;
  celular: string;
  rua: string;
  cep: string;
  instagram: string;
}

const MyCliente: React.FC = ({}) => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [rua, setRua] = useState("");
  const [cep, setCep] = useState("");
  const [instagram, setInstagram] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const salvar = () => {
    const novaPessoa: Pessoa = {
      nome: nome,
      celular: celular,
      rua: rua,
      cep: cep,
      instagram: instagram,
    };
    const validarCampos = () => {
      if (nome == "") {
        alert("Campo nome não preenchido!!");
        return false;
      }
      if (celular == "" || celular.length < 11) {
        alert("Campo celular inválido!!");
        return false;
      } else {
        setPessoas(pessoas.concat([novaPessoa]));
        setModalVisible(false);
        setNome("");
        setCelular("");
        return true;
      }
    };
    validarCampos();
  };
  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };
  const handleCelular = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCelular(event.target.value);
  };
  const handleRua = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRua(event.target.value);
  };
  const handleCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };
  const handleInstagram = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstagram(event.target.value);
  };
  return (
    <div className="cliente-container">
      <div className="campos">
        <Button
          id="novo-cliente"
          variant="outlined"
          onClick={() => setModalVisible(true)}
        >
          <h3>
            <FiUserPlus />
            Novo Cliente
          </h3>
        </Button>

        <Modal
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          title="Cliente"
          onSave={salvar}
        >
          <TextField id="nome" label="Nome do Cliente" onChange={handleNome} />
          <TextField id="celular" label="Celular" onChange={handleCelular} />
          <TextField id="rua" label="Rua" onChange={handleRua} />
          <TextField id="cep" label="Cep" onChange={handleCep} />
          <TextField
            id="instagram"
            label="Instagram"
            onChange={handleInstagram}
          />
        </Modal>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Nome*</b>
                </TableCell>
                <TableCell>
                  <b>Celular*</b>
                </TableCell>
                <TableCell>
                  <b>Rua</b>
                </TableCell>
                <TableCell>
                  <b>Cep</b>
                </TableCell>
                <TableCell>
                  <b>Instagram</b>
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
                  <TableCell component="th" scope="row">
                    {pessoa.celular}
                  </TableCell>
                  <TableCell>{pessoa.rua}</TableCell>
                  <TableCell component="th" scope="row">
                    {pessoa.cep}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {pessoa.instagram}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default MyCliente;
