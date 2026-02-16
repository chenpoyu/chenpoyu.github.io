export default {
  techarch: {
    hero: {
      title: 'Architecture Design Practice',
      subtitle: 'System architecture design accumulated from 13 years of practical experience, covering microservices, IoT, high concurrency, and other core scenarios'
    },
    highlights: 'Key Highlights',
    devtools: {
      title: 'Development Tools',
      description: 'Personal development toolkit with various practical development utilities',
      button: 'Go to Tools'
    },
    microservices: {
      title: 'Microservices Architecture',
      description: 'Microservices architecture design achieving service decoupling and independent deployment. Managed through Azure API Management as a unified entry point, services are deployed on Azure App Service. Uses Azure Cache for Redis for high-performance distributed caching. Supports elastic scaling and independent version control.',
      highlights: [
        'Service Decomposition: Divide independent services by business domain (User, Order, Product, Payment)',
        'API Gateway: Azure API Management for unified entry point, routing, authentication, rate limiting',
        'Microservices Deployment: Services deployed on Azure App Service with independent scaling',
        'Distributed Cache: Azure Cache for Redis improves read performance and reduces database pressure',
        'Database Separation: Each service uses independent SQL Server databases',
        'Multi-client Support: Supports Web, Mobile, Admin and other client types'
      ]
    },
    iot: {
      title: 'IoT Architecture',
      description: 'IoT system architecture supporting large-scale sensors and devices with real-time data processing. Uses AWS Lambda for event-driven processing, AWS Step Functions for workflow orchestration, API Gateway for RESTful interfaces. Implements high-performance caching through Redis Cache, stores device state and business data in PostgreSQL, and historical data in S3. Supports elastic scaling and Serverless architecture.',
      highlights: [
        'Device Layer: Supports large-scale IoT sensors, smart devices, and monitoring device access',
        'API Gateway: AWS API Gateway provides unified RESTful APIs entry point',
        'Serverless Processing: AWS Lambda for data validation, processing, and alert handling',
        'Workflow Orchestration: AWS Step Functions coordinates multiple Lambda functions workflow',
        'Cache & Storage: Redis caches real-time data, S3 stores historical data',
        'Databases: PostgreSQL stores device state and business data'
      ]
    },
    sso: {
      title: 'SSO Single Sign-On Architecture',
      description: 'Single Sign-On (SSO) architecture design integrating authentication across multiple application systems. Implements secure authorization using OAuth 2.0 + JWT, supports cross-domain authentication, allowing users to access all integrated services with a single login. Utilizes custom authentication center, providing comprehensive permission management and audit capabilities.',
      highlights: [
        'OAuth 2.0: Industry-standard authorization protocol',
        'JWT Token: Stateless authentication mechanism',
        'Single Sign-On: Log in once, access everywhere',
        'Centralized Management: Unified user identity and permission management',
        'Security: Token expiration mechanism and refresh strategy',
        'Cross-brand Integration: Unified management of multi-brand member data'
      ]
    },
    highconcurrency: {
      title: 'High Concurrency System Design',
      description: 'High-concurrency system design with multi-tier architecture supporting large-scale parallel access. Azure CDN accelerates static content delivery, Load Balancer distributes traffic, Azure Cache for Redis provides high-performance caching layer, and backend app services support horizontal scaling. Uses Message Queue for asynchronous task processing, SQL Server master-slave architecture for read-write separation and high availability.',
      highlights: [
        'CDN Acceleration: Azure CDN distributes static resources nearby, reducing latency',
        'Load Balancing: Load Balancer implements even traffic distribution',
        'Redis Cluster: Azure Cache for Redis distributed cache improves performance',
        'App Services: Multiple App Service instances support horizontal scaling',
        'Asynchronous Processing: Message Queue + Worker handles time-consuming tasks',
        'Database Optimization: SQL Server master-slave architecture for read-write separation'
      ]
    }
  }
}
