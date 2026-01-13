# 🚀 cPanel Deployment Guide - Smart Library

## 📋 Step-by-Step Deployment Instructions

### **Step 1: Prepare Your cPanel**

1. **Login to cPanel**
2. **Go to "MySQL Databases"**

### **Step 2: Create Database**

1. In **"Create New Database"** section:
   - Database Name: `library` (it will become `username_library`)
   - Click **"Create Database"**
   - ✅ **Note the full database name** (e.g., `cpanelusername_library`)

### **Step 3: Create Database User**

1. In **"MySQL Users"** section:
   - Username: `library_user` (it will become `username_library_user`)
   - Password: Generate a strong password
   - Click **"Create User"**
   - ✅ **Save these credentials securely!**

### **Step 4: Add User to Database**

1. In **"Add User To Database"** section:
   - Select the user you just created
   - Select the database you just created
   - Click **"Add"**
   - On the privileges page, select **"ALL PRIVILEGES"**
   - Click **"Make Changes"**

### **Step 5: Upload Files**

#### **Option A: Using File Manager (Recommended for first time)**

1. Go to **cPanel → File Manager**
2. Navigate to `public_html` (or your domain's root folder)
3. **Upload all files EXCEPT:**
   - `node_modules/` folder
   - `.git/` folder
   - `.env` file (we'll create this separately)

#### **Option B: Using Git (Recommended)**

1. In cPanel, go to **"Git Version Control"**
2. Click **"Create"**
3. Enter your repository URL
4. Repository Path: `/home/username/repositories/library`
5. Click **"Create"**
6. After cloning, click **"Manage"** → **"Pull or Deploy"** → **"Update from Remote"**

### **Step 6: Move Files to Public Directory**

If using Git, you need to create a symbolic link or move files:

**Option 1: Symbolic Link (Recommended)**
```bash
# SSH into your server
cd /home/username/public_html
ln -s /home/username/repositories/library/public/* .
```

**Option 2: Copy Files**
```bash
cp -r /home/username/repositories/library/* /home/username/public_html/
```

### **Step 7: Create .env File**

1. In File Manager, navigate to your application root
2. Create a new file named `.env`
3. Copy content from `.env.example` or use this template:

```env
APP_NAME="Smart Library"
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL=https://yourdomain.com

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=cpanelusername_library
DB_USERNAME=cpanelusername_library_user
DB_PASSWORD=your_secure_password_here

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

4. **Update these values:**
   - `DB_DATABASE` - Your full database name
   - `DB_USERNAME` - Your full database username
   - `DB_PASSWORD` - Your database password
   - `APP_URL` - Your actual domain

### **Step 8: Set File Permissions**

Using File Manager or SSH:

```bash
# Make storage and cache writable
chmod -R 775 storage
chmod -R 775 bootstrap/cache

# If using SSH
find storage -type f -exec chmod 664 {} \;
find storage -type d -exec chmod 775 {} \;
```

### **Step 9: Run Laravel Commands via SSH**

**If you have SSH access:**

```bash
# Navigate to your app
cd /home/username/public_html

# Generate application key
php artisan key:generate

# Clear and cache config
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# Run migrations
php artisan migrate --force

# Create storage link
php artisan storage:link

# Optimize for production
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize
```

**If you DON'T have SSH access:**

Create a file `install.php` in your public directory:

```php
<?php
// install.php - Run this once via browser, then DELETE IT!

echo "<h1>Laravel Installation</h1>";

// Change to your app directory
chdir('/home/username/public_html');

echo "<h2>Running Commands...</h2>";

// Generate key
echo "<p>Generating application key...</p>";
exec('php artisan key:generate 2>&1', $output1);
echo "<pre>" . implode("\n", $output1) . "</pre>";

// Clear cache
echo "<p>Clearing cache...</p>";
exec('php artisan config:clear 2>&1', $output2);
exec('php artisan cache:clear 2>&1', $output3);
echo "<pre>" . implode("\n", array_merge($output2, $output3)) . "</pre>";

// Run migrations
echo "<p>Running migrations...</p>";
exec('php artisan migrate --force 2>&1', $output4);
echo "<pre>" . implode("\n", $output4) . "</pre>";

// Create storage link
echo "<p>Creating storage link...</p>";
exec('php artisan storage:link 2>&1', $output5);
echo "<pre>" . implode("\n", $output5) . "</pre>";

// Optimize
echo "<p>Optimizing...</p>";
exec('php artisan optimize 2>&1', $output6);
echo "<pre>" . implode("\n", $output6) . "</pre>";

echo "<h2 style='color: green;'>✅ Installation Complete!</h2>";
echo "<p style='color: red; font-weight: bold;'>⚠️ DELETE THIS FILE NOW!</p>";
?>
```

Visit `https://yourdomain.com/install.php` and then **DELETE** the file immediately.

### **Step 10: Configure .htaccess**

Make sure your `public/.htaccess` file exists with this content:

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

### **Step 11: Point Domain to public Folder**

1. In cPanel, go to **"Domains"** or **"Addon Domains"**
2. Set the **Document Root** to: `/home/username/public_html/public`
   - OR if you moved files: `/home/username/public_html`

### **Step 12: Install SSL Certificate**

1. In cPanel, go to **"SSL/TLS Status"**
2. Select your domain
3. Click **"Run AutoSSL"**
4. Wait for certificate to be installed

### **Step 13: Test Your Application**

Visit your domain: `https://yourdomain.com`

You should see the login page!

---

## 🔧 Troubleshooting

### **Error: 500 Internal Server Error**
```bash
# Check error logs in cPanel → Errors
# Or via SSH:
tail -f /home/username/logs/error_log

# Clear all caches:
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

### **Error: Storage link not working**
```bash
# Remove existing link
rm public/storage

# Create new link
php artisan storage:link
```

### **Error: Permission denied**
```bash
# Fix permissions
chmod -R 775 storage bootstrap/cache
chown -R username:username storage bootstrap/cache
```

### **Database Connection Error**
- Double-check database credentials in `.env`
- Make sure database user has ALL PRIVILEGES
- Try `DB_HOST=localhost` instead of `127.0.0.1`

---

## 📊 Post-Deployment Checklist

- [ ] Database created and user added
- [ ] `.env` file configured correctly
- [ ] `APP_KEY` generated
- [ ] Migrations run successfully
- [ ] Storage link created
- [ ] File permissions set correctly
- [ ] SSL certificate installed
- [ ] Domain pointing to correct directory
- [ ] Application accessible via browser
- [ ] Login working
- [ ] All features tested

---

## 🎯 Quick Commands Reference

```bash
# Clear everything
php artisan optimize:clear

# Rebuild caches
php artisan optimize

# Check application status
php artisan about

# View routes
php artisan route:list

# Check database connection
php artisan migrate:status
```

---

## 📞 Need Help?

Common cPanel paths:
- **Application Root**: `/home/username/public_html`
- **Public Directory**: `/home/username/public_html/public`
- **Storage**: `/home/username/public_html/storage`
- **Logs**: `/home/username/logs/`

**Support**: Check your hosting provider's documentation or contact their support team.

---

**🎉 Congratulations!** Your Smart Library application is now live!
