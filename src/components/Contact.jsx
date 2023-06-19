import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
const Contact = () => {
  return (
    <div className="footer">
      <IconButton
        aria-label="youtube"
        onClick={() =>
          window.open(
            'https://www.youtube.com/channel/UCib4UAvZU4ivJvJdeqxtCcw'
          )
        }
      >
        <YouTubeIcon fontSize="large" style={{ color: 'white' }} />
      </IconButton>
      <IconButton
        aria-label="instagram"
        onClick={() => window.open('https://www.instagram.com/dingdong_paw')}
      >
        <InstagramIcon fontSize="large" style={{ color: 'white' }} />
      </IconButton>
      <Tooltip title={<h5>647-921-1161</h5>} placement="top">
        <IconButton aria-label="phone">
          <PhoneIcon fontSize="large" style={{ color: 'white' }} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Contact;
