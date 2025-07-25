document.getElementById('proposalForm').addEventListener('submit', function(e) 
{
  e.preventDefault();

  const clientName = document.getElementById('clientName').value;
  const projectTitle = document.getElementById('projectTitle').value;
  const projectDescription = document.getElementById('projectDescription').value;
  const timeline = document.getElementById('timeline').value;
  const budget = document.getElementById('budget').value;

  const proposal = `
  PROPOSAL

  Client: ${clientName}
  Project Title: ${projectTitle}

  Description:
  ${projectDescription}

  Timeline: ${timeline}
  Budget: ${budget}

  Thank you,
  Nishikant Creations™
  `;

  const output = document.getElementById('proposalOutput');
  output.textContent = proposal;
  output.style.display = 'block';

  document.getElementById('downloadBtn').style.display = 'inline-block';
  document.getElementById('pdfBtn').style.display = 'inline-block';

  document.getElementById('downloadBtn').onclick = function() 
  {
    const blob = new Blob([proposal], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${clientName}-Proposal.txt`;
    link.click();
  };

  document.getElementById('pdfBtn').onclick = function() 
  {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(12);
    doc.text(proposal, 10, 10);
    doc.save(`${clientName}-Proposal.pdf`);
  };
});
