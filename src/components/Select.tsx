import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SelectAutoWidth({ value, onChange }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)
  }

  return (
    <FormControl
      sx={{
        minWidth: 200,
        width: '100%',
        border: '1px solid transparent',
        borderRadius: '10px'
      }}
    >
      <InputLabel id="user-type-label">
        Tipo de Usuário
      </InputLabel>

      <Select
        labelId="user-type-label"
        value={value}
        onChange={handleChange}
        label="Tipo de Usuário"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="client">Client</MenuItem>
        <MenuItem value="servicer">Prestador de serviço</MenuItem>
      </Select>
    </FormControl>
  )
}
