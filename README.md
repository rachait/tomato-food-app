# 🍅 Tomato Food App - Cloud Native DevOps Project

A modern food ordering web application built with **React + Vite**, enhanced with **Docker, Kubernetes, Jenkins, GitHub Actions, and Nginx** to demonstrate real-world DevOps practices and cloud-native deployment workflows.

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-326CE5)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Automated-black)

---

## 🚀 Project Overview

Tomato Food App demonstrates the complete DevOps lifecycle:

- Application Development using React
- Containerization using Docker
- CI/CD Automation using Jenkins
- Kubernetes Deployment
- GitHub Actions Workflow Automation
- Production Serving using Nginx

The project showcases how a modern frontend application can be deployed using industry-standard DevOps tools and practices.

---

## ✨ Features

### 🍔 Application Features

- Responsive Food Ordering UI
- Category-Based Menu Filtering
- Shopping Cart Management
- Order Placement Workflow
- Mobile Responsive Design
- Interactive Food Cards
- User-Friendly Navigation

### ⚙️ DevOps Features

- Docker Containerization
- Multi-Stage Docker Build
- Docker Compose Setup
- Jenkins Pipeline
- GitHub Actions CI/CD
- Kubernetes Deployment
- Kubernetes Service Configuration
- GitHub Pages Deployment
- Nginx Production Server

---

## 🏗️ Architecture

```text
Developer
    │
    ▼
GitHub Repository
    │
    ├── GitHub Actions
    │
    ▼
Build Pipeline
    │
    ▼
Docker Image
    │
    ▼
Kubernetes Cluster
    │
    ▼
Nginx Container
    │
    ▼
React Application
```

---

## 🛠️ Tech Stack

### Frontend

- React 18
- Vite
- React Router DOM
- CSS3

### DevOps

- Docker
- Docker Compose
- Kubernetes
- Jenkins
- GitHub Actions
- Nginx

### Version Control

- Git
- GitHub

---

## 📂 Project Structure

```text
tomato-food-app/
│
├── .github/
│   └── workflows/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── Context/
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── deployment.yaml
├── Service.yaml
├── pod.yaml
├── package.json
├── vite.config.js
└── README.md
```

---

## 🐳 Docker Setup

### Build Docker Image

```bash
docker build -t tomato-food-app .
```

### Run Container

```bash
docker run -p 2932:80 tomato-food-app
```

Application URL:

```text
http://localhost:2932
```

---

## 🐋 Docker Compose

Start Application:

```bash
docker-compose up --build
```

Stop Application:

```bash
docker-compose down
```

---

## ☸️ Kubernetes Deployment

Deploy Application:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f Service.yaml
```

Verify Resources:

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

---

## 🔄 Jenkins CI/CD Pipeline

Pipeline Stages:

- Source Code Checkout
- Install Dependencies
- Build Application
- Build Docker Image
- Deploy Application
- Verify Deployment

Run Jenkins Job:

```text
Build Now
```

---

## ⚡ GitHub Actions

Automated Workflow Features:

- Build Verification
- Dependency Installation
- Production Build
- GitHub Pages Deployment

Workflow Location:

```text
.github/workflows/
```

---

## 🚀 Local Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application URL:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

---

## 📊 DevOps Concepts Demonstrated

- Continuous Integration (CI)
- Continuous Deployment (CD)
- Docker Containerization
- Kubernetes Orchestration
- Infrastructure as Code (IaC)
- GitHub Actions Automation
- Jenkins Pipeline Automation
- Production Deployment Strategies

---

## 🎯 Learning Outcomes

Through this project, developers can learn:

- React Application Deployment
- Docker Image Creation
- Kubernetes Deployment Management
- Jenkins Pipeline Configuration
- GitHub Actions Automation
- Production Environment Setup
- Cloud-Native Development Practices

---

## 👨‍💻 Author

**Rachait Talwar**

- B.Tech CSE (AI & ML)
- DevOps & Cloud Enthusiast
- Kubernetes Learner

GitHub: https://github.com/rachait

---

## ⭐ Support

If you found this project useful:

```text
⭐ Star the repository
🍴 Fork the repository
🚀 Contribute to the project
```

---

## 📜 License

This project is created for educational, learning, and portfolio purposes.
