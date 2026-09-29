export const downloadResume = () => {
  const pdfPath = '/ADAKKI_SAI_UDAY_KIRAN_RESUME.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;
  link.setAttribute('download', 'ADAKKI_SAI_UDAY_KIRAN_RESUME.pdf');
  link.setAttribute('type', 'application/pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
