import { color } from '@mui/system'

export const columns = () => {
  const columnsTable = [
    {
      name: 'ID',
      selector: 'idColaborador',
      sortable: true
    },
    {
      name: 'Nome',
      selector: 'nome',
      sortable: true,
      grow: 2
    },
    {
      name: 'Função',
      selector: 'numeroChip1',
      sortable: true,
      grow: 1
    }
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
