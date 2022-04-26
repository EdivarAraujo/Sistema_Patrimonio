import { useState, useEffect, useContext } from 'react'
import { columns, conditionalRowStyles, styleRows } from './configTable';
// import { useHistory } from 'react-router-dom';
import { BaseTable } from '../../components';
import ContentLayout from '../../container';

const Colaboradores = () => {
const [data, setData] = useState([{
  "5": 1,
  "codigo": 0,
  "numeroPatrimonio": 197,
  "nome": "Francisco luzimario Souza Silva",
  "unidadeId": 6,
  "setorId": 3,
  "funcaoId": 2,
  "numeroChip1": "Radio Comunicador",
  "operadoraChip1": "Radio",
  "numeroChip2": "00000000000",
  "operadoraChip2": "Nao definida",
  "status": 1,
  "createdAt": "2022-04-26T17:15:05.267Z",
  "updatedAt": null
},]);
const [loading, setLoading] = useState(false);




const propsColumn = columns();

  return (
    <ContentLayout title="colaboradores">
        <BaseTable
          placeholderInput="Buscar colaborador"
          columns={propsColumn}
          titleButtonAction=""
          data={data}
          // onActionButton={() => navigate.push("/colaboradores")}
          loaderTitle="Buscando colaboradores..."
          loaderActive={loading}
          imprimir={true}
          exportar={true}
          styleRows={styleRows}
          conditionalRowStyles={conditionalRowStyles}
        />
      </ContentLayout>
  )
}

export default Colaboradores;