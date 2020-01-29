import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Checkbox,
  TableHead
} from "@material-ui/core";

function createData(checked, title, content, key, value, bonus) {
  return { checked, title, content, key, value, bonus };
}

const rows = [
  createData(
    true,
    "축 달성 50인",
    "우주 여행 이용 고객 50인 달성",
    "누적 고객 수",
    50,
    100
  ),
  createData(
    false,
    "축 달성 100인",
    "우주 여행 이용 고객 100인 달성",
    "누적 고객 수",
    100,
    200
  ),
  createData(
    false,
    "축 달성 500인",
    "우주 여행 이용 고객 500인 달성",
    "누적 고객 수",
    500,
    300
  ),
  createData(
    false,
    "축 달성 로켓 10호",
    "누적 발사 로켓 10대 달성",
    "누적 발사 로켓 수",
    10,
    100
  ),
  createData(
    false,
    "축 달성 로켓 50호",
    "누적 발사 로켓 50대 달성",
    "누적 발사 로켓 수",
    50,
    300
  ),
  createData(
    false,
    "축 달성 로켓 100호",
    "누적 발사 로켓 100대 달성",
    "누적 발사 로켓 수",
    100,
    1000
  ),
  createData(
    false,
    "최초 우주 관광 성공",
    "우주여행사 최초 우주 로켓 발사 성공",
    "최초 관광 성공",
    true,
    100
  ),
  createData(
    false,
    "최초 지구 무사 귀환",
    "우주여행사 최초 우주 로켓 지구 귀환 성공",
    "최초 귀환 성공",
    true,
    100
  ),
  createData(
    false,
    "최초 화성 착륙 성공",
    "우주여행사 최초 화성에 로켓 착륙 성공",
    "최초 화성 착륙 성공",
    true,
    300
  ),
  createData(
    false,
    "최초 목성 착륙 성공",
    "우주여행사 최초 목성에 로켓 착륙 성공",
    "최초 목성 착륙 성공",
    true,
    300
  ),
  createData(
    false,
    "고객만족 100% 달성",
    "고객만족도 평가에서 불만 건수 0 달성",
    "고객 평가 불만 수",
    0,
    500
  ),
  createData(
    false,
    "무사고 운행",
    "로켓 귀환 날짜 지연 건수 0 달성",
    "로켓 귀환 지연 수",
    0,
    300
  ),
  createData(
    false,
    "로켓 발사 실험왕",
    "시뮬레이션 시도 횟수 50회 달성",
    "시뮬레이션 시도 수",
    50,
    100
  )
];

const headCells = [
  {
    id: "checked",
    align: "center",
    disablePadding: true,
    label: "달성"
  },
  {
    id: "title",
    align: "left",
    disablePadding: false,
    label: "업적"
  },
  { id: "content", align: "left", disablePadding: false, label: "달성 조건" },
  { id: "bonus", align: "right", disablePadding: false, label: "보상 ($)" }
];

export default function MilestoneTable() {
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
      <TableContainer>
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
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left" padding="checkbox">
                      <Checkbox checked={row.checked} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell>{row.content}</TableCell>
                    <TableCell align="right">{row.bonus}</TableCell>
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
