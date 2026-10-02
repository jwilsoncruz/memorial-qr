/* =====================================================================
   DATOS DE LOS MEMORIALES  (aquí agregas un bloque por cada cliente)
   ---------------------------------------------------------------------
   Cada memorial tiene un "id" (sin espacios ni tildes, con guiones).
   Su página queda en:  memorial.html?id=EL-ID
   Ejemplo:             memorial.html?id=juan-perez

   PARA AGREGAR UN CLIENTE:
   1. Copia el bloque de "plantilla-vacia" (abajo), pégalo antes del último "};"
   2. Cámbiale el id (la palabra antes de los dos puntos) y los datos.
   3. Cuidado con las comas: cada bloque termina con "}," y las comillas " deben cerrar.
   4. Sube las fotos a la carpeta "fotos" y escribe su nombre, ej: "fotos/juan-1.jpg"
   ===================================================================== */

/* Firebase (opcional). Mientras sea null, las velas y mensajes se guardan
   solo en el celular de cada visitante. Cuando conectes Firebase, pega aquí
   los datos de tu proyecto y toda la familia verá lo mismo. */


const FIREBASE_CONFIG = {
  apiKey: "AIzaSyABq65DnVh6XyHdcgBrPeDYKNWdonOa4JU",
  authDomain: "memorial-qr-a8ec2.firebaseapp.com",
  projectId: "memorial-qr-a8ec2",
  appId: "1:24622501062:web:97daaa19f5aca50dbe5bc7"
};


const MEMORIALES = {

  "juan-perez": {
    nombre: "Juan Pérez Gómez",
    nacimiento: "1950",
    fallecimiento: "2026",
    frase: "Vivió con amor, trabajó con esfuerzo y dejó un legado imborrable.",
    foto: "",                       /* ej: "fotos/juan-perfil.jpg" (si queda vacío se muestran sus iniciales) */
    historia: [
      "Aquí va la historia de su vida: dónde nació, a qué se dedicó, a quién amó.",
      "Puedes escribir varios párrafos; cada texto entre comillas es un párrafo."
    ],
    galeria: [],                    /* ej: ["fotos/juan-1.jpg", "fotos/juan-2.jpg"] */
    familia: {
      padres: [
        { nombre: "Pedro Pérez", detalle: "1921 – 1990" },
        { nombre: "Rosa Gómez",  detalle: "1925 – 2001" }
      ],
      pareja: { nombre: "Elena Rojas", detalle: "Esposa" },
      hijos: [
        { nombre: "Carlos", detalle: "Hijo" },
        { nombre: "Ana",    detalle: "Hija" },
        { nombre: "Luis",   detalle: "Hijo" }
      ]
    },
    ubicacion: "Cementerio General, Trinidad, Beni, Bolivia"   /* lo que se busca en Google Maps */
  },

  "eusebia-noe": {
    nombre: "Eusebia Noe Cubene",
    nacimiento: "14 ago 1935",
    fallecimiento: "8 feb 2012",
    frase: "Que su alma allá arriba nos ayude a permanecer siempre unidos en su memoria.",
    foto: "fotos/eusebia-perfil.jpg",
    historia: [
      "Eusebia Noe Cubene nació el 14 de agosto de 1935. Fue hija de Melchor Noe y Nemesia Cuvene Flores, esposa de Marcelino Chuve Surubi y madre de cinco hijos.",
      "Falleció el 8 de febrero de 2012. Su familia la recuerda con cariño."
    ],
    galeria: [
      "fotos/eusebia-1.jpg",
      "fotos/eusebia-2.jpg",
      "fotos/eusebia-3.jpg",
      "fotos/eusebia-4.jpg",
      "fotos/eusebia-5.jpg"
    ],
    familia: {
      padres: [
        { nombre: "Melchor Noe",    detalle: "1912 – 1947" },
        { nombre: "Nemesia Cuvene", detalle: "1914 – 1998" }
      ],
      pareja: { nombre: "Marcelino Chuve", detalle: "1934 – 1974" },
      hijos: [
        { nombre: "Robertina", detalle: "1951 – 1951" },
        { nombre: "Luis",      detalle: "1954 – 1973" },
        { nombre: "Nemesia",   detalle: "Hija" },
        { nombre: "Mario",     detalle: "1958 – 1959" },
        { nombre: "Rufino",    detalle: "1961 – 2014" }
      ]
    },
    ubicacion: ""
  },

  /* ---------------- PLANTILLA VACÍA: copia desde aquí ---------------- */
  "plantilla-vacia": {
    nombre: "Nombre Apellido",
    nacimiento: "0000",
    fallecimiento: "0000",
    frase: "Una frase corta que lo describa.",
    foto: "",
    historia: [
      "Primer párrafo de su historia.",
      "Segundo párrafo (puedes borrar este si no hace falta)."
    ],
    galeria: [],
    familia: {
      padres: [],                   /* hasta 2: { nombre: "...", detalle: "1920 – 1990" } */
      pareja: null,                 /* o { nombre: "...", detalle: "Esposa" } */
      hijos: []                     /* hasta 6 */
    },
    ubicacion: "Cementerio General, Trinidad, Beni, Bolivia"
  }
  /* ---------------- hasta aquí ---------------- */

};
