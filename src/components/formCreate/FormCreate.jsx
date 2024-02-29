import "./formCreate.css";

export default function FormCreate() {
	return (
		<form className="createForm">
			<div className="top">
				<img src="../../img/user.webp" alt="" />
			</div>
			<div className="bottomContainer">
				<div className="bottom">
					<div className="flex">
						<div className="column">
							<input
								type="text"
								name="nombre"
								placeholder="Ingrese su nombre"
							/>
						</div>
						<div className="column">
							<input
								type="text"
								name="apellido"
								placeholder="Ingrese su apellido"
							/>
						</div>
					</div>
					<div className="flex">
						<div className="column">
							<input
								type="text"
								name="usuario"
								placeholder="Ingrese su usuario"
							/>
						</div>
						<div className="column">
							<input type="email" name="email" placeholder="Ingrese su email" />
						</div>
					</div>
					<div className="flex">
						<div className="column">
							<input
								type="password"
								name="password"
								placeholder="Ingrese su contraseña"
							/>
						</div>
						<div className="column">
							<input
								type="password"
								name="apellido"
								placeholder="Confirme su contraseña"
							/>
						</div>
					</div>
					<div className="column">
						<input
							type="tel"
							name="telefono"
							placeholder="Ingrese su télefono"
						/>
					</div>
					<button>Submit</button>
				</div>
			</div>
		</form>
	);
}
