import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { LoaderCircle } from 'lucide-react';

type PropTypes = ButtonProps & { tooltip?: string }

const DsButton = ({ tooltip = '', ...props }: PropTypes) => {

  return (
    <Tooltip title={tooltip}>
      <Button
        type={props.type}
        className={`cursor-pointer transition-all flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed! ${props.className}`}
        onClick={props.onClick}
        disabled={props.loading || props.disabled ? true : false}
        color={props.color}
        size={props.size}
        variant={props.variant}
      >
        {!props.loading && props.startIcon ? props.startIcon : null}
        {props.loading ? <LoaderCircle size={18} className='animate-spin' /> : undefined}

        {props.children}
      </Button>
    </Tooltip>
  )
}

export default DsButton