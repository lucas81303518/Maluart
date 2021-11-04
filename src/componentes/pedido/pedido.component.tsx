import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import * as React from "react";
import Modal from "../modal/modal.component";
import "./pedido.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

interface Pedido {
  cliente: string;
  produto: string;
  descricao: string;
  dataPedido: string;
  dataEntrega: string;
  valor: string;
}

const MyPedido: React.FC = ({}) => {
  const [pedidos, setPedidos] = React.useState<Pedido[]>([]);
  const [cliente, setCliente] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [dataPedido, setDataPedido] = React.useState("");
  const [dataEntrega, setDataEntrega] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [valor, setValor] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const salvar = () => {
    const novoPedido: Pedido = {
      cliente: cliente,
      produto: produto,
      descricao: descricao,
      dataPedido: dataPedido,
      dataEntrega: dataEntrega,
      valor: valor,
    };
    setPedidos(pedidos.concat([novoPedido]));
    setModalVisible(false);
  };
  const handleCliente = (event: SelectChangeEvent) => {
    setCliente(event.target.value);
  };
  const handleProduto = (event: SelectChangeEvent)  => {
    setProduto(event.target.value);
  };
  const handleDescricao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescricao(event.target.value);
  };
  const handleDataPedido = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataPedido(event.target.value);
  };
  const handleDataEntrega = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataEntrega(event.target.value);
  };
  const handleValor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value);
  };
  return (
    <div className="pedido-container">
      <div className="campos">
        <Button
          id="novo-pedido"
          variant="outlined"
          onClick={() => setModalVisible(true)}
        >
          <h3>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            Novo Pedido
          </h3>
        </Button>

        <Modal
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          title="Pedido"
          onSave={salvar}
        >
            <FormControl>
            <InputLabel id="demo-simple-select-autowidth-label">Cliente</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={cliente}
            onChange={handleCliente}
            autoWidth
            label="Cliente"
          >
            <MenuItem>Mariana</MenuItem>
            <MenuItem>Joana</MenuItem>
            <MenuItem>Fernanda</MenuItem>
          </Select>
          </FormControl>
          <FormControl>
          <InputLabel id="demo-simple-select-autowidth-label">Produto</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={produto}
            onChange={handleProduto}
            autoWidth
            label="Produto"
          >
            <MenuItem>Foto Polaroid</MenuItem>
            <MenuItem>Quadro 21 Fotos</MenuItem>
            <MenuItem>Mural</MenuItem>
          </Select>
          </FormControl>
          <TextField
            id="descricao"
            label="Descrição"
            onChange={handleDescricao}
          />
          <TextField
            id="data-pedido"
            label="Data de Pedido"
            onChange={handleDataPedido}
          />
          <TextField
            id="data-entrega"
            label="Data de Entrega"
            onChange={handleDataEntrega}
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
                  <b>Descrição*</b>
                </TableCell>
                <TableCell>
                  <b>Cliente*</b>
                </TableCell>
                <TableCell>
                  <b>Produto</b>
                </TableCell>
                <TableCell>
                  <b>Data de Pedido</b>
                </TableCell>
                <TableCell>
                  <b>Data de Entrega</b>
                </TableCell>
                <TableCell>
                  <b>Valor</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow
                  key={pedido.descricao}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {pedido.descricao}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {pedido.cliente}
                  </TableCell>
                  <TableCell>{pedido.produto}</TableCell>
                  <TableCell component="th" scope="row">
                    {pedido.dataPedido}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {pedido.dataEntrega}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {pedido.valor}
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
export default MyPedido;
