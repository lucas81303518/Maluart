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
import { NOMEM } from "dns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { sizeHeight } from "@material-ui/system";

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
    const validarCampos = () => {
      if (descricao == "") {
        alert("Campo descrição não preenchido!!");
        return false;
      }
      if (valor == null) {
        alert("Campo valor não preenchido!!");
        return false;
      } else {
        setProdutos(produtos.concat([novoProduto]));
        setModalVisible(false);
        setDescricao("");
        setValor("");
        return true;
      }
    };
    validarCampos();
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
        <Button variant="outlined" onClick={() => setModalVisible(true)}>
          <h3>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            Novo Produto
          </h3>
        </Button>
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
