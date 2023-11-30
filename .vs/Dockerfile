#build react app
FROM node:14 as build-react
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-dotnet
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS final
WORKDIR /app
COPY --from=build-react /app .
COPY --from=build-dotnet /app .
ENTRYPOINT ["dotnet", "my-movie-api.dll"]