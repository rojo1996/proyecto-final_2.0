const repuestos = [
  { nombre: 'Motor Diesel', categoria: 'Motor', precio: 5000 },
  { nombre: 'Neumático Gigante', categoria: 'Neumático', precio: 1000 },
  { nombre: 'Filtro de Aceite', categoria: 'Filtro', precio: 50 },
  { nombre: 'filtro de aire', categoria: 'Filtro', precio: 48 },
  { nombre: 'filtro de combustible', categoria: 'filtro', precio: 78 },
  { nombre: 'chasis', categoria: 'cuerpo', precio: 34000 },
  { nombre: 'torna mesa', categoria: 'cuerpo', precio: 200000 },
  { nombre: 'manguera de presion', categoria: 'mangueras', precio: 80 },
  { nombre: 'focos', categoria: 'electrico', precio: 70 },
  { nombre: 'tuercas', categoria: 'tuercas y pernos', precio: 20 },
  { nombre: 'pernos', categoria: 'tuercas y pernos', precio: 20 },

];
const mostrarMensaje = (boton, marca) => {
  alert(`Hiciste clic en el botón ${boton} de la marca ${marca}.`);
};

// Función para enviar datos a la API (simulada con un setTimeout)
const enviarDatosALaAPI = datos =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1000);
  });

const obtenerRepuestos = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(repuestos);
    }, 1000)
  );

const mostrarRepuestos = repuestos => {
  console.log('Listado de repuestos:');
  repuestos.forEach(repuesto => {
    console.log(`${repuesto.nombre} - ${repuesto.categoria} - $${repuesto.precio}`);
  });
};

const filtrarRepuestos = () => {
  obtenerRepuestos().then(repuestos => {
    const categoriaUsuario = prompt('Ingrese la categoría de repuestos a mostrar:');

    if (categoriaUsuario) {
      const resultado = repuestos.filter(repuesto =>
        repuesto.categoria.toLowerCase() === categoriaUsuario.toLowerCase()
      );

      if (resultado.length > 0) {
        mostrarRepuestos(resultado);
      } else {
        alert('No se encontraron repuestos para la categoría ingresada.');
      }
    } else {
      alert('Entrada inválida. Por favor, ingrese una categoría.');
    }
  });
};

const agregarRepuesto = () => {
  const nombreUsuario = prompt('Ingrese el nombre del repuesto:');
  const categoriaUsuario = prompt('Ingrese la categoría del repuesto:');
  const precioUsuario = prompt('Ingrese el precio del repuesto:');

  if (nombreUsuario && categoriaUsuario && precioUsuario) {
    const nuevoRepuesto = {
      nombre: nombreUsuario,
      categoria: categoriaUsuario,
      precio: parseFloat(precioUsuario),
    };

    enviarDatosALaAPI(nuevoRepuesto)
      .then(() => {
        repuestos.push(nuevoRepuesto);
        alert('Repuesto agregado exitosamente.');
        // Cambia a otra página después de agregar con éxito
        // window.location.href = 'otra_pagina.html';
      })
      .catch(error => {
        console.error('Error al agregar repuesto:', error);
        alert('Hubo un error al agregar el repuesto. Por favor, inténtelo de nuevo.');
      });
  } else {
    alert('Entrada inválida. Por favor, complete todos los campos.');
  }
};

const buscarRepuestos = () => {
  const busqueda = prompt('Ingrese el nombre del repuesto que desea buscar:');

  if (busqueda) {
    obtenerRepuestos()
      .then(repuestos => {
        const resultado = repuestos.filter(repuesto =>
          repuesto.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );

        if (resultado.length > 0) {
          mostrarRepuestos(resultado);
        } else {
          alert('No se encontraron repuestos para la búsqueda ingresada.');
        }
      })
      .catch(error => {
        console.error('Error al obtener repuestos:', error);
        alert('Hubo un error al obtener los repuestos. Por favor, inténtelo de nuevo.');
      });
  } else {
    alert('Entrada inválida. Por favor, ingrese un nombre de repuesto.');
  }
};

function redirigirAPagina() {
  // Cambia 'https://parts.cat.com/es/catcorp' por la URL que deseas cargar
  window.location.href = 'https://parts.cat.com/es/catcorp';
  window.location.href = 'https://www.resemin.com/index.php?route=product/category&path=63';
  window.location.href = 'https://atlantisparts.pe/repuestos-para-john-deere/';
  window.location.href = 'https://repuestos.maqu.pe/brand/sandvik-revfk';
}
 
