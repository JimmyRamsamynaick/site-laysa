FROM nginx:alpine

# Copier les fichiers du site dans le dossier par défaut de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80 (interne au conteneur)
EXPOSE 80
