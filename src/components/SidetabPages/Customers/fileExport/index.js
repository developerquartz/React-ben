import React, { useState, Fragment } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

import CsvImport from "./ExportCsv";
// import PdfImport from "./PdfDownloader";

export default (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { file, url, params, columns } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return <CsvImport {...props} title="CSV" />;
};

{
  /**
return (
    <div>
      <BUTTON
        title="Download"
        icon="zmdi-download"
        onClick={handleClick}
        disabled={false}
      />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <CsvImport {...props} title="CSV" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PdfImport {...props} title="PDF" />
        </MenuItem>
      </Menu>
    </div>
  );
*/
}
