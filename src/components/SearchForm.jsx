export const SearchForm = ({handleSubmit, handleChange,search}) => {
    return (
        <form action="" onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
        <div className="row w-50 w-md-50">
            <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar juegos..."
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <div className="col-12 col-md-3">
                <button className="btn btn-success w-100">Buscar</button>
            </div>
        </div>
    </form>
    )
}