FROM node:14-alpine
WORKDIR /

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "run", "dev"]
