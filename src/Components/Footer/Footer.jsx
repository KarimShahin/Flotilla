import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer-links">
					<p className="footer-links-title">Find us at</p>
					<ul className="social-media-list">
						<li className="social-media-link">
							<FacebookRoundedIcon sx={{ fontSize: 30 }} />
						</li>
						<li className="social-media-link">
							<TwitterIcon sx={{ fontSize: 30 }} />
						</li>
						<li className="social-media-link">
							<GitHubIcon sx={{ fontSize: 30 }} />
						</li>
					</ul>
				</div>
				<p className="footer-text">Copyright &copy;2022 All rights reserved</p>
			</footer>
		</>
	);
}
