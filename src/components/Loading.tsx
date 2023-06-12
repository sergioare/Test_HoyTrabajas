import RotateLeftIcon from '@mui/icons-material/RotateLeft';

export const Loading = () => {
  return (
    <div className='flex items-center gap-3'>
        <RotateLeftIcon className='animate-spin'></RotateLeftIcon>
        <span>Loading</span>
    </div>
  )
}
