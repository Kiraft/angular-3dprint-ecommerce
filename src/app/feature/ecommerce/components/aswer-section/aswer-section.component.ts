import { Component } from '@angular/core';

interface AnswerType {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-aswer-section',
  templateUrl: './aswer-section.component.html',
})
export class AswerSectionComponent {
  faqs: AnswerType[] = [
    {
      id: 1,
      question:
        'Tengo dudas sobre el modelo 3D, ¿lo revisas antes de imprimir?',
      answer: `Al subir el modelo 3D, ofrecemos la opción de verificarlo antes de imprimirlo.
                Revisaremos las siguientes variables: espesores mínimos, agujeros, canales, cavidades,
                  socavaduras, ensamblajes y posibles deformaciones.
                Cualquier problema potencial se comunicará por correo electrónico.`,
      open: false,
    },
    {
      id: 2,
      question: '¿Cuanto cuesta el servicio de impresión 3D?',
      answer: `El costo de la impresión 3D puede variar considerablemente. Depende de múltiples factores, como los
              datos volumétricos, el material, el tiempo de entrega y las opciones de resolución.
              Si tiene un archivo .stl, puede subirlo y consultar los precios con nuestra herramienta de cotización
              instantánea en la parte superior.`,
      open: false,
    },
    {
      id: 3,
      question: '¿Cuánto tiempo se tarda en procesar un pedido?',
      answer: `El tiempo promedio de los últimos 100 proyectos completados ha sido de 3 días desde la confirmación del pedido;
              sin embargo, puede haber adelantos o retrasos durante este período debido a circunstancias de producción.
              Si su proyecto tiene una fecha de entrega estricta, envíenos el enlace al proyecto cargado para garantizar una entrega oportuna.`,
      open: false,
    },
    {
      id: 4,
      question:
        'El formato de archivo que intento cargar no es aceptado, ¿qué debo hacer?',
      answer: `Si su modelo no tiene una extensión válida para la calculadora, deberá enviar un correo a vulcano@ayuda.com y proporcionarnos el archivo a
              través del formulario de contacto para su revisión manual.`,
      open: false,
    },
    {
      id: 5,
      question: '¿Puedo pedir una sola pieza? ¿Y series de miles de piezas?',
      answer: `Sí, en la calculadora online encontrarás la opción de seleccionar desde 1 hasta 200 unidades de forma automática,
                junto con el correspondiente descuento gradual en función de los ejemplares seleccionados.
                Si necesita una tirada mayor, comuníquese con nosotros antes de confirmar un pedido.`,
      open: false,
    },
    {
      id: 6,
      question: '¿Cómo puedo obtener una cotización formal?',
      answer: `Si eres una Empresa o una Administración Pública y necesitas enviar a tu Departamento de Compras el presupuesto formal
              que acabas de crear, no te preocupes: podrás descargarlo directamente en el apartado carrito, en el siguiente paso.`,
      open: false,
    },
    {
      id: 7,
      question: '¿Recibiré una factura por mi pedido?',
      answer: `Sí. Cuando marcamos un pedido como completado y listo para enviar, recibirás un correo electrónico automático
                con la factura y el resumen del pedido a la dirección de correo electrónico proporcionada durante el proceso de compra.`,
      open: false,
    },
  ];

toggleAnswer(id: number): void {
  this.faqs = this.faqs.map(faq => ({
    ...faq,
    open: faq.id === id ? !faq.open : faq.open,
  }));
}
}
