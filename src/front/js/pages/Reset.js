import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

const Reset = () => {
	const [password, setPassword] = useState("");
	const [repassword, setRepassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	const token = useParams();
	const { store, actions } = useContext(Context);
	const handleSubmit = e => {
		e.preventDefault();
		if (password != repassword) {
			console.log("Las contraseñas deben ser iguales");
		} else {
			actions.resetPassword(password, repassword, token.token);
		}
		setRedirect(true);
	};
	return (
		<div>
			<div className="bg-pass vh-100">
				<div className="cont-reset-password">
					<div className="box">
						<h2>Resetear Contraseña</h2>
						<form onSubmit={handleSubmit}>
							<div className="inputBox">
								<input
									type="text"
									onChange={e => {
										setPassword(e.target.value);
									}}
								/>
								<label>Nueva Contraseña</label>
							</div>
							<div className="inputBox">
								<input
									type="text"
									onChange={e => {
										setRepassword(e.target.value);
									}}
								/>
								<label>Confirmar Contraseña</label>
							</div>
							<input type="submit" name="" value="Submit" />
						</form>
					</div>
				</div>
			</div>
			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
};

export default Reset;
