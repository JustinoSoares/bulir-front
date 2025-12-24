import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className=''>
      <FormControl sx={{  minWidth: 200, width: "80%", border: "1px solid transparent", borderRadius: "10px" }} >
        <InputLabel id="demo-simple-select-autowidth-label">Tipo de Usuário</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Tipo de Usuário"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"client"}>Client</MenuItem>
          <MenuItem value={"servicer"}>Prestador de serviço</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
