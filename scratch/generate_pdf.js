import fs from 'fs';
import path from 'path';

function createPdfBuffer() {
  const contentStream = `
BT
/F2 18 Tf
50 740 Td
(ADAKKI SAI UDAY KIRAN) Tj
0 -20 Td
/F2 12 Tf
(Aspiring Cloud Engineer) Tj
0 -16 Td
/F1 9.5 Tf
(+91 7796804323  |  udaykiran.7510@gmail.com  |  Nagpur, Maharashtra, India) Tj
0 -18 Td
0 0 500 0.5 re f
0 -18 Td
/F2 12 Tf
(TECHNICAL SKILLS) Tj
0 -15 Td
/F1 9.5 Tf
(Cloud Platform: AWS \\(EC2, S3, Lambda, CloudFront, Route 53, SNS, SQS\\).) Tj
0 -13 Td
(Containers & Orchestration: Docker, Kubernetes \\(K8s\\), Amazon EKS, Amazon ECR.) Tj
0 -13 Td
(Infrastructure as Code: Terraform, AWS CloudFormation.) Tj
0 -13 Td
(OS & Scripting: Linux, Shell Scripting.) Tj
0 -13 Td
(Programming & Development: Python, JavaScript, Git/GitHub.) Tj
0 -18 Td
0 0 500 0.5 re f
0 -18 Td
/F2 12 Tf
(EDUCATION) Tj
0 -15 Td
/F2 10 Tf
(Bachelor of Technology in Computer Science and Engineering | 2022 - 2025 | CGPA:7.5) Tj
0 -13 Td
/F1 9.5 Tf
(Anjuman college of Engineering and Technology Nagpur, India) Tj
0 -16 Td
/F2 10 Tf
(Diploma in Computer Science Engineering | 2019 - 2021 | CGPA:8.40) Tj
0 -13 Td
/F1 9.5 Tf
(Anjuman Polytechnic Nagpur, India) Tj
0 -18 Td
0 0 500 0.5 re f
0 -18 Td
/F2 12 Tf
(KEY PROJECTS) Tj
0 -15 Td
/F2 10 Tf
(* Serverless Image Processing Pipeline \\(AWS\\)) Tj
0 -13 Td
/F1 9 Tf
(Built a serverless image processing pipeline using S3, Lambda, DynamoDB, and SNS. Images uploaded to S3) Tj
0 -11 Td
(trigger a Lambda function for processing, with metadata stored in DynamoDB and completion notifications) Tj
0 -11 Td
(sent via SNS. Resolved IAM permission and Lambda layer configuration issues to get pipeline in production.) Tj
0 -15 Td
/F2 10 Tf
(* Three-Tier VPC Architecture \\(AWS\\)) Tj
0 -13 Td
/F1 9 Tf
(Designed and deployed a three-tier VPC on AWS separating web, application, and database layers across) Tj
0 -11 Td
(public and private subnets in multiple availability zones. Configured route tables, NAT gateway, security) Tj
0 -11 Td
(groups, and network ACLs so only the web tier is internet-facing.) Tj
0 -15 Td
/F2 10 Tf
(* CI/CD Pipeline for Containerized Application) Tj
0 -13 Td
/F1 9 Tf
(Built and deployed a CI/CD pipeline for a containerized application using Docker, GitHub Actions and) Tj
0 -11 Td
(Kubernetes. Automated build, test, and deployment stages to eliminate manual releases.) Tj
0 -18 Td
0 0 500 0.5 re f
0 -18 Td
/F2 12 Tf
(CERTIFICATIONS) Tj
0 -15 Td
/F1 9.5 Tf
(* AWS Certified Cloud Practitioner) Tj
ET
`;

  const streamLength = Buffer.byteLength(contentStream);

  const header = `%PDF-1.4\n`;
  const obj1 = `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`;
  const obj2 = `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`;
  const obj3 = `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`;
  const obj4 = `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${contentStream}\nendstream\nendobj\n`;
  const obj5 = `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`;
  const obj6 = `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`;

  let offset = header.length;
  const off1 = offset; offset += obj1.length;
  const off2 = offset; offset += obj2.length;
  const off3 = offset; offset += obj3.length;
  const off4 = offset; offset += obj4.length;
  const off5 = offset; offset += obj5.length;
  const off6 = offset; offset += obj6.length;

  const xrefOffset = offset;
  const pad = (num) => String(num).padStart(10, '0');

  const xref = `xref
0 7
0000000000 65535 f 
${pad(off1)} 00000 n 
${pad(off2)} 00000 n 
${pad(off3)} 00000 n 
${pad(off4)} 00000 n 
${pad(off5)} 00000 n 
${pad(off6)} 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
${xrefOffset}
%%EOF
`;

  const fullPdf = header + obj1 + obj2 + obj3 + obj4 + obj5 + obj6 + xref;
  return Buffer.from(fullPdf, 'utf-8');
}

const targetPath = path.join(process.cwd(), 'public', 'ADAKKI_SAI_UDAY_KIRAN_RESUME.pdf');
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, createPdfBuffer());
console.log('Valid PDF created at:', targetPath);
