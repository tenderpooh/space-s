import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from "@material-ui/core";

import {
  SentimentVerySatisfied,
  SentimentVeryDissatisfied,
  SentimentSatisfied,
  SentimentDissatisfied
} from "@material-ui/icons";
import { red, green, orange, blueGrey } from "@material-ui/core/colors";

function createData(ship, customer, issue, satisfaction) {
  return { ship, customer, issue, satisfaction };
}

const rows = [
  createData(
    "Cupcake",
    305,
    3.7,
    <SentimentVeryDissatisfied fontSize="default" style={{ color: red[500] }} />
  ),
  createData(
    "Donut",
    452,
    25.0,
    <SentimentVerySatisfied fontSize="default" style={{ color: green[500] }} />
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <SentimentDissatisfied fontSize="default" style={{ color: orange[500] }} />
  ),
  createData(
    "Frozen yoghurt",
    159,
    6.0,
    <SentimentSatisfied fontSize="default" style={{ color: blueGrey[500] }} />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <SentimentDissatisfied fontSize="default" style={{ color: red[500] }} />
  )
];

const headCells = [
  {
    id: "ship",
    align: "center",
    disablePadding: true,
    label: "우주선"
  },
  { id: "customer", align: "right", disablePadding: false, label: "탑승 인원" },
  {
    id: "issue",
    align: "right",
    disablePadding: false,
    label: "안전 이슈 발생"
  },
  {
    id: "satisfaction",
    align: "center",
    disablePadding: false,
    label: "고객 만족도"
  }
];

export default function CustomerTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <TableContainer style={{ padding: 16 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {headCells.map(headCell => (
                <TableCell
                  key={headCell.id}
                  align={headCell.align}
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
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover tabIndex={-1} key={row.ship}>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.ship}
                    </TableCell>
                    <TableCell align="right">{row.customer}명</TableCell>
                    <TableCell align="right">{row.issue}건</TableCell>
                    <TableCell align="center">{row.satisfaction}</TableCell>
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
