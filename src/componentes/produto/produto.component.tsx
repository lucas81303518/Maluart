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
import "./produto.component.scss";
import Modal from "../modal/modal.component";

interface Produto {
  descricao: string;
  valor: string;
}

const MyProduto: React.FC = ({}) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const salvar = () => {
    const novoProduto: Produto = {
      descricao: descricao,
      valor: valor,
    };
    setProdutos(produtos.concat([novoProduto]));
    setModalVisible(false);
  };
  const handleDescricao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescricao(event.target.value);
  };
  const handleValor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value);
  };
  return (
    <div className="produto-container">
      <div className="campos">
        <Button onClick={() => setModalVisible(true)}>Novo Produto</Button>
        <Modal
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          title="Produto"
          onSave={salvar}
        >
          <TextField
            id="nome"
            label="Descricao do Produto"
            onChange={handleDescricao}
          />
          <TextField id="valor" label="Valor" onChange={handleValor} />
        </Modal>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Descrição</b>
                </TableCell>
                <TableCell>
                  <b>Valor</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produtos.map((produto) => (
                <TableRow
                  key={produto.descricao}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {produto.descricao}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {produto.valor}
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

export default MyProduto;
