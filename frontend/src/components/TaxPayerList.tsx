import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DataTable, { TableColumn } from 'react-data-table-component';

type TaxPayer = {
  tid: bigint;
  firstName: string;
  lastName: string;
  address: string;
};

type TaxPayerListProps = {
  taxPayers: TaxPayer[];
};

const columns: TableColumn<TaxPayer>[] = [
  {
    name: 'TID',
    selector: row => row.tid.toString(),
    sortable: true,
  },
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true,
  },
  {
    name: 'Address',
    selector: row => row.address,
    sortable: true,
  },
];

const customStyles = {
  table: {
    style: {
      backgroundColor: '#000000',
      color: '#33FF33',
      border: '2px solid #33FF33',
    },
  },
  rows: {
    style: {
      backgroundColor: '#000000',
      color: '#33FF33',
      '&:hover': {
        backgroundColor: '#1E1E1E',
      },
    },
  },
  headRow: {
    style: {
      backgroundColor: '#1E1E1E',
      color: '#FFFF00',
    },
  },
  pagination: {
    style: {
      backgroundColor: '#000000',
      color: '#33FF33',
    },
    pageButtonsStyle: {
      backgroundColor: '#1E1E1E',
      color: '#33FF33',
      '&:hover': {
        backgroundColor: '#4CAF50',
        color: '#000000',
      },
    },
  },
};

const TaxPayerList: React.FC<TaxPayerListProps> = ({ taxPayers }) => {
  return (
    <DataTable
      title="TaxPayer Records"
      columns={columns}
      data={taxPayers}
      pagination
      responsive
      highlightOnHover
      striped
      customStyles={customStyles}
    />
  );
};

export default TaxPayerList;
