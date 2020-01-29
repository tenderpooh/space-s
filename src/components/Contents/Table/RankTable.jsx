import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TableHead
} from "@material-ui/core";

function createData(rank, company, brandValue) {
  return { rank, company, brandValue };
}

const rows = [
  createData(1, "삼성여행", 82),
  createData(2, "걸어서달까지", 79),
  createData(3, "모두투어", 61),
  createData(4, "스페이스X", 32),
  createData(5, "파랑풍선", -2)
];

const headCells = [
  {
    id: "rank",
    numeric: false,
    disablePadding: false,
    label: "순위"
  },
  { id: "company", numeric: false, disablePadding: false, label: "회사명" },
  {
    id: "brandValue",
    numeric: true,
    disablePadding: false,
    label: "브랜드 가치"
  }
];

export default function RankTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              {headCells.map(headCell => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? "right" : "center"}
                  padding={headCell.disablePadding ? "none" : "default"}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell component="th" scope="row" align="center">
                      {row.rank}
                    </TableCell>
                    <TableCell align="center">{row.company}</TableCell>
                    <TableCell align="right">{row.brandValue}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 33 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}
