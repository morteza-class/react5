import Autocomplete from "@mui/material/Autocomplete";
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { DataGrid, type GridColDef, type GridRowsProp } from '@mui/x-data-grid';
import { LucideEye, LucidePencil, LucideTrash } from "lucide-react";
import PageHeader from "../../components/global/PageHeader";
import top100Films from "./data/movies";



const MUIPage = () => {

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  const rows: GridRowsProp = [
    { id: 1, name: 'Data Grid', description: 'the Community version' },
    { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
    { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
  ];

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Product Name', width: 200, rowHeader: true, },
    { field: 'description', headerName: 'Description', width: 300 },
    {
      field: 'action', headerName: 'Action', width: 300,
      renderCell: (params) => {

        const onClick = (type: string) => {
          console.log(type)
        }

        return (
          <ButtonGroup variant="outlined" size="medium">
            <Button color="error" className="h-10" onClick={() => onClick('delete')}><LucideTrash size={20} /></Button>
            <Button color="info" className="h-10" onClick={() => onClick('edit')}><LucidePencil size={20} /></Button>
            <Button color="inherit" className="h-10" onClick={() => onClick('show')}><LucideEye size={20} /></Button>
          </ButtonGroup>
        )
      }
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageHeader text="MUI Components" />

      <div className="flex gap-4 items-end mb-8">

        <Button variant="contained" color="primary" size="large" className="mb-8">
          MUI Button
        </Button>
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" size="medium" />}
        />

        <ButtonGroup variant="outlined" size="medium">
          <Button color="error" className="h-10"><LucideTrash size={20} /></Button>
          <Button color="info" className="h-10"><LucidePencil size={20} /></Button>
          <Button color="inherit" className="h-10"><LucideEye size={20} /></Button>
        </ButtonGroup>

      </div>

      <div>
        <DataGrid columns={columns} rows={rows} loading />
      </div>

    </ThemeProvider>
  );
};

export default MUIPage;