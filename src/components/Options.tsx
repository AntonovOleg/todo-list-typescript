import { Button, Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";

interface IProps {
  optionsVisible: boolean;
  setOptionsVisible: (visible: boolean) => void;
  completeAll: () => void;
  deleteAll: () => void;
}

const Options: FC<IProps> = ({
  optionsVisible,
  setOptionsVisible,
  completeAll,
  deleteAll,
}) => {
  return (
    <>
      <Drawer
        anchor="right"
        open={optionsVisible}
        onClose={() => setOptionsVisible(false)}
      >
        <Box
          sx={{
            width: "250px",
            p: '15px'
          }}
        >
          <Typography variant="h5">Options</Typography>
          <Box sx={{
            my: '10px'
          }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: "20px",
                width: '200px'
              }}
              onClick={() => completeAll()}
            >
              Complete All
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                ml: "20px",
                width: '200px'
              }}
              onClick={() => deleteAll()}
            >
              Delete All
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Options;
