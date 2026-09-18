# 🚨 Automated Server Telemetry & Telegram Alerting Agent

A lightweight, real-time infrastructure monitoring agent built with Python that tracks core system health metrics (CPU & RAM) and triggers immediate critical incident notifications via Telegram Webhooks.

---

## 🛠️ Tech Stack & Architecture
* **Language:** Python 3.14
* **Telemetry Library:** `psutil`
* **API Integration:** `requests` (Telegram Bot API)
* **Target Environment:** Windows / Linux Systems

---

## Key Features
* **Real-time Telemetry:** Continuously polls host metrics with minimal resource overhead.
* **Instant Incident Delivery:** Uses HTTP POST requests via Telegram Webhooks for immediate threshold alerts.
* **Alert Noise Mitigation:** Includes rate-limiting (cooldown timers) to prevent notification spamming during high-load periods.
* **Zero-Dependency Agent:** Lightweight agent requiring no heavy monitoring server like Prometheus or Grafana.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure Python is installed on your system along with the required dependencies:
```bash
pip install -r requirements.txt
