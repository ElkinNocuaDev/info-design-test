import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Container } from 'react-bootstrap';

function DataTramosCLiente({ initialDate, finalDate }) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = { fechainicial: initialDate, fechafinal: finalDate };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      try {
        const res = await fetch('http://localhost:4000/tramos-cliente', requestOptions);
        const responseData = await res.json();

        if (Array.isArray(responseData)) {
          setCategory(responseData);
        } else {
          // Manejar el caso en el que la respuesta no es un array
          console.error('La respuesta no es un array:', responseData);
        }
      } catch (error) {
        // Manejo de errores
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, [initialDate, finalDate]);

  const columns = [
    {
      name: 'Tipo Consumo',
      selector: 'TipoConsumo',
      sortable: true,
    },
    {
      name: 'Linea',
      selector: 'Linea',
      sortable: true,
    },
    {
      name: 'Perdidas',
      selector: 'Perdidas',
      sortable: true,
    },
  ];

  return (
    <Container>
      <div className="row">
        <div className="col-sm-8 text-success">
          <h5 className="p-3 fw-bold text-black">Resultados de la Consulta</h5>
          <DataTable
            columns={columns}
            data={category}
            pagination
            highlightOnHover
            fixedHeader
          />
        </div>
      </div>
    </Container>
  );
}

export default DataTramosCLiente;