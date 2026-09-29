import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, FileText } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { personal, resume } = PORTFOLIO_DATA;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel max-w-4xl w-full max-h-[92vh] flex flex-col rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-sm font-bold text-white">ADAKKI_SAI_UDAY_KIRAN_RESUME</h3>
              <div className="text-[10px] font-mono text-slate-400">Official Resume Document</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PDF Visual Replica Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto bg-white text-slate-900 font-sans space-y-4">
          
          {/* Document Header */}
          <div className="border-b border-slate-300 pb-4">
            <h1 className="text-2xl font-bold uppercase tracking-wide text-slate-900">ADAKKI SAI UDAY KIRAN</h1>
            <div className="text-base font-bold text-slate-800 mt-1">Aspiring Cloud Engineer</div>
            <div className="text-xs text-slate-700 mt-2 font-sans flex flex-wrap gap-2">
              <span>+91 7796804323</span>
              <span>|</span>
              <a href="mailto:udaykiran.7510@gmail.com" className="text-blue-700 underline">udaykiran.7510@gmail.com</a>
              <span>|</span>
              <span>Nagpur, Maharashtra, India</span>
              <span>|</span>
              <a href="https://www.linkedin.com/in/adakki-sai-uday-kiran" target="_blank" rel="noreferrer" className="text-blue-700 underline">LinkedIn Profile</a>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 pt-2 border-b border-slate-300 pb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">TECHNICAL SKILLS</h2>
            <div className="text-xs space-y-1.5 text-slate-800">
              <div><strong className="text-slate-900">Cloud Platform:</strong> AWS (EC2, S3, Lambda, CloudFront, Route 53, SNS, SQS).</div>
              <div><strong className="text-slate-900">Containers & Orchestration:</strong> Docker, Kubernetes (K8s), Amazon EKS, Amazon ECR.</div>
              <div><strong className="text-slate-900">Infrastructure as Code:</strong> Terraform, AWS CloudFormation.</div>
              <div><strong className="text-slate-900">OS & Scripting:</strong> Linux, Shell Scripting.</div>
              <div><strong className="text-slate-900">Programming & Development:</strong> Python, JavaScript, Git/GitHub.</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 pt-2 border-b border-slate-300 pb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">EDUCATION</h2>
            <div className="space-y-2 text-xs text-slate-800">
              <div>
                <div className="font-bold text-slate-900">
                  Bachelor of Technology in Computer Science and Engineering | 2022 – 2025 | <span className="font-normal italic">CGPA:7.5</span>
                </div>
                <div>Anjuman college of Engineering and Technology Nagpur, India</div>
              </div>
              <div className="pt-1">
                <div className="font-bold text-slate-900">
                  Diploma in Computer Science Engineering | 2019 – 2021 | <span className="font-normal italic">CGPA:8.40</span>
                </div>
                <div>Anjuman Polytechnic Nagpur, India</div>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3 pt-2 border-b border-slate-300 pb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">KEY PROJECTS</h2>
            <ul className="list-disc list-inside space-y-3 text-xs text-slate-800 pl-1">
              <li className="leading-relaxed">
                <strong className="text-slate-900 font-bold">Serverless Image Processing Pipeline (AWS)</strong>
                <p className="mt-1 pl-4 text-slate-700">
                  Built a serverless image processing pipeline using S3, Lambda, DynamoDB, and SNS. Images uploaded to S3 trigger a Lambda function for processing, with metadata stored in DynamoDB and completion notifications sent via SNS. Resolved IAM permission and Lambda layer configuration issues to get the pipeline running end-to-end in production.
                </p>
              </li>

              <li className="leading-relaxed">
                <strong className="text-slate-900 font-bold">Three-Tier VPC Architecture (AWS)</strong>
                <p className="mt-1 pl-4 text-slate-700">
                  Designed and deployed a three-tier VPC on AWS separating web, application, and database layers across public and private subnets in multiple availability zones. Configured route tables, NAT gateway, security groups, and network ACLs so only the web tier is internet-facing, with app and database tiers isolated on private subnets. Built for high availability and least-privilege network segmentation.
                </p>
              </li>

              <li className="leading-relaxed">
                <strong className="text-slate-900 font-bold">CI/CD Pipeline for Containerized Application</strong>
                <p className="mt-1 pl-4 text-slate-700">
                  Built and deployed a CI/CD pipeline for a containerized application using Docker, GitHub Actions and Kubernetes. Automated build, test, and deployment stages to eliminate manual releases and reduce deployment time. Configured container registry integration and rollback handling for failed deployments.
                </p>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-2 pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">CERTIFICATIONS</h2>
            <ul className="list-disc list-inside text-xs text-slate-800 pl-1">
              <li>AWS Certified Cloud Practitioner</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
