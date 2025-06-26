# NGINX Reverse Proxy Project

[![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/ec2/)

## Project Overview

This project demonstrates how to set up an NGINX reverse proxy to route traffic to multiple backend services running on the same server. The reverse proxy handles incoming requests and forwards them to the appropriate service based on the URL path.

### Features

- Route traffic to multiple backend services using a single entry point
- Path-based routing (`/service1/` and `/service2/`)
- Preserve client information with proper header forwarding
- Simple deployment on AWS EC2

## Architecture

```
                   ┌─────────────────┐
                   │                 │
 Client Request    │  NGINX Server   │
 ───────────────► │  (Port 80)      │
                   │                 │
                   └────────┬────────┘
                            │
                            ▼
          ┌─────────────────┴─────────────────┐
          │                                   │
┌─────────▼──────────┐           ┌────────────▼─────────┐
│                    │           │                      │
│  Service 1         │           │  Service 2           │
│  Python HTTP Server │           │  Node.js Application │
│  (Port 8080)       │           │  (Port 3000)         │
│                    │           │                      │
└────────────────────┘           └──────────────────────┘
```

## Tech Stack

- **NGINX**: Web server used as a reverse proxy
- **Node.js**: Runtime for Service 2
- **Python**: Used for Service 1 (HTTP Server)
- **HTML**: Basic frontend for services
- **AWS EC2**: Hosting platform

## Setup Instructions

### Prerequisites

- AWS EC2 instance with public IP
- NGINX installed
- Node.js installed
- Python installed

### Installation Steps

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/nginx-reverse-proxy.git
   cd nginx-reverse-proxy
   ```

2. **Configure NGINX**:
   - Copy the NGINX configuration file to the appropriate directory:
     ```bash
     sudo cp "nginx reverse proxy.conf" /etc/nginx/conf.d/
     ```
   - Test and restart NGINX:
     ```bash
     sudo nginx -t
     sudo systemctl restart nginx
     ```

3. **Start Service 1 (Python HTTP Server)**:
   ```bash
   cd ~/service1
   python -m http.server 8080
   ```

4. **Start Service 2 (Node.js Application)**:
   ```bash
   cd ~/service2
   node service2.js
   ```

## Configuration Details

### NGINX Configuration

The NGINX configuration routes traffic based on URL paths:
- Requests to `/service1/` are forwarded to the Python HTTP server on port 8080
- Requests to `/service2/` are forwarded to the Node.js application on port 3000

Key configuration elements:
- Header forwarding to preserve client information
- Proper URL rewriting with trailing slashes

## Usage

Access the services through the NGINX reverse proxy:

- Service 1: `http://your-ec2-domain.com/service1/`
- Service 2: `http://your-ec2-domain.com/service2/`

## Benefits of Using NGINX as a Reverse Proxy

- **Single Entry Point**: Expose multiple services through a single IP/domain
- **Load Balancing**: Distribute traffic across multiple instances (scalable)
- **SSL Termination**: Handle HTTPS at the proxy level
- **Security**: Hide backend services from direct access
- **Path-Based Routing**: Direct traffic based on URL paths

## Troubleshooting

- **502 Bad Gateway**: Check if backend services are running
- **404 Not Found**: Verify URL paths and NGINX configuration
- **Connection Refused**: Ensure ports are open in security groups/firewall

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- NGINX documentation
- Node.js community
- AWS documentation