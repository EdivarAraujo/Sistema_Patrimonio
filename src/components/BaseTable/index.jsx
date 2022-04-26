import React from "react";
import "./style.css";
import { styles } from "./config";
import {Link} from "react-router-dom";
import DataTable from "react-data-table-component";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DataTableExtensions from "react-data-table-component-extensions";
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import "react-data-table-component-extensions/dist/index.css";

const NoData = ({loaderTitle}) => {
  return(
  
    <div className="containerLoaderDataTable">
      <span>Sem registros</span>
    </div>
  )
  }

const LoaderProgress = ({loaderTitle}) => {
return(

  <div className="containerLoaderDataTable">
    <span class="spinner"/>
    <span>{loaderTitle || 'Buscando informaçoes...'}</span>
  </div>
)
}

function BaseTable(props) {
  
  const {
    title = '',
    data = [],
    columns = [],
    dense = false,
    imprimir = false,
    exportar = false,
    titleButtonAction = '',
    colorBtnAction = '',
    colorTextAction = '',
    route = '',
    placeholderInput= '',
    loaderActive = false,
    loaderTitle= '',
    onActionButton = () => {},
    styleRows,
    conditionalRowStyles = [],
    actionRow = () => {},
    headerComponent 
  } = props;

  const tableData = {
    columns: columns || [],
    data: data || [],
    noHeader: true,
    defaultSortField: "id",
    defaultSortAsc: true,
    customStyles: styles,
    pagination: true,
    noDataComponent:<NoData/>,
    progressComponent:  <LoaderProgress loaderTitle={loaderTitle}/>,
    progressPending: loaderActive,
    highlightOnHover: true,
    paginationComponentOptions: {
      rowsPerPageText: "Itens por pagina",
      rangeSeparatorText: "de",
    },
    dense: dense,
    sortIcon: <ArrowDownwardIcon />,
    conditionalRowStyles: conditionalRowStyles || [],
    paginationRowsPerPageOptions: [10,20,40,50,100,250],
    onRowClicked: (row) => actionRow(row)
  };

  const tableDataExtensions = {
    columns,
    data,
    filterPlaceholder: placeholderInput || "Filtrar dados...",

    //Para execultar as funcoes abaixo as colunas nao podem ter elementos jsx somente dados.
    print: imprimir,
    export: exportar,
  };

  const styleBtnAction = {
    backgroundColor: colorBtnAction || '#143A70',
    color : colorTextAction || '#FFFFFF',
    width: '6.2rem'
  }

  const buttonProps = {
    component: !!route ? Link : Button,
    to: route,
    variant:'contained',
    onClick:!!route ? () => {} : () => onActionButton(),
    style: {...styleBtnAction},
  }
  return (
    <div className="containerTableData">
      {headerComponent ? 
        {...headerComponent}
       :
      <div id="headerTableData">
        <h4>{title}</h4>
        {!!titleButtonAction &&
             <Button
             {...buttonProps}
             variant="contained">
             <PlaylistAddIcon/>
           </Button>
           }
      </div>}
      <DataTableExtensions {...tableDataExtensions}>
        <DataTable {...tableData}/>
      </DataTableExtensions>
    </div>
  );
}

export default BaseTable;
