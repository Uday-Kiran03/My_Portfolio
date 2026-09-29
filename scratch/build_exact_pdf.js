import fs from 'fs';
import path from 'path';

function buildPdf() {
  const streamContent = `BT
/F2 18 Tf
50 740 Td
(ADAKKI SAI UDAY KIRAN) Tj
0 -20 Td
/F2 12 Tf
(Aspiring Cloud Engineer) Tj
0 -16 Td
/F1 9.5 Tf
(+91 7796804323  |  udaykiran.7510@gmail.com  |  Nagpur, Maharashtra, India  |  LinkedIn Profile) Tj
ET

0 0 0 setrgbcolor
0.75 w
50 692 m
562 692 l
S

BT
/F2 11 Tf
50 675 Td
(TECHNICAL SKILLS) Tj
0 -16 Td
/F2 9.5 Tf
(Cloud Platform: ) Tj
70 0 Td
/F1 9.5 Tf
(AWS \\(EC2, S3, Lambda, CloudFront, Route 53, SNS, SQS\\).) Tj
-70 -14 Td
/F2 9.5 Tf
(Containers & Orchestration: ) Tj
122 0 Td
/F1 9.5 Tf
(Docker, Kubernetes \\(K8s\\), Amazon EKS, Amazon ECR.) Tj
-122 -14 Td
/F2 9.5 Tf
(Infrastructure as Code: ) Tj
108 0 Td
/F1 9.5 Tf
(Terraform, AWS CloudFormation.) Tj
-108 -14 Td
/F2 9.5 Tf
(OS & Scripting: ) Tj
74 0 Td
/F1 9.5 Tf
(Linux, Shell Scripting.) Tj
-74 -14 Td
/F2 9.5 Tf
(Programming & Development: ) Tj
136 0 Td
/F1 9.5 Tf
(Python, JavaScript, Git/GitHub.) Tj
-136 0 Td
ET

0.75 w
50 580 m
562 580 l
S

BT
/F2 11 Tf
50 563 Td
(EDUCATION) Tj
0 -16 Td
/F2 9.5 Tf
(Bachelor of Technology in Computer Science and Engineering) Tj
255 0 Td
/F1 9.5 Tf
(| 2022 - 2025 | ) Tj
52 0 Td
/F2 9.5 Tf
(CGPA:7.5) Tj
-307 -13 Td
/F1 9.5 Tf
(Anjuman college of Engineering and Technology Nagpur, India) Tj
0 -16 Td
/F2 9.5 Tf
(Diploma in Computer Science Engineering) Tj
195 0 Td
/F1 9.5 Tf
(| 2019 - 2021 | ) Tj
52 0 Td
/F2 9.5 Tf
(CGPA:8.40) Tj
-247 -13 Td
/F1 9.5 Tf
(Anjuman Polytechnic Nagpur, India) Tj
ET

0.75 w
50 475 m
562 475 l
S

BT
/F2 11 Tf
50 458 Td
(KEY PROJECTS) Tj
0 -16 Td
/F2 9.5 Tf
(\\(bullet\\)   Serverless Image Processing Pipeline \\(AWS\\)) Tj
0 -14 Td
/F1 9 Tf
(     Built a serverless image processing pipeline using S3, Lambda, DynamoDB, and SNS. Images uploaded) Tj
0 -11 Td
(     to S3 trigger a Lambda function for processing, with metadata stored in DynamoDB and completion) Tj
0 -11 Td
(     notifications sent via SNS. Resolved IAM permission and Lambda layer configuration issues to get the) Tj
0 -11 Td
(     pipeline running end-to-end in production.) Tj
0 -16 Td
/F2 9.5 Tf
(\\(bullet\\)   Three-Tier VPC Architecture \\(AWS\\)) Tj
0 -14 Td
/F1 9 Tf
(     Designed and deployed a three-tier VPC on AWS separating web, application, and database layers across) Tj
0 -11 Td
(     public and private subnets in multiple availability zones. Configured route tables, NAT gateway, security) Tj
0 -11 Td
(     groups, and network ACLs so only the web tier is internet-facing, with app and database tiers isolated) Tj
0 -11 Td
(     on private subnets. Built for high availability and least-privilege network segmentation.) Tj
0 -16 Td
/F2 9.5 Tf
(\\(bullet\\)   CI/CD Pipeline for Containerized Application) Tj
0 -14 Td
/F1 9 Tf
(     Built and deployed a CI/CD pipeline for a containerized application using Docker, GitHub Actions and) Tj
0 -11 Td
(     Kubernetes. Automated build, test, and deployment stages to eliminate manual releases and reduce) Tj
0 -11 Td
(     deployment time. Configured container registry integration and rollback handling for failed deployments.) Tj
ET

0.75 w
50 205 m
562 205 l
S

BT
/F2 11 Tf
50 188 Td
(CERTIFICATIONS) Tj
0 -16 Td
/F1 9.5 Tf
(\\(bullet\\)   AWS Certified Cloud Practitioner) Tj
ET
`;

  const cleanStream = streamContent.replace(/\(bullet\)/g, '\x95');
  const streamLength = Buffer.byteLength(cleanStream, 'latin1');

  const header = `%PDF-1.4\n`;
  const obj1 = `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`;
  const obj2 = `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`;
  const obj3 = `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`;
  const obj4 = `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${cleanStream}\nendstream\nendobj\n`;
  const obj5 = `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n`;
  const obj6 = `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n`;

  const off1 = Buffer.byteLength(header, 'latin1');
  const off2 = off1 + Buffer.byteLength(obj1, 'latin1');
  const off3 = off2 + Buffer.byteLength(obj2, 'latin1');
  const off4 = off3 + Buffer.byteLength(obj3, 'latin1');
  const off5 = off4 + Buffer.byteLength(obj4, 'latin1');
  const off6 = off5 + Buffer.byteLength(obj5, 'latin1');
  const xrefOffset = off6 + Buffer.byteLength(obj6, 'latin1');

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
  return Buffer.from(fullPdf, 'latin1');
}

const targetPath = path.join(process.cwd(), 'public', 'ADAKKI_SAI_UDAY_KIRAN_RESUME.pdf');
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, buildPdf());
console.log('PDF built successfully at:', targetPath);
