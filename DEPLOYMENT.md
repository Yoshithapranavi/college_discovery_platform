# CampusCompass Deployment Guide

## Frontend Deployment (Vercel)

### Step 1: Deploy Backend First
The backend needs to be deployed to a live server first. You have several options:

**Option A: Deploy to Render (Recommended)**
1. Go to https://render.com
2. Sign up and create a new account
3. Click "Create New" → "Web Service"
4. Connect your GitHub repository
5. Set configuration:
   - **Build Command:** `./mvnw clean package -DskipTests`
   - **Start Command:** `java -jar target/backend-0.0.1-SNAPSHOT.jar`
   - **Environment Variables:**
     - `SPRING_DATASOURCE_URL`: Your PostgreSQL URL
     - `SPRING_DATASOURCE_USERNAME`: Your DB username
     - `SPRING_DATASOURCE_PASSWORD`: Your DB password
6. Deploy! You'll get a URL like: `https://campus-compass-backend.onrender.com`

**Option B: Deploy to Railway**
1. Go to https://railway.app
2. Connect your GitHub account
3. Create a new project → Deploy from GitHub
4. Select your repository
5. Add environment variables (same as above)
6. Railway will automatically detect it's a Spring Boot app

**Option C: Deploy to Azure App Service**
1. Use Azure CLI: `az webapp up --name campus-compass-backend --resource-group your-group`

### Step 2: Update Environment Variables

**For Local Development:**
Already configured in `.env.local`:
```
VITE_API_URL=http://localhost:8081
```

**For Production:**
Update `.env.production` with your backend URL:
```
VITE_API_URL=https://your-backend-url.onrender.com
```

### Step 3: Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository (campus_compass)
4. Configure project:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Environment Variables:**
     - `VITE_API_URL`: Add your backend URL

5. Click "Deploy"!

### Step 4: Update Backend CORS

Update your backend's `CorsConfig.java` to allow your Vercel domain:

```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    .allowedOrigins(
                        "http://localhost:5173",
                        "http://localhost:3000",
                        "https://your-frontend-url.vercel.app"  // Add your Vercel URL
                    )
                    .allowedMethods("*")
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}
```

## Testing Live Deployment

After deployment:
1. Visit: `https://your-app.vercel.app`
2. Test "Add College" functionality
3. Test Login/Register pages
4. Test Edit and Delete operations

## Environment Variables Summary

| Variable | Local | Production |
|----------|-------|------------|
| VITE_API_URL | http://localhost:8081 | https://your-backend.onrender.com |
| Backend DB URL | Already configured (Neon) | Same as local (cloud DB) |

## Troubleshooting

**CORS Error:** Make sure backend URL is added to CORS config
**API Not Found:** Check that backend deployment is running
**Build Fails:** Run `npm install` locally and verify no errors

## Live Links Format

Once deployed:
- **Frontend:** https://campus-compass.vercel.app
- **Backend:** https://campus-compass-backend.onrender.com

Keep these URLs safe for sharing on your website!
