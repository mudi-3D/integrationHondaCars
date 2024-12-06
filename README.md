
# Documentación del Código

## Elementos principales

### Variables

- **`currentCar` (global):**
  - **Tipo:** `Object` o `null`
  - **Descripción:** Contiene los datos del modelo actual basado en la URL, incluyendo la imagen del banner (`imgBanner`) y el enlace a la experiencia 3D (`linkExperience`). Se inicializa como `null`.

- **`cars` (global):**
  - **Tipo:** `Object`
  - **Descripción:** Contiene información de todos los modelos disponibles. Cada modelo es un objeto con dos propiedades:
    - **`imgBanner`:** URL de la imagen que se muestra como banner del auto.
    - **`linkExperience`:** URL del iframe que carga la experiencia interactiva 3D.

- **`currentURL`:**
  - **Tipo:** `Array`
  - **Descripción:** Resultado de dividir la URL actual del navegador usando `/`. Se utiliza para determinar el modelo del auto según la última sección de la URL.

---

## Lógica principal

### Identificación del modelo actual (`switch`):
- **Propósito:** Basado en la última sección de la URL (`currentURL[currentURL.length - 1]`), elige el modelo correspondiente en el objeto `cars` y lo asigna a `currentCar`.
- **Comportamiento:**
  - Si la URL coincide con un modelo predefinido, asigna el objeto del modelo correspondiente.
  - Si no coincide con ningún modelo, `currentCar` permanece como `null`.
- **Ejemplo:** Si la URL es `https://autos.honda.com.co/civic-ehev`, el código asignará:
  ```javascript
  currentCar = cars.civic;
  ```

### Función principal `main`:
- **Propósito:** Configura y muestra el banner interactivo con el enlace a la experiencia 3D.
- **Pasos:**
  1. **Agregar un archivo CSS:**
     - Crea un elemento `<link>` para cargar los estilos necesarios desde un CDN externo.
  2. **Limpiar el contenedor existente:**
     - Busca el elemento padre del banner existente en la página y lo limpia (`innerHTML = ''`).
  3. **Crear un nuevo banner:**
     - Genera un nuevo elemento `<img>` con la imagen del banner (`currentCar.imgBanner`) y lo estiliza.
  4. **Configurar interacción (modal):**
     - Al hacer clic en el banner, se genera un modal con un iframe que carga la experiencia interactiva 3D desde `currentCar.linkExperience`.
     - El modal incluye un botón para cerrarlo.

### Condición de inicialización (`currentCar !== null && main()`):
- Llama a la función `main` solo si `currentCar` tiene un valor válido, asegurando que la página corresponde a un modelo predefinido.

---

## Funciones

### `main`:
- **Propósito:** Configura los elementos visuales e interactivos para mostrar la experiencia 3D.
- **Entradas:** Ninguna.
- **Salidas:** Ninguna (modifica el DOM directamente).

### `createModal` (dentro de `main`):
- **Propósito:** Crea y muestra el modal con la experiencia 3D.
- **Detalles:**
  - Genera un `<div>` con la clase `ModalMudi3D` que contiene:
    - Un botón de cierre (`modalMudiClose`).
    - Un iframe que carga la URL de la experiencia 3D (`currentCar.linkExperience`).
  - Configura un evento para cerrar el modal al hacer clic en el botón de cierre.

---

## Flujo del Código

1. **Configuración inicial:**
   - El script identifica el modelo del auto basado en la URL actual.
   - Si no encuentra un modelo válido, el script no hace nada.

2. **Ejecución de `main`:**
   - Si se identifica un modelo válido, el script limpia el contenedor del banner existente y agrega uno nuevo.
   - Este banner tiene un evento de clic que abre un modal interactivo con la experiencia 3D.
