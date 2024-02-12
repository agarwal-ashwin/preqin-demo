import { Autocomplete, Box, TextField, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
import { tokens } from "../../theme/theme";
import useAxios from "../../hooks/useAxios";
import Header from "../../components/Header";
import { assetClassList, investorColumns } from "../../constants/constants";
import { addIndexToJsonArray } from "../../utils/utils";

const Details = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  const [data, setData] = useState([]);

  const location = useLocation();
  const investorId = location.pathname.split("/")[2];

  const [selAssetClass, setSelAssetClass] = React.useState({
    label: "PE(Private Equity)",
    value: "PE",
  });

  const { response, loading, error } = useAxios({
    method: "get",
    url: `https://api.preqin.com/api/Investor/commitment/${selAssetClass.value}/${investorId}`,
    dependencyValue: selAssetClass,
  });

  useEffect(() => {
    if (response !== null) {
      const updatedResponse = addIndexToJsonArray(response.data);
      setData(updatedResponse);
    }
  }, [response]);

  const handleListChange = (e, newValue) => {
    setSelAssetClass(newValue);
  };

  return (
    <Box m="20px">
      <Header
        title="Investor Details"
        subtitle={`Investor Id: ${investorId}`}
      />
      <Autocomplete
        disablePortal
        id="asset-class-box"
        options={assetClassList}
        size="xs"
        sx={{ width: 300 }}
        value={selAssetClass}
        renderInput={(params) => <TextField {...params} label="Asset Class" />}
        onChange={handleListChange}
        disableClearable
      />
      <Box
        m="10px 0 0 0"
        height="85vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {error && (
          <div>
            <p>{error.message}</p>
          </div>
        )}
        {data && (
          <DataGrid
            rows={data}
            columns={investorColumns}
            components={{ Toolbar: GridToolbar }}
            loading={loading}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[10, 50, 100]}
          />
        )}
      </Box>
    </Box>
  );
};

export default Details;
