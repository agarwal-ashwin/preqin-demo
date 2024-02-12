export const investorsListColumns = [
  { field: "firmID", headerName: "FirmId", flex: 0.5 },
  { field: "firmName", headerName: "Firm Name", flex: 1 },
  {
    field: "firmType",
    headerName: "Type",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "yearEst",
    headerName: "Date Added",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
];
