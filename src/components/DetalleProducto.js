import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DetalleProducto = () => {
const { id } = useParams();

const obtenerDetalleProducto = (productId) => {
    const productos = [
    {
        id: 1,
        nombre: 'Barbijo de Alta Protección',
        descripcion: 'Barbijo de tres capas con alta eficiencia de filtrado.',
        precio: 3550.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/Barbijo.jpg?alt=media',
        detalles: {
        material: 'Tela no tejida',
        color: 'Blanco',
        talla: 'Única',
        categoria: 'Barbijos',
        recomendaciones: [
            'Reemplazar cada 4 horas.',
            'Almacenar en lugar fresco y seco.',
            'No reutilizar.',
        ],
        instruccionesUso: 'Ajustar sobre nariz y boca, asegurándose de cubrir completamente la nariz y la barbilla.',
        },
        stock: 10,
    },
    {
        id: 2,
        nombre: 'Compresas Estériles',
        descripcion: 'Compresas estériles de alta absorción para procedimientos médicos.',
        precio: 2250.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/compresas.jpg?alt=media',
        detalles: {
        tipo: 'Estéril',
        tamaño: '10x10 cm',
        capas: 4,
        categoria: 'Compresas',
        recomendaciones: [
            'Mantener en su empaque original hasta su uso.',
            'Desechar después de su utilización.',
            'No utilizar si el paquete está dañado.',
        ],
        instruccionesUso: 'Aplicar sobre la zona a tratar y fijar con cinta adhesiva.',
        },
        stock: 15,
    },
    {
        id: 3,
        nombre: 'Guantes de Nitrilo',
        descripcion: 'Guantes desechables de nitrilo para uso médico.',
        precio: 7750.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/guantes%20nitrilo.jpg?alt=media',
        detalles: {
        material: 'Nitrilo',
        color: 'Azul',
        tallasDisponibles: ['S', 'M', 'L'],
        categoria: 'Guantes',
        recomendaciones: [
            'Almacenar en lugar fresco y seco.',
            'Verificar la integridad del guante antes de usar.',
            'No reutilizar.',
        ],
        instruccionesUso: 'Colocar el guante en la mano y ajustar adecuadamente los dedos.',
        },
        stock: 20,
    },
    {
        id: 4,
        nombre: 'Gafas Protectoras',
        descripcion: 'Gafas de seguridad para protección ocular.',
        precio: 10500.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/gafas-de-proteccion.jpg?alt=media',
        detalles: {
        material: 'Plástico resistente',
        ajuste: 'Ajuste cómodo',
        proteccionUV: true,
        categoria: 'Otros',
        recomendaciones: [
            'Limpiar con un paño suave para evitar rayaduras.',
            'No utilizar productos químicos agresivos para la limpieza.',
            'Almacenar en estuche cuando no estén en uso.',
        ],
        instruccionesUso: 'Colocar sobre los ojos y ajustar la banda elástica.',
        },
        stock: 12,
    },
    {
        id: 5,
        nombre: 'Vasos Desechables',
        descripcion: 'Vasos desechables para bebidas frías o calientes.',
        precio: 4200.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/vasos-descartables.jpg?alt=media',
        detalles: {
        capacidad: '250 ml',
        material: 'Papel recubierto de polietileno',
        cantidad: 50,
        categoria: 'Otros',
        recomendaciones: [
            'No utilizar con líquidos extremadamente calientes.',
            'Desechar adecuadamente después de su uso.',
            'No aplastar ni perforar los vasos.',
        ],
        instruccionesUso: 'Rellenar con la bebida deseada y desechar después de su uso.',
        },
        stock: 30,
    },
    {
        id: 6,
        nombre: 'Jeringa Desechable',
        descripcion: 'Jeringa desechable para aplicaciones médicas.',
        precio: 1000.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/jeringa.webp?alt=media',
        detalles: {
        capacidad: '10 ml',
        calibre: '21G',
        esterilizacion: 'Radiación Gamma',
        categoria: 'Otros',
        recomendaciones: [
            'Verificar la integridad del empaque antes de usar.',
            'No reutilizar.',
            'Eliminar adecuadamente después de su uso.',
        ],
        instruccionesUso: 'Aplicar la jeringa según las indicaciones médicas.',
        },
        stock: 18,
    },
    {
        id: 7,
        nombre: 'Algodón Hidrófilo',
        descripcion: 'Algodón hidrófilo para uso odontologico.',
        precio: 1800.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/algodon.jpg?alt=media',
        detalles: {
        presentacion: 'Paquete de 250 gramos',
        suavidad: 'Extra suave',
        absorcion: 'Alta absorción de líquidos',
        categoria: 'Otros',
        recomendaciones: [
            'Almacenar en lugar seco.',
            'No utilizar si el empaque está dañado.',
            'Utilizar con instrumentos estériles.',
        ],
        instruccionesUso: 'Aplicar según las indicaciones odontológicas.',
        },
        stock: 25,
    },
    ];

    return productos.find(producto => producto.id === parseInt(productId));
};

const producto = obtenerDetalleProducto(id);

if (!producto) {
    return <p>Producto no encontrado</p>;
}

return (
    <div className="detalle-producto">
    <div className="imagen-container">
        <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
    </div>
    <div className="info-container">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio.toLocaleString()}</p>

        <div className="detalles-container">
<h3>Detalles:</h3>
<ul>
    {Object.entries(producto.detalles).map(([key, value]) => (
    <li key={key}>
        <strong>{key}:</strong> {value}
    </li>
    ))}
</ul>
</div>

{producto.detalles.recomendaciones && (
<div className="recomendaciones-container">
    <h3>Recomendaciones:</h3>
    <ul>
    {producto.detalles.recomendaciones.map((recomendacion, index) => (
        <li key={index}>{recomendacion}</li>
    ))}
    </ul>
</div>
)}

{producto.detalles.instruccionesUso && (
<div className="instrucciones-container">
    <h3>Instrucciones de Uso:</h3>
    <p>{producto.detalles.instruccionesUso}</p>
</div>
)}

        <Link to="/catalogo" className="volver-btn">
        Volver al Catálogo
        </Link>
    </div>
    </div>
);
};

export default DetalleProducto;
