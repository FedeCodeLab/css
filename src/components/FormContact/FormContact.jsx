import "./formContact.css";

export default function FormContact() {
	return (
		<form className="formContact">
			<h2>Contáctanos</h2>

			<div className="flex">
				<div className="column">
					<label htmlFor="nombre">Nombre:</label>
					<input type="text" name="nombre" />
				</div>
				<div className="column">
					<label htmlFor="apellido">Apellido:</label>
					<input type="text" name="apellido" />
				</div>
			</div>

			<label htmlFor="email">Email</label>
			<input type="email" name="email" />

			<label htmlFor="textarea">Escribe un mensaje</label>
			<textarea name="textarea" cols="30" rows="10"></textarea>
			<div className="flex space">
				<button>Enviar Formulario</button>
				<p>¡Gracias por tu mensaje!</p>
			</div>
		</form>
	);
}
