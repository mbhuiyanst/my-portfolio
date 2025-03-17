import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="p-8 grid gap-6">
        {/* About Me Section */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am a System Administrator with experience in Linux, Windows, AWS, Azure, Checkmk Monitoring, Veeam Backup, and scripting in Bash and PowerShell.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-4">
            <li>Linux Server Management</li>
            <li>Windows Server Administration</li>
            <li>AWS Infrastructure</li>
            <li>Azure Cloud Services</li>
            <li>Checkmk Monitoring</li>
            <li>Veeam Backup & Recovery</li>
            <li>Bash & PowerShell Scripting</li>
            <li>CI/CD with GitHub Actions</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-4">
            <ProjectCard title="AWS Infra Deployment" description="Provisioning EC2, RDS, and VPC with Terraform & Ansible. CI/CD pipeline with GitHub Actions." />
            <ProjectCard title="Checkmk Setup" description="Monitoring Linux/Windows servers and network devices with Checkmk." />
            <ProjectCard title="Veeam Backup" description="Enterprise backup strategies with Veeam Backup & Replication." />
          </div>
        </section>

        {/* CI/CD Section */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">CI/CD Pipeline</h2>
          <p>
            This portfolio is automatically deployed via GitHub Actions to GitHub Pages. Every push to the main branch triggers a CI/CD pipeline.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>GitHub: <a href="https://github.com/mbhuiyanst" className="text-blue-600">github.com/your-github-username</a></p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
