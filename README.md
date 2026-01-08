# Stock Backend

NestJS based backend for Stock Management.

## Deployment on Vercel

This project is configured for deployment on Vercel using serverless functions.

### Steps to Deploy:
1. Connect your GitHub repository to Vercel.
2. Ensure you add the following Environment Variables in Vercel:
   - `DATABASE_HOST`
   - `DATABASE_PORT`
   - `DATABASE_USERNAME`
   - `DATABASE_PASSWORD`
   - `DATABASE_NAME`
   - `SSL` (set to `true` if your DB requires SSL)
3. Deploy!

### Swagger Documentation
Once deployed, you can access the Swagger API documentation at:
`https://your-vercel-domain.com/api`

## Local Development

### Running with Docker
```bash
docker-compose up -d
```

### Commands
- `npm run start:dev` - Run in development mode
- `npm run build` - Build the project
- `npm run migration:run` - Run TypeORM migrations

## Auto Mapper Reference
[NestJS DTO with AutoMapper](https://medium.com/@exfabrica/nestjs-dto-with-automapper-c4e89009f30b)