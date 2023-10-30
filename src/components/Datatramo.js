import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Container, Col, Row } from 'react-bootstrap';
import GraficoBarras from './GraficoBarras';
import GraficoTorta from './GraficoTorta';


function Datatramo({ initialDate, finalDate }) {
  const [originalData, setOriginalData] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('');
  const [perdidasData, setPerdidasData] = useState([]);
  const [consumoData, setConsumoData] = useState([]);
  const [costoData, setCostoData] = useState([]);
  const [perdidasLabels, setPerdidasLabels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = { fechainicial: initialDate, fechafinal: finalDate };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      try {
        const res = await fetch('https://info-design-back.onrender.com/tramos', requestOptions);
        const responseData = await res.json();

        if (Array.isArray(responseData)) {
          setCategory(responseData);
          setOriginalData(responseData); // Guardar una copia de los datos originales

          const perdidasLabels = responseData.map(item => item.Linea);
          setPerdidasLabels(perdidasLabels);

          const perdidas = responseData.map(item => item.perdidas);
          setPerdidasData(perdidas);

          const consumo = responseData.map(item => item.consumo);
          setConsumoData(consumo);

          //const [costoData, setCostoData] = useState([]);
          const costo = responseData.map(item => item.costo);
          setCostoData(costo);

        } else {
          console.error('La respuesta no es un array:', responseData);
        }
      } catch (error) {
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
      name: 'Residencial',
      selector: 'consumo',
      sortable: true,
    },
    {
      name: 'Comercial',
      selector: 'perdidas',
      sortable: true,
    },
    {
      name: 'Industrial',
      selector: 'costo',
      sortable: true,
    },
  ];

  const handleSearch = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setCategory(originalData);
    } else {
      const filteredData = originalData.filter((item) => {
        const line = item.Linea.toLowerCase();
        const consumption = item.consumo.toString().toLowerCase();
        const losses = item.perdidas.toString().toLowerCase();
        const cost = item.costo.toString().toLowerCase();
        return (
          line.includes(value.toLowerCase()) ||
          consumption.includes(value.toLowerCase()) ||
          losses.includes(value.toLowerCase()) ||
          cost.includes(value.toLowerCase())
        );
      });
      setCategory(filteredData);
    }
  };

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
            subHeader
            subHeaderComponent={
              <input
                type="text"
                className="w-25 form-control"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            }
            subHeaderAlign="right"
          />
        </div>
      </div>
      <Row>
        <Col sm={6}>
          <GraficoBarras data={{ consumo: consumoData, costo: costoData }} labels={perdidasLabels}/>
        </Col>
        <Col sm={6}>
            <GraficoTorta data={perdidasData} labels={perdidasLabels}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Datatramo;
