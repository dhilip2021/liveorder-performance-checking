import * as React from "react";

import loop from "../../../../assets/images/icons/loop.svg";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import exclamation from "../../../../assets/images/icons/exclamation.svg";
import Zoom from '@mui/material/Zoom';

const RegisterRequestPopup = (props) => {
	return (
		<div>
			<>
			{ props.status === 0  && (
				<>
					<Dialog
						onClose={props.handleClose}
						aria-labelledby="customized-dialog-title"
						className="sucDialogimg"
						open={props.open}
					>
						<DialogTitle id="customized-dialog-title" className="sucimgclose">
							<Tooltip title="Close" TransitionComponent={Zoom}>
								<IconButton
									style={{ float: "right" }}
									aria-label="close"
									onClick={props.handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Tooltip>
						</DialogTitle>

						<>
							<img src={loop} alt="loop" className="regsucimg" />
							<DialogContent>
								<div className="text-center">
									<p className="orderf-title">Welcome</p>

									<p className="orderf-label">
										{props.errormsg}
									</p>
								</div>
							</DialogContent>
							{/* <div className="regSuccbtn">
								<Link to="/register/buyer">
									<Button
										variant="contained"
										color="primary"
										className="theme-btn"
									>
										Register
									</Button>
								</Link>
							</div> */}
						</>

						<DialogActions></DialogActions>
					</Dialog>
				</>
			)}
			{ props.status === 100  && (
					<>
					<Dialog
						onClose={props.handleClose}
						aria-labelledby="customized-dialog-title"
						className="sucDialogimg"
						open={props.open}
					>
						<DialogTitle id="customized-dialog-title" className="sucimgclose">
							<Tooltip title="Close" TransitionComponent={Zoom}>
								<IconButton
									style={{ float: "right" }}
									aria-label="close"
									onClick={props.handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Tooltip>
						</DialogTitle>
						<>
							<div className="exclamation text-center">
								<img src={exclamation} alt="exclamation" className="exclamationImg" />
							</div>

							<DialogContent>
								<div className="text-center">
									<p className="orderf-title">Oops!</p>
									<p className="orderf-label">
										{props.errormsg}
									</p>
								</div>
							</DialogContent>
							{/* <div className="regSuccbtn">
								<Link to="/register/buyer">
									<Button
										variant="contained"
										color="primary"
										className="theme-btn"
									>
										Register
									</Button>
								</Link>
							</div> */}
						</>
					</Dialog>
				</>
			)}
			{props.status === 5  && (
				<>
					<Dialog
						onClose={props.handleClose}
						aria-labelledby="customized-dialog-title"
						className="sucDialogimg"
						open={props.open}
					>
						<DialogTitle id="customized-dialog-title" className="sucimgclose">
							<Tooltip title="Close" TransitionComponent={Zoom}>
								<IconButton
									style={{ float: "right" }}
									aria-label="close"
									onClick={props.handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Tooltip>
						</DialogTitle>
						<>
							<div className="exclamation text-center">
								<img src={exclamation} alt="exclamation" className="exclamationImg" />
							</div>

							<DialogContent>
								<div className="text-center">
									<p className="orderf-title">Uh Oh!</p>
									<p className="orderf-label">
										Entered <span>Mobile Number</span> is not registered with us. Click below to Register
									</p>
								</div>
							</DialogContent>
							<div className="regSuccbtn">
								<Link to="/register/buyer">
									<Button
										variant="contained"
										color="primary"
										className="theme-btn"
									>
										Register
									</Button>
								</Link>
							</div>
						</>
					</Dialog>
				</>
			)}
			{props.status === 11 && (
				<>
					<Dialog
						onClose={props.handleClose}
						aria-labelledby="customized-dialog-title"
						className="sucDialogimg"
						open={props.open}
					>
						<DialogTitle id="customized-dialog-title" className="sucimgclose">
							<Tooltip title="Close" TransitionComponent={Zoom}>
								<IconButton
									style={{ float: "right" }}
									aria-label="close"
									onClick={props.handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Tooltip>
						</DialogTitle>

						<>
							<div className="exclamation text-center">
								<img src={exclamation} alt="exclamation" className="exclamationImg" />
							</div>
							<DialogContent>
								<div className="text-center">
									<p className="orderf-title">Oops</p>

									<p className="orderf-label">
										Entered <span>Mobile Number / Password</span> is incorrect. Please Enter valid Mobile Number / Password.
									</p>
								</div>
							</DialogContent>
							{/* <div className="regSuccbtn">
								<Link to="/register/buyer">
									<Button
										variant="contained"
										color="primary"
										className="theme-btn"
									>
										Register
									</Button>
								</Link>
							</div> */}
						</>
					</Dialog>
				</>
			)}
			</>
		</div>
	);
};

export default RegisterRequestPopup;
