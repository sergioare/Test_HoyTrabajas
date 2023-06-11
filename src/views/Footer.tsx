import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <div className="p-6 flex justify-center gap-6 items-center">
      <p className="text-sm opacity-[0.7]">&#169; 2023 Sergio Arevalo. All Rights Reserved</p>
      <IconButton href='https://github.com/sergioare' target='_blank' rel='noopener noreferrer' >
        <GitHubIcon className="text-primary"/>
      </IconButton>
      <IconButton href='https://www.linkedin.com/in/sergio-arevalo-ba4523254/' target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon className="text-primary"/>
      </IconButton>
    </div>
  )
}
