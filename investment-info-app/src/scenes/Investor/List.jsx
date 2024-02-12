import { Box, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { investorsListColumns } from "../../constants/constants";
import useAxios from "../../hooks/useAxios";
import { tokens } from "../../theme/theme";

const InvestorsList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 5,
    page: 0,
  });

  const [data, setData] = useState([]);

  const { response, loading, error } = useAxios({
    method: "get",
    url: "api/Investor?FirmId=2670,2792,332,3611",
  });

  useEffect(() => {
    if (response !== null) {
      const updatedResponse = response.data.map((item, index) => ({
        ...item,
        id: index + 1,
      }));
      setData(updatedResponse);
    }
  }, [response]);

  const navigate = useNavigate();
  const handleRowClickEvent = (params) => {
    navigate(`/investors/${params.row.firmID}`);
  };

  return (
    <Box m="20px">
      <Header
        title="Investors List"
        subtitle="List of Investors for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="60vh"
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
            columns={investorsListColumns}
            components={{ Toolbar: GridToolbar }}
            loading={loading}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            onRowClick={handleRowClickEvent}
            pageSizeOptions={[5, 10, 50]}
          />
        )}
      </Box>
    </Box>
  );
};

export default InvestorsList;
