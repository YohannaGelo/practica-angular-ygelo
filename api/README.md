
---
> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> 📝  Desarrollado por Yohanna Gelo
> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
---

# Documentación de la API de Componentes de PC

Esta API permite gestionar componentes de un ordenador, incluyendo operaciones como listar, buscar, insertar, actualizar y eliminar componentes. A continuación, se detalla cómo usar la API.

---

## **URL Base**

La URL base de la API es:

```
https://ruizgijon.ddns.net/coliney/api_pc/api.php
```

---

## **Endpoints**

### **1. Obtener todos los componentes**

#### **Método**: `GET`

#### **URL**:
```
https://ruizgijon.ddns.net/coliney/api_pc/api.php
```

#### **Respuesta**:
```json
[
    {
        "id": 1,
        "nombre": "Intel Core i7-10700K",
        "descripcion": "Procesador de 8 núcleos y 16 hilos, con una frecuencia base de 3.8 GHz.",
        "url_imagen": "https://i.imgur.com/abc123.jpg",
        "tipo": "CPU",
        "fecha_creacion": "2023-10-01 12:00:00"
    },
    {
        "id": 2,
        "nombre": "NVIDIA GeForce RTX 3080",
        "descripcion": "Tarjeta gráfica con 10 GB de memoria GDDR6X y soporte para ray tracing.",
        "url_imagen": "https://i.imgur.com/def456.jpg",
        "tipo": "GPU",
        "fecha_creacion": "2023-10-01 12:00:00"
    }
]
```

---

### **2. Obtener un componente por ID**

#### **Método**: `GET`

#### **URL**:
```
https://ruizgijon.ddns.net/coliney/api_pc/api.php?id=1
```

#### **Parámetros**:
- `id` (obligatorio): ID del componente.

#### **Respuesta**:
```json
{
    "id": 1,
    "nombre": "Intel Core i7-10700K",
    "descripcion": "Procesador de 8 núcleos y 16 hilos, con una frecuencia base de 3.8 GHz.",
    "url_imagen": "https://i.imgur.com/abc123.jpg",
    "tipo": "CPU",
    "fecha_creacion": "2023-10-01 12:00:00"
}
```

---

### **3. Insertar un nuevo componente**

#### **Método**: `POST`

#### **URL**:
```
https://ruizgijon.ddns.net/coliney/api_pc/api.php
```

#### **Body (JSON)**:
```json
{
    "nombre": "AMD Ryzen 9 5900X",
    "descripcion": "Procesador de 12 núcleos y 24 hilos, con una frecuencia base de 3.7 GHz.",
    "url_imagen": "https://i.imgur.com/xyz987.jpg",
    "tipo": "CPU"
}
```

#### **Respuesta**:
```json
{
    "mensaje": "Componente insertado correctamente"
}
```

---

### **4. Actualizar un componente existente**

#### **Método**: `PUT`

#### **URL**:
```
https://ruizgijon.ddns.net/coliney/api_pc/api.php
```

#### **Body (JSON)**:
```json
{
    "id": 1,
    "nombre": "Intel Core i7-10700K (Actualizado)",
    "descripcion": "Procesador de 8 núcleos y 16 hilos, con una frecuencia base de 3.8 GHz. Ahora con overclocking mejorado.",
    "url_imagen": "https://i.imgur.com/abc123.jpg",
    "tipo": "CPU"
}
```

#### **Respuesta**:
```json
{
    "mensaje": "Componente actualizado correctamente"
}
```

---

### **5. Eliminar un componente**

#### **Método**: `DELETE`

#### **URL**:
```
https://ruizgijon.ddns.net/coliney/api_pc/api.php
```

#### **Body (JSON)**:
```json
{
    "id": 1
}
```

#### **Respuesta**:
```json
{
    "mensaje": "Componente eliminado correctamente"
}
```

---

## **Ejemplos de uso**

### **1. Obtener todos los componentes**

```bash
curl -X GET https://ruizgijon.ddns.net/coliney/api_pc/api.php
```

### **2. Obtener un componente por ID**

```bash
curl -X GET https://ruizgijon.ddns.net/coliney/api_pc/api.php?id=1
```

### **3. Insertar un nuevo componente**

```bash
curl -X POST https://ruizgijon.ddns.net/coliney/api_pc/api.php \
-H "Content-Type: application/json" \
-d '{
    "nombre": "AMD Ryzen 9 5900X",
    "descripcion": "Procesador de 12 núcleos y 24 hilos, con una frecuencia base de 3.7 GHz.",
    "url_imagen": "https://i.imgur.com/xyz987.jpg",
    "tipo": "CPU"
}'
```

### **4. Actualizar un componente**

```bash
curl -X PUT https://ruizgijon.ddns.net/coliney/api_pc/api.php \
-H "Content-Type: application/json" \
-d '{
    "id": 1,
    "nombre": "Intel Core i7-10700K (Actualizado)",
    "descripcion": "Procesador de 8 núcleos y 16 hilos, con una frecuencia base de 3.8 GHz. Ahora con overclocking mejorado.",
    "url_imagen": "https://i.imgur.com/abc123.jpg",
    "tipo": "CPU"
}'
```

### **5. Eliminar un componente**

```bash
curl -X DELETE https://ruizgijon.ddns.net/coliney/api_pc/api.php \
-H "Content-Type: application/json" \
-d '{
    "id": 1
}'
```

---

## **Códigos de estado HTTP**

- **200 OK**: La solicitud se completó correctamente.
- **400 Bad Request**: La solicitud es incorrecta (por ejemplo, falta un parámetro obligatorio).
- **404 Not Found**: El componente no existe.
- **500 Internal Server Error**: Error en el servidor.

---

## **Notas adicionales**

- **Autenticación**: Esta API no requiere autenticación.
- **Formato de fechas**: Las fechas se devuelven en formato `YYYY-MM-DD HH:MM:SS`.
- **Imágenes**: Las imágenes deben estar alojadas en un servicio externo (por ejemplo, Cloudinary) y se proporcionan como URLs.

---

¡Esperamos que esta documentación te sea útil! 😊
