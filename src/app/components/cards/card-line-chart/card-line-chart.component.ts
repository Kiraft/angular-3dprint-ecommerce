import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Chart, registerables } from "chart.js";

// Registrar todos los componentes de Chart.js (para versiones 3 y superiores)
Chart.register(...registerables);

@Component({
  selector: "app-card-line-chart",
  templateUrl: "./card-line-chart.component.html",
})
export class CardLineChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // ngAfterViewInit() {
  //   const config = {
  //     type: "line",
  //     data: {
  //       labels: [
  //         "January",
  //         "February",
  //         "March",
  //         "April",
  //         "May",
  //         "June",
  //         "July",
  //       ],
  //       datasets: [
  //         {
  //           label: new Date().getFullYear().toString(),
  //           backgroundColor: "#4c51bf",
  //           borderColor: "#4c51bf",
  //           data: [65, 78, 66, 44, 56, 67, 75],
  //           fill: false,
  //         },
  //         {
  //           label: (new Date().getFullYear() - 1).toString(),
  //           fill: false,
  //           backgroundColor: "#fff",
  //           borderColor: "#fff",
  //           data: [40, 68, 86, 74, 56, 60, 87],
  //         },
  //       ],
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       responsive: true,
  //       plugins: {
  //         legend: {
  //           labels: {
  //             color: "white", // 'fontColor' es reemplazado por 'color' en Chart.js 3+
  //           },
  //           align: "end",
  //           position: "bottom",
  //         },
  //         tooltip: {
  //           mode: "index",
  //           intersect: false,
  //         },
  //       },
  //       hover: {
  //         mode: "nearest",
  //         intersect: true,
  //       },
  //       scales: {
  //         x: {
  //           ticks: {
  //             color: "rgba(255,255,255,.7)", // 'fontColor' ahora es 'color'
  //           },
  //           grid: {
  //             color: "rgba(33, 37, 41, 0.3)",
  //             borderDash: [2],
  //           },
  //           title: {
  //             display: false,
  //           },
  //         },
  //         y: {
  //           ticks: {
  //             color: "rgba(255,255,255,.7)", // 'fontColor' ahora es 'color'
  //           },
  //           grid: {
  //             color: "rgba(255, 255, 255, 0.15)",
  //             borderDash: [3],
  //             drawBorder: false,
  //           },
  //           title: {
  //             display: false,
  //           },
  //         },
  //       },
  //     },
  //   };

  //   // Obtener el contexto del canvas
  //   const ctx = document.getElementById("line-chart") as HTMLCanvasElement;
  //   if (ctx) {
  //     const chart = new Chart(ctx.getContext("2d") as CanvasRenderingContext2D, config);
  //   }
  // }
}
