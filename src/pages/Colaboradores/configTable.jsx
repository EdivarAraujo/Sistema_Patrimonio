import api from "../../services/api"

export const columns = () => {
  async function handleEdit(idColaborador) {
    await api.put(`updateCollaborator/${idColaborador}`, {
      nome: "gabriel"
    })
  }

  const columnsTable = [
    {
      name: 'ID',
      selector: 'idColaborador',
      grow: 0,
      sortable: true
    },
    {
      name: 'N° Patrio',
      selector: 'numeroPatrimonio',
      sortable: true
    },
    {
      name: 'Nome',
      selector: 'nome',
      sortable: true,
      grow: 2
    },
    {
      name: 'Unidade',
      selector: 'unidadeId',
      sortable: true,
      grow: 1
    },
    {
      name: 'Setor',
      selector: 'setorId',
      sortable: true,
      grow: 1
    },
    {
      name: 'Função',
      selector: 'funcaoId',
      sortable: true,
      grow: 1
    },
    {
      name: 'Número telefone 1',
      selector: 'numeroChip1',
      sortable: true,
      grow: 1
    },
    {
      name: 'Operadora Chip 1',
      selector: 'operadoraChip1',
      sortable: true,
      grow: 1
    },
    {
      name: 'Número telefone 2',
      selector: 'numeroChip2',
      sortable: true,
      grow: 1
    },
    {
      name: 'Operadora Chip 2',
      selector: 'operadoraChip2',
      sortable: true,
      grow: 1
    },
    {
      name: "Açoẽs",
      selector: "connect",
      center: true,
      grow: 1,
      Header: 'Action',
      accessor: 'action',
      cell: row => (
        <div>
          <button onClick={e => handleEdit(row.idColaborador)}>Edit</button>
        </div>
      ),
    },
  ]

  return columnsTable
}

export const conditionalRowStyles = [
  {
    when: item => parseInt(item.status) === 2,
    style: () => ({
      borderStyle: 'solid',
      borderWidth: '0 0 0 .8em',
      borderColor: '#EC4F26'
    })
  },

  {
    when: item => parseInt(item.status) === 1,
    style: () => ({
      borderStyle: 'solid',
      borderWidth: '0 0 0 0.8em',
      borderColor: '#4E9633'
    })
  }
]

export const styleRows = {
  headCells: {
    style: {
      fontSize: '14px',
      backgroundColor: '#fdfdfd',
      color: '000',
      paddingRight: '8px'
    },
    activeSortStyle: {
      color: '#000',
      '&:focus': {
        outline: 'none'
      },
      '&:hover:not(:focus)': {
        color: '#000'
      }
    },
    inactiveSortStyle: {
      '&:focus': {
        outline: 'none',
        color: '#000'
      },
      '&:hover': {
        color: '#000'
      }
    }
  },
  cells: {
    style: {
      borderStyle: 'solid',
      borderWidth: '0 0 .1em 0',
      borderColor: 'rgba(62, 66, 69, 0.1)',
      fontSize: '14px',
      paddingLeft: '8px',
      paddingRight: '8px'
    }
  }
}
