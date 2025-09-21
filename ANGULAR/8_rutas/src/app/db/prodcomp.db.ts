import { IProdComp } from "../interfaces/iprodcomp.interface";


export const PRODCOMP: IProdComp[] = [
  {
    id: 1,
    title: "Reparación de electrodomésticos",
    price: 45,
    quantity: 1,
    description: {
      text: "Servicio técnico especializado en lavadoras, neveras y más.",
      slug: "reparacion-electrodomesticos"
    },
    origen: {
      country: "España",
      city: "Toledo",
      cp: "45001"
    }
  },
  {
    id: 2,
    title: "Clases de guitarra",
    price: 30,
    quantity: 1,
    description: {
      text: "Aprende desde cero o mejora tu técnica con un instructor local.",
      slug: "clases-guitarra"
    },
    origen: {
      country: "España",
      city: "Madrid",
      cp: "28001"
    }
  },
  {
    id: 3,
    title: "Diseño gráfico",
    price: 60,
    quantity: 1,
    description: {
      text: "Creación de logotipos, banners y contenido visual para redes.",
      slug: "diseno-grafico"
    },
    origen: {
      country: "España",
      city: "Barcelona",
      cp: "08001"
    }
  },
  {
    id: 4,
    title: "Paseo de mascotas",
    price: 15,
    quantity: 1,
    description: {
      text: "Servicio de paseo diario para perros con atención personalizada.",
      slug: "paseo-mascotas"
    },
    origen: {
      country: "España",
      city: "Valencia",
      cp: "46001"
    }
  },
  {
    id: 5,
    title: "Limpieza de hogar",
    price: 25,
    quantity: 1,
    description: {
      text: "Limpieza profunda o mantenimiento semanal para tu vivienda.",
      slug: "limpieza-hogar"
    },
    origen: {
      country: "España",
      city: "Sevilla",
      cp: "41001"
    }
  }
];
