import { useState, useEffect, useContext } from 'react'
import { columns, conditionalRowStyles, styleRows } from './configTable';
// import { useHistory } from 'react-router-dom';
import { BaseTable } from '../../components';
import ContentLayout from '../../container';


const dataFake = [

  {
    idColaborator: '1',
    nome:'Edivaldo',
    descricaoTipo: 'AUX. Caminhoneiro'
  },
  {
    idColaborator: '2',
    nome:'Edivaldo',
    descricaoTipo: 'Caminhoneiro'
  }





]

const Colaboradores = () => {
const [data, setData] = useState([...dataFake]);
const [loading, setLoading] = useState(false);
// const navigate = useHistory();



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