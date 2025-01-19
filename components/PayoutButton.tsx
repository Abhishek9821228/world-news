"use client";

import jsPDF from "jspdf";

const TestPage = () => {
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Total Payout", 10, 10);
    doc.save("Payout.pdf");
  };

  return <button className="startup-card_btn_btn" onClick={exportPDF}>Download Payout</button>;
};

export default TestPage;
