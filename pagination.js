function initPagination(options) {
    let currentPage = 0;
    let filters = '';
    options.filters.forEach(function (filter) {
        let value = $(filter.id).val();
        filters += `&${filter.name}=${value}`;
    });
    function cargarRegistros(page) {
        refreshFilters();
        $.get(options.url + "?page=" + page + filters, function (data) {
            currentPage = data.number;
            actualizarTabla(data.content);
            cargarPaginacion(data.totalPages);
            tooltip();
        });
    }

    function refreshFilters() {
        filters = '';
        options.filters.forEach(function (filter) {
            let value = $(filter.id).val();
            filters += `&${filter.name}=${value}`;
        });
    }
    function actualizarTabla(registros) {
        var tabla = $(options.tableSelector);
        tabla.empty();
        if (registros.length !== 0) {
            registros.forEach(function (registro) {
                tabla.append(options.rowTemplate(registro));
                $(options.resultSelector).hide();
            });
        } else {
            $(options.resultSelector).show();
        }
    }

    function cargarPaginacion(totalPages) {
        var paginacion = $(options.paginationSelector);
        paginacion.empty();

        var maxPaginasMostrar = 5; // Número máximo de páginas a mostrar

        var $previousButton = $('<button class="page-link">Anterior</button>');
        $previousButton.on('click', function () {
            cargarRegistros(currentPage - 1);
        });

        if (currentPage > 0) {
            paginacion.append($('<li class="page-item"></li>').append($previousButton));
        } else {
            paginacion.append($('<li class="page-item disabled"></li>').append($previousButton));
        }

        // Lógica para mostrar rangos de páginas
        if (totalPages <= maxPaginasMostrar) {
            for (var i = 0; i < totalPages; i++) {
                agregarPagina(i);
            }
        } else {
            if (currentPage < maxPaginasMostrar - 1) {
                for (var i = 0; i < maxPaginasMostrar; i++) {
                    agregarPagina(i);
                }
                paginacion.append('<li class="page-item"><span class="page-link">...</span></li>');
                agregarPagina(totalPages - 1);
            } else if (currentPage > totalPages - maxPaginasMostrar) {
                agregarPagina(0);
                paginacion.append('<li class="page-item"><span class="page-link">...</span></li>');
                for (var i = totalPages - maxPaginasMostrar; i < totalPages; i++) {
                    agregarPagina(i);
                }
            } else {
                agregarPagina(0);
                paginacion.append('<li class="page-item"><span class="page-link">...</span></li>');
                for (var i = currentPage - Math.floor(maxPaginasMostrar / 2); i <= currentPage + Math.floor(maxPaginasMostrar / 2); i++) {
                    agregarPagina(i);
                }
                paginacion.append('<li class="page-item"><span class="page-link">...</span></li>');
                agregarPagina(totalPages - 1);
            }
        }

        if (currentPage < totalPages - 1) {
            var $nextButton = $('<button class="page-link">Siguiente</button>');
            $nextButton.on('click', function () {
                cargarRegistros(currentPage + 1);
            });
            paginacion.append($('<li class="page-item"></li>').append($nextButton));
        } else {
            var $nextButton = $('<button class="page-link" disabled>Siguiente</button>');
            paginacion.append($('<li class="page-item disabled"></li>').append($nextButton));
        }

        function agregarPagina(page) {
            let mostrar = page + 1;
            if (page === currentPage) {
                paginacion.append(`<li class="page-item active"><span id="current-page" class="page-link" data-currentPage = "${page}"> ${mostrar}</span></li>`);
            } else {
                var $pageButton = $('<button class="page-link">' + mostrar + '</button>');
                $pageButton.on('click', function () {
                    cargarRegistros(page);
                });
                paginacion.append($('<li class="page-item"></li>').append($pageButton));
            }
        }
    }

    function refreshCurrentPage() {
        cargarRegistros(currentPage);
    }

    // Nuevo método para refrescar desde la página 0
    function refreshFromPageZero() {
        cargarRegistros(0);
    }

    $(document).ready(function () {
        cargarRegistros(0);
    });

    return {
        refreshCurrentPage: refreshCurrentPage,
        refreshFromPageZero: refreshFromPageZero
    };
}
