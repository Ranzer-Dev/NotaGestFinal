# --- ESTÁGIO 1: O "BUILDER" ---
# Aqui instalamos tudo e construímos o projeto
FROM node:20 AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de pacote
COPY package.json ./

# (A LINHA PROBLEMÁTICA 'COPY package-lock.json ./' FOI REMOVIDA DAQUI)

# Instala TODAS as dependências (dev, optional) para o build
# Sem um package-lock.json, ele vai criar um novo baseado no package.json
RUN npm install --include=dev --include=optional

# Copia o restante do código-fonte (agora que o node_modules já foi criado)
COPY . .

# Roda o build de produção
RUN npm install --include=dev

# --- ESTÁGIO 2: O "RUNNER" (Produção) ---
# Começamos uma imagem nova e limpa
FROM node:20

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de pacote (incluindo o NOVO package-lock.json gerado no Estágio 1)
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Instala APENAS as dependências de PRODUÇÃO
RUN npm install --omit=dev

# Copia os artefatos de build (o site pronto) do Estágio 1
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Expõe a porta
EXPOSE 3000

# O comando para iniciar o servidor
ENV PORT 3000
CMD ["npm", "start"]