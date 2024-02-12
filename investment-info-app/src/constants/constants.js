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

export const assetClassList = [
  { label: "PE(Private Equity)", value: "PE" },
  { label: "PD(Private Debt)", value: "PD" },
  { label: "RE(Real Estate)", value: "RE" },
  { label: "INF(Infrastructure)", value: "INF" },
  { label: "NR(Natural Resources)", value: "NR" },
  { label: "HF(Hedge Funds)", value: "HF" },
];

export const investorColumns = [
  { field: "investorName", headerName: "Investor Name", flex: 1.8 },
  {
    field: "fundId",
    headerName: "Fund Id",
    cellClassName: "name-column--cell",
    type: "number",
  },
  {
    field: "fundName",
    headerName: "Fund Name",
    type: "string",
    flex: 1.6,
  },
  {
    field: "fundManagerId",
    headerName: "Manager Id",
    type: "number",
    cellClassName: "name-column--cell",
  },
  {
    field: "fundManagerName",
    headerName: "Manager Name",
    flex: 1.5,
  },
  {
    field: "fundCurrency",
    headerName: "Fund Currency",
    type: "string",
  },

  {
    field: "fundSizeMn",
    headerName: "Fund Size",
    cellClassName: "name-column--cell",
    type: "number",
  },

  {
    field: "coreIndustries",
    headerName: "Core Industries",
    flex: 1,
  },
  {
    field: "fundType",
    headerName: "Fund Type",
    type: "string",
  },
  {
    field: "benchmarkLocations",
    headerName: "Benchmark Locations",
    type: "string",
    flex: 1,
  },

  {
    field: "managerExperience",
    headerName: "Experience",
    type: "number",
  },
];
