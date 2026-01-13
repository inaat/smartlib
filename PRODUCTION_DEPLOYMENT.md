# Production Deployment Guide

## ✅ Build Completed Successfully!

Your application has been built for production. The compiled assets are in `public/build/`.

## 📋 Production Deployment Steps

### 1. Environment Configuration

Update your `.env` file for production:

```bash
APP_NAME="Smart Library"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Database Configuration
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_production_database
DB_USERNAME=your_production_user
DB_PASSWORD=your_secure_password

# Cache & Session
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

# Redis Configuration
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

### 2. Optimize Laravel for Production

Run these commands:

```bash
# Clear all caches
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# Optimize for production
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize

# Run migrations (if needed)
php artisan migrate --force

# Create storage link
php artisan storage:link
```

### 3. Web Server Configuration

#### Apache (.htaccess already configured)
Make sure mod_rewrite is enabled:
```bash
a2enmod rewrite
systemctl restart apache2
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/library/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

### 4. File Permissions

Set correct permissions:

```bash
# Set ownership
chown -R www-data:www-data /path/to/library

# Set directory permissions
find /path/to/library -type d -exec chmod 755 {} \;

# Set file permissions
find /path/to/library -type f -exec chmod 644 {} \;

# Storage and cache writable
chmod -R 775 storage bootstrap/cache
```

### 5. Security Checklist

- ✅ Set `APP_DEBUG=false`
- ✅ Use strong `APP_KEY` (run `php artisan key:generate`)
- ✅ Use HTTPS (SSL certificate)
- ✅ Set secure database credentials
- ✅ Configure CORS properly
- ✅ Enable rate limiting
- ✅ Set up firewall rules
- ✅ Regular backups configured

### 6. Performance Optimization

```bash
# Install production dependencies only
composer install --optimize-autoloader --no-dev

# Enable OPcache in php.ini
opcache.enable=1
opcache.memory_consumption=256
opcache.max_accelerated_files=20000
opcache.validate_timestamps=0
```

### 7. Monitoring & Logging

- Set up error logging (check `storage/logs/laravel.log`)
- Configure monitoring (New Relic, Sentry, etc.)
- Set up backup automation
- Monitor server resources

### 8. Queue Workers (if using queues)

```bash
# Install supervisor
apt-get install supervisor

# Create supervisor config
nano /etc/supervisor/conf.d/library-worker.conf
```

Supervisor config:
```ini
[program:library-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/library/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
user=www-data
numprocs=2
redirect_stderr=true
stdout_logfile=/path/to/library/storage/logs/worker.log
```

### 9. SSL Certificate (Let's Encrypt)

```bash
# Install certbot
apt-get install certbot python3-certbot-apache

# Get certificate
certbot --apache -d yourdomain.com
```

### 10. Deployment Checklist

- [ ] `.env` configured for production
- [ ] Database migrated
- [ ] Assets built (`npm run build`)
- [ ] Laravel optimized (config, route, view cache)
- [ ] File permissions set correctly
- [ ] SSL certificate installed
- [ ] Backups configured
- [ ] Monitoring set up
- [ ] Error logging configured
- [ ] Test all features

## 🚀 Going Live

1. Point your domain to your server IP
2. Configure DNS records
3. Install SSL certificate
4. Run final tests
5. Monitor logs for any issues

## 📊 Post-Deployment

- Monitor application performance
- Check error logs regularly
- Set up automated backups
- Monitor database performance
- Keep dependencies updated

## 🔄 Future Updates

To deploy updates:

```bash
# Pull latest code
git pull origin main

# Update dependencies
composer install --optimize-autoloader --no-dev
npm install
npm run build

# Run migrations
php artisan migrate --force

# Clear and rebuild cache
php artisan config:clear
php artisan cache:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## 📞 Support

For issues or questions, refer to:
- Laravel Documentation: https://laravel.com/docs
- Vue.js Documentation: https://vuejs.org/guide/
- Application logs: `storage/logs/laravel.log`

---

**Note**: Always test in a staging environment before deploying to production!
