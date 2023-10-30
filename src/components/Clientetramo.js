import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Container } from 'react-bootstrap';

function Clientetramo({ initialDate, finalDate }) {
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
        const res = await fetch('https://info-design-back.onrender.com/cliente', requestOptions);
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
      name: 'Linea',
      selector: 'Linea',
      sortable: true,
    },
    {
      name: 'Consumo Residencial',
      selector: 'consumo_residencial',
      sortable: true,
    },
    {
      name: 'Consumo Comercial',
      selector: 'consumo_comercial',
      sortable: true,
    },
    {
      name: 'Consumo Industrial',
      selector: 'consumo_industrial',
      sortable: true,
    },
    {
      name: 'Perdidas Residencial',
      selector: 'perdidas_residencial',
      sortable: true,
    },
    {
      name: 'Perdidas Comercial',
      selector: 'perdidas_comercial',
      sortable: true,
    },
    {
      name: 'Perdidas Industrial',
      selector: 'perdidas_industrial',
      sortable: true,
    },
    {
        name: 'Costo Residencial',
        selector: 'costo_residencial',
        sortable: true,
    },
    {
        name: 'Costo Comercial',
        selector: 'costo_comercial',
        sortable: true,
    },
    {
        name: 'Costo Industrial',
        selector: 'costo_industrial',
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

export default Clientetramo;