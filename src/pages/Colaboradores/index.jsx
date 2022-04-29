import { useState, useEffect, useContext, button, } from 'react'
import { columns, conditionalRowStyles, styleRows } from './configTable';
// import { useHistory } from 'react-router-dom';
import { BaseTable } from '../../components';
import ContentLayout from '../../container';
import api from "../../services/api";
import { data } from 'autoprefixer';


const Colaboradores = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);




  useEffect(() => {
    api.get("findAllContributors")
      .then((resposta) => {
        const { data } = resposta.data
        console.log(resposta.data)
        setData(data)

      })
  }, [])




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