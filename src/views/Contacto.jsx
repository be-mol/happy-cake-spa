const Contacto = () => {
    return (
        <div>
            <h2>Cuentanos, ¿en qué te podemos ayudar?</h2>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Descripción</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-warning">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto;