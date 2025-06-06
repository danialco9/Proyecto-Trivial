// Preguntas Lengua Castellana 1ESO

const preguntasLengua = [
  {
    texto: "¿Cuál es el sustantivo en la frase El perro corre?",
    dificultad: "facil",
    asignatura: "Lengua Castellana",
    respuestas: [
      { texto: "El", esCorrecta: false },
      { texto: "Perro", esCorrecta: true },
      { texto: "Corre", esCorrecta: false },
      { texto: "La", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un verbo?",
    dificultad: "facil",
    asignatura: "Lengua Castellana",
    respuestas: [
      { texto: "Una acción", esCorrecta: true },
      { texto: "Un objeto", esCorrecta: false },
      { texto: "Un color", esCorrecta: false },
      { texto: "Un número", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es el plural de lápiz?",
    dificultad: "facil",
    asignatura: "Lengua Castellana",
    respuestas: [
      { texto: "Lápizs", esCorrecta: false },
      { texto: "Lápices", esCorrecta: true, explicacion: "El plural correcto es lápices." },
      { texto: "Lápiz", esCorrecta: false },
      { texto: "Lápizes", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un adjetivo?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Describe a un sustantivo", esCorrecta: true, explicacion: "El adjetivo describe al sustantivo." },
      { texto: "Nombra una acción", esCorrecta: false },
      { texto: "Une palabras", esCorrecta: false },
      { texto: "Indica cantidad", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es el antónimo de alto?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Grande", esCorrecta: false },
      { texto: "Pequeño", esCorrecta: false },
      { texto: "Bajo", esCorrecta: true, explicacion: "El antónimo de alto es bajo." },
      { texto: "Peor", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es el sinónimo de bonito?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Feo", esCorrecta: false },
      { texto: "Hermoso", esCorrecta: true, explicacion: "Hermoso es sinónimo de bonito." },
      { texto: "Malo", esCorrecta: false },
      { texto: "Grande", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué tipo de palabra es rápido?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Sustantivo", esCorrecta: false },
      { texto: "Verbo", esCorrecta: false },
      { texto: "Adjetivo", esCorrecta: true, explicacion: "Rápido es un adjetivo." },
      { texto: "Adverbio", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué signo lleva una pregunta?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Punto", esCorrecta: false },
      { texto: "Coma", esCorrecta: false },
      { texto: "Admiración", esCorrecta: false },
      { texto: "Interrogación", esCorrecta: true, explicacion: "Se usa el signo de interrogación." },
    ],
  },
  {
    texto: "¿Cuál es una palabra aguda?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Mesa", esCorrecta: false },
      { texto: "Camión", esCorrecta: true, explicacion: "Camión es aguda porque se acentúa en la última sílaba." },
      { texto: "Árbol", esCorrecta: false },
      { texto: "Lápiz", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es una palabra grave?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Perro", esCorrecta: true, explicacion: "Perro es grave porque se acentúa en la penúltima sílaba y no lleva tilde." },
      { texto: "Café", esCorrecta: false },
      { texto: "Reloj", esCorrecta: false },
      { texto: "Sofá", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un sustantivo común?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Nombre propio", esCorrecta: false },
      { texto: "Nombre general", esCorrecta: true, explicacion: "Es un nombre general, como perro, casa." },
      { texto: "Acción", esCorrecta: false },
      { texto: "Descripción", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es un ejemplo de verbo en infinitivo?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Correr", esCorrecta: true, explicacion: "Correr es infinitivo." },
      { texto: "Corro", esCorrecta: false },
      { texto: "Corres", esCorrecta: false },
      { texto: "Corría", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una sílaba?",
    dificultad: "facil",
    asignatura: "Lengua",
    respuestas: [
      { texto: "Un sonido", esCorrecta: false },
      { texto: "Un conjunto de sonidos pronunciados juntos", esCorrecta: true, explicacion: "La sílaba es un conjunto de sonidos pronunciados juntos." },
      { texto: "Una palabra", esCorrecta: false },
      { texto: "Un texto", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es una palabra monosílaba?",
    dificultad: "facil",
    puntuacion: 10,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Casa", esCorrecta: false },
      { texto: "Perro", esCorrecta: false },
      { texto: "Mar", esCorrecta: true, explicacion: "Mar es monosílaba porque tiene una sola sílaba." },
      { texto: "Camino", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un diptongo?",
    dificultad: "facil",
    puntuacion: 10,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Dos vocales fuertes", esCorrecta: false },
      { texto: "Dos vocales en sílabas separadas", esCorrecta: false },
      { texto: "Una vocal fuerte y una débil juntas", esCorrecta: true, explicacion: "Es la unión de una vocal fuerte y una débil en la misma sílaba." },
      { texto: "Tres vocales juntas", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es una palabra esdrújula?",
    dificultad: "facil",
    puntuacion: 10,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Camión", esCorrecta: false },
      { texto: "Teléfono", esCorrecta: true, explicacion: "Teléfono es esdrújula porque se acentúa en la antepenúltima sílaba." },
      { texto: "Sofá", esCorrecta: false },
      { texto: "Café", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una oración?",
    dificultad: "facil",
    puntuacion: 10,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Un conjunto de palabras con sentido completo", esCorrecta: true, explicacion: "La oración es un conjunto de palabras con sentido completo." },
      { texto: "Una palabra sola", esCorrecta: false },
      { texto: "Un sustantivo", esCorrecta: false },
      { texto: "Un adjetivo", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es el género del sustantivo mesa?",
    dificultad: "facil",
    puntuacion: 10,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Masculino", esCorrecta: false },
      { texto: "Femenino", esCorrecta: true, explicacion: "Mesa es femenino." },
      { texto: "Neutro", esCorrecta: false },
      { texto: "Ambos", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es el número del sustantivo perros?",
    dificultad: "facil",
    puntuacion: 10,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Singular", esCorrecta: false },
      { texto: "Plural", esCorrecta: true, explicacion: "Perros está en plural." },
      { texto: "Dual", esCorrecta: false },
      { texto: "Colectivo", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué tipo de palabra es lentamente?",
    dificultad: "facil",
    puntuacion: 10,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Verbo", esCorrecta: false },
      { texto: "Adjetivo", esCorrecta: false },
      { texto: "Adverbio", esCorrecta: true, explicacion: "Lentamente es un adverbio." },
      { texto: "Sustantivo", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un pronombre?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Palabra que reemplaza al sustantivo", esCorrecta: true, explicacion: "El pronombre reemplaza al sustantivo." },
      { texto: "Palabra que describe al verbo", esCorrecta: false },
      { texto: "Palabra que une oraciones", esCorrecta: false },
      { texto: "Palabra que indica cantidad", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es el pretérito perfecto del verbo comer?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Como", esCorrecta: false },
      { texto: "Comí", esCorrecta: true, explicacion: "Comí es el pretérito perfecto de comer." },
      { texto: "Comía", esCorrecta: false },
      { texto: "Comeré", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una conjunción?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Palabra que describe", esCorrecta: false },
      { texto: "Palabra que une", esCorrecta: true, explicacion: "La conjunción une palabras u oraciones." },
      { texto: "Palabra que sustituye", esCorrecta: false },
      { texto: "Palabra que muestra acción", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un sustantivo abstracto?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Se puede tocar", esCorrecta: false },
      { texto: "Se puede ver", esCorrecta: false },
      { texto: "No se puede percibir con los sentidos", esCorrecta: true, explicacion: "El sustantivo abstracto no se percibe con los sentidos." },
      { texto: "Es un lugar", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es un ejemplo de adverbio de lugar?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Rápido", esCorrecta: false },
      { texto: "Aquí", esCorrecta: true, explicacion: "Aquí es un adverbio de lugar." },
      { texto: "Muy", esCorrecta: false },
      { texto: "Nunca", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es el sujeto en la oración María canta una canción?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "María", esCorrecta: true, explicacion: "María es el sujeto." },
      { texto: "Canta", esCorrecta: false },
      { texto: "Una canción", esCorrecta: false },
      { texto: "María canta", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un complemento directo?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Recibe directamente la acción del verbo", esCorrecta: true, explicacion: "El complemento directo recibe directamente la acción del verbo." },
      { texto: "Acompaña al sustantivo", esCorrecta: false },
      { texto: "Modifica al verbo", esCorrecta: false },
      { texto: "Une oraciones", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es el plural de rubí?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Rubís", esCorrecta: false },
      { texto: "Rubíes", esCorrecta: true, explicacion: "El plural correcto es rubíes." },
      { texto: "Rubíeses", esCorrecta: false },
      { texto: "Rubíesos", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una oración compuesta?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Tiene un solo verbo", esCorrecta: false },
      { texto: "Tiene dos o más verbos", esCorrecta: true, explicacion: "La oración compuesta tiene dos o más verbos." },
      { texto: "No tiene verbo", esCorrecta: false },
      { texto: "Tiene un solo sujeto", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un campo semántico?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Grupo de palabras con significados relacionados", esCorrecta: true, explicacion: "El campo semántico es un grupo de palabras relacionadas por su significado." },
      { texto: "Grupo de palabras opuestas", esCorrecta: false },
      { texto: "Grupo de palabras iguales", esCorrecta: false },
      { texto: "Grupo de palabras sin relación", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una metáfora?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Comparación directa", esCorrecta: true, explicacion: "La metáfora es una comparación directa sin usar como." },
      { texto: "Exageración", esCorrecta: false },
      { texto: "Imitación de sonidos", esCorrecta: false },
      { texto: "Repetición de sonidos", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una hipérbole?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Exageración", esCorrecta: true, explicacion: "La hipérbole es una exageración intencional." },
      { texto: "Comparación", esCorrecta: false },
      { texto: "Personificación", esCorrecta: false },
      { texto: "Metáfora", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una onomatopeya?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Repetición de sonidos", esCorrecta: false },
      { texto: "Palabra que imita sonidos", esCorrecta: true, explicacion: "La onomatopeya es una palabra que imita sonidos." },
      { texto: "Exageración", esCorrecta: false },
      { texto: "Comparación", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un antónimo?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Palabra con significado igual", esCorrecta: false },
      { texto: "Palabra con significado contrario", esCorrecta: true, explicacion: "El antónimo es la palabra contraria." },
      { texto: "Palabra inventada", esCorrecta: false },
      { texto: "Palabra difícil", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un sinónimo?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Palabra igual", esCorrecta: false },
      { texto: "Palabra parecida", esCorrecta: true, explicacion: "El sinónimo es una palabra de significado parecido." },
      { texto: "Palabra contraria", esCorrecta: false },
      { texto: "Palabra inventada", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es el modo subjuntivo?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Expresa hechos reales", esCorrecta: false },
      { texto: "Expresa deseos o dudas", esCorrecta: true, explicacion: "El modo subjuntivo expresa deseos o dudas." },
      { texto: "Expresa órdenes", esCorrecta: false },
      { texto: "Expresa preguntas", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es el modo imperativo?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Expresa hechos reales", esCorrecta: false },
      { texto: "Expresa deseos", esCorrecta: false },
      { texto: "Expresa órdenes", esCorrecta: true, explicacion: "El modo imperativo expresa órdenes o mandatos." },
      { texto: "Expresa preguntas", esCorrecta: false },
    ],
  },
  {
    texto: "¿Cuál es un ejemplo de oración exclamativa?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Qué bonito es el día", esCorrecta: true, explicacion: "¡Qué bonito es el día! es exclamativa." },
      { texto: "El día es bonito", esCorrecta: false },
      { texto: "El día será bonito", esCorrecta: false },
      { texto: "El día fue bonito", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una oración interrogativa?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Expresa sorpresa", esCorrecta: false },
      { texto: "Hace una pregunta", esCorrecta: true, explicacion: "La oración interrogativa hace una pregunta." },
      { texto: "Da una orden", esCorrecta: false },
      { texto: "Expresa un hecho", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una oración enunciativa?",
    dificultad: "media",
    puntuacion: 20,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Da información", esCorrecta: true, explicacion: "La oración enunciativa da información." },
      { texto: "Hace preguntas", esCorrecta: false },
      { texto: "Da órdenes", esCorrecta: false },
      { texto: "Expresa deseo", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un hiato?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Unión de dos vocales", esCorrecta: false },
      { texto: "Separación de dos vocales en sílabas distintas", esCorrecta: true, explicacion: "El hiato separa dos vocales en sílabas distintas." },
      { texto: "Tres vocales juntas", esCorrecta: false },
      { texto: "Cuatro vocales juntas", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un triptongo?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Tres consonantes juntas", esCorrecta: false },
      { texto: "Tres vocales en sílabas separadas", esCorrecta: false },
      { texto: "Tres vocales en una misma sílaba", esCorrecta: true, explicacion: "El triptongo son tres vocales en una sílaba." },
      { texto: "Tres sílabas", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un epíteto?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Adjetivo innecesario", esCorrecta: true, explicacion: "El epíteto es un adjetivo que destaca una cualidad obvia." },
      { texto: "Sustantivo común", esCorrecta: false },
      { texto: "Verbo auxiliar", esCorrecta: false },
      { texto: "Palabra inventada", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una anáfora?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Repetición al inicio de frases", esCorrecta: true, explicacion: "La anáfora es la repetición al inicio de frases." },
      { texto: "Repetición al final", esCorrecta: false },
      { texto: "Metáfora compleja", esCorrecta: false },
      { texto: "Comparación indirecta", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una elipsis?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Repetición de palabras", esCorrecta: false },
      { texto: "Omisión de elementos", esCorrecta: true, explicacion: "La elipsis es la omisión de palabras que se sobreentienden." },
      { texto: "Exageración", esCorrecta: false },
      { texto: "Personificación", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una personificación?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Atribuir cualidades humanas a objetos", esCorrecta: true, explicacion: "La personificación atribuye cualidades humanas a objetos o animales." },
      { texto: "Exageración", esCorrecta: false },
      { texto: "Comparación", esCorrecta: false },
      { texto: "Repetición", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un polisíndeton?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Repetición de conjunciones", esCorrecta: true, explicacion: "El polisíndeton es la repetición de conjunciones." },
      { texto: "Repetición de vocales", esCorrecta: false },
      { texto: "Repetición de sonidos", esCorrecta: false },
      { texto: "Repetición de sílabas", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un asíndeton?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Omisión de conjunciones", esCorrecta: true, explicacion: "El asíndeton es la omisión de conjunciones." },
      { texto: "Repetición de conjunciones", esCorrecta: false },
      { texto: "Omisión de verbos", esCorrecta: false },
      { texto: "Repetición de sustantivos", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un calambur?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Juego de palabras con doble sentido", esCorrecta: true, explicacion: "El calambur es un juego de palabras con doble sentido." },
      { texto: "Comparación indirecta", esCorrecta: false },
      { texto: "Repetición de sonidos", esCorrecta: false },
      { texto: "Rima interna", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un oxímoron?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Unión de palabras opuestas", esCorrecta: true, explicacion: "El oxímoron es la unión de palabras opuestas." },
      { texto: "Repetición de sonidos", esCorrecta: false },
      { texto: "Exageración", esCorrecta: false },
      { texto: "Comparación", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un pleonasmo?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Repetición innecesaria de palabras", esCorrecta: true, explicacion: "El pleonasmo es la repetición innecesaria de palabras." },
      { texto: "Omisión de palabras", esCorrecta: false },
      { texto: "Repetición de sonidos", esCorrecta: false },
      { texto: "Exageración", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una perífrasis verbal?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Verbo simple", esCorrecta: false },
      { texto: "Grupo verbal que expresa una acción", esCorrecta: true, explicacion: "La perífrasis verbal es un grupo verbal que expresa una acción." },
      { texto: "Verbo inventado", esCorrecta: false },
      { texto: "Verbo en modo imperativo", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un verso alejandrino?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Verso de once sílabas", esCorrecta: false },
      { texto: "Verso de catorce sílabas", esCorrecta: true, explicacion: "El verso alejandrino tiene catorce sílabas." },
      { texto: "Verso de ocho sílabas", esCorrecta: false },
      { texto: "Verso libre", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un soneto?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Poema de 12 versos", esCorrecta: false },
      { texto: "Poema de 14 versos", esCorrecta: true, explicacion: "El soneto tiene 14 versos distribuidos en dos cuartetos y dos tercetos." },
      { texto: "Poema de 16 versos", esCorrecta: false },
      { texto: "Poema libre", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una rima consonante?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Rima solo en vocales", esCorrecta: false },
      { texto: "Rima en vocales y consonantes", esCorrecta: true, explicacion: "La rima consonante repite vocales y consonantes al final." },
      { texto: "Rima libre", esCorrecta: false },
      { texto: "Rima visual", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una rima asonante?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Rima solo en vocales", esCorrecta: true, explicacion: "La rima asonante rima solo las vocales." },
      { texto: "Rima en vocales y consonantes", esCorrecta: false },
      { texto: "Rima libre", esCorrecta: false },
      { texto: "Rima visual", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es un romance?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Poema de versos pares", esCorrecta: false },
      { texto: "Poema épico largo", esCorrecta: false },
      { texto: "Poema narrativo en octosílabos", esCorrecta: true, explicacion: "El romance es un poema narrativo en octosílabos con rima asonante en los pares." },
      { texto: "Poema en prosa", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una silva?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Combinación libre de heptasílabos y endecasílabos", esCorrecta: true, explicacion: "La silva combina heptasílabos y endecasílabos libremente." },
      { texto: "Poema en prosa", esCorrecta: false },
      { texto: "Poema en verso libre", esCorrecta: false },
      { texto: "Poema sin rima", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una jarcha?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Composición popular medieval en árabe", esCorrecta: false },
      { texto: "Composición popular medieval en mozárabe", esCorrecta: true, explicacion: "La jarcha es una composición popular medieval en mozárabe." },
      { texto: "Composición popular medieval en latín", esCorrecta: false },
      { texto: "Composición popular medieval en griego", esCorrecta: false },
    ],
  },
  {
    texto: "¿Qué es una glosa?",
    dificultad: "dificil",
    puntuacion: 30,
    categoriaNombre: "Lengua Castellana",
    respuestas: [
      { texto: "Poema en que se comenta otro poema", esCorrecta: true, explicacion: "La glosa comenta otro poema o texto en forma poética." },
      { texto: "Poema sin rima", esCorrecta: false },
      { texto: "Poema en prosa", esCorrecta: false },
      { texto: "Poema visual", esCorrecta: false },
    ],
  },
];

export default preguntasLengua