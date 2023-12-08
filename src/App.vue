<template>
  <div className="container">
     <div className="title">
      <h1>EMI CALCULATOR</h1>
      <p>Name: SUSHAN PRASAD</p>
      <p>Mail: sushansujipro@gmail.com</p>
      <p>Contact: +91 9344855574
      </p>
    </div>

    <div className="emi">
      <label for="loan-amount">Home Loan Amount:</label>
      <input id="loan-amount" v-model="loanAmount" type="number" />

      <label for="interest-rate">Interest Rate:</label>
      <input id="interest-rate" v-model="interestRate" type="number" />

      <label for="loan-tenure">Loan Tenure:</label>
      <input id="loan-tenure" v-model="loanTenure" type="number" />

      <button @click="calculateEMI">Calculate EMI</button>

      <h3>Result:</h3>
      <p>LOAN EMI: ₹ {{ emi }}</p>
      <p>Total Interest Payable: ₹ {{ totalInterest }}</p>
      <p>Total Payment: ₹ {{ totalPayment }}</p>

      <!-- Chart Section -->
      <div>
        <canvas ref="chart"></canvas>
      </div>
    </div>
    </div>
</template>

<script>
import "./App.css";
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      loanAmount: 0,
      interestRate: 0.0,
      loanTenure: 0,
      emi: 0,
      totalInterest: 0,
      totalPayment: 0,
    };
  },
  methods: {
    calculateEMI() {
      const r = this.interestRate / 100 / 12;
      const n = this.loanTenure * 12;
      this.emi =
        (this.loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      this.totalInterest =
        this.emi * this.loanTenure * 12 - this.loanAmount;
      this.totalPayment = this.emi * this.loanTenure * 12;

      // Call function to update or create the chart
      this.updateChart();
    },
    updateChart() {
      const ctx = this.$refs.chart.getContext("2d");

      // Destroy existing chart if it exists
      if (this.myChart) {
        this.myChart.destroy();
      }

      this.myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Loan EMI", "Total Interest", "Total Payment"],
          datasets: [
            {
              label: "Amount",
              data: [this.emi, this.totalInterest, this.totalPayment],
              backgroundColor: ["rgba(75, 192, 192, 0.2)"],
              borderColor: ["rgba(75, 192, 192, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>
