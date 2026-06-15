/* Artículos del tópico IA */

export const iaPosts = [
  {
    slug: "claude-asistentes-ia-empresas",
    topic: "ia",
    title: "Claude y la nueva generación de asistentes de IA para empresas",
    excerpt:
      "Qué hace diferente a Claude frente a otros modelos, en qué casos reales aporta valor y cómo lo integramos en el día a día de un negocio sin humo ni promesas vacías.",
    author: "Equipo DuoQIT",
    date: "2026-05-28",
    body: `
<p>La inteligencia artificial generativa ha dejado de ser una curiosidad de laboratorio para convertirse en una herramienta de trabajo. Pero entre tanto ruido es difícil separar lo útil de lo anecdótico. En DuoQIT trabajamos a diario con <strong>Claude</strong>, el modelo de Anthropic, y queremos contarte sin marketing qué hace bien, dónde están sus límites y cómo lo aprovechamos en proyectos reales.</p>

<h2>Qué es Claude y por qué lo usamos</h2>
<p>Claude es un modelo de lenguaje de gran tamaño: un sistema entrenado para entender y generar texto con un nivel de coherencia muy alto. A diferencia de un buscador, no devuelve enlaces, sino respuestas redactadas; y a diferencia de una plantilla, se adapta al contexto de cada conversación.</p>
<p>Lo que nos hizo apostar por él no es una cifra de marketing, sino tres cualidades muy prácticas: maneja <strong>contextos largos</strong> (puede leer documentos extensos de una sola vez), sigue <strong>instrucciones complejas</strong> con varios pasos sin perder el hilo, y tiende a <strong>reconocer lo que no sabe</strong> en lugar de inventarlo, algo crítico cuando el resultado va a llegar a un cliente.</p>

<h2>Casos de uso que sí aportan valor</h2>
<p>La pregunta correcta no es "¿qué puede hacer la IA?", sino "¿qué tarea concreta de mi negocio mejora?". Estos son los usos donde vemos retorno real:</p>
<ul>
  <li><strong>Atención al cliente de primer nivel.</strong> Responder preguntas frecuentes, clasificar consultas y redactar borradores de respuesta que un humano revisa antes de enviar.</li>
  <li><strong>Resumen y análisis de documentos.</strong> Contratos, informes, actas o correos largos resumidos en puntos clave en segundos.</li>
  <li><strong>Generación de contenido base.</strong> Descripciones de producto, fichas, borradores de email o publicaciones que después se editan, no se publican en crudo.</li>
  <li><strong>Apoyo interno al equipo.</strong> Un asistente al que preguntar procedimientos, normativa interna o cómo se hace una tarea poco frecuente.</li>
</ul>

<h2>Dónde están los límites (y por qué importan)</h2>
<p>Ser honestos con los límites es lo que separa un proyecto que funciona de uno que decepciona. Claude, como cualquier modelo, puede equivocarse con datos muy específicos, no conoce información posterior a su entrenamiento salvo que se la proporciones, y no debe ser la última palabra en decisiones legales, médicas o financieras.</p>
<p>La forma de neutralizar estos riesgos es de diseño: nunca dejamos que el modelo invente datos críticos. Le damos <strong>fuentes verificadas</strong> de las que partir, marcamos qué decisiones requieren revisión humana y registramos lo que genera para poder auditarlo. La IA acelera el trabajo; no sustituye el criterio.</p>

<h2>Cómo lo integramos en un negocio</h2>
<p>Un asistente de IA aislado tiene poco valor. La diferencia la marca conectarlo a tus datos y tus herramientas. En la práctica seguimos un camino sencillo:</p>
<ul>
  <li>Identificamos una tarea repetitiva y costosa en tiempo.</li>
  <li>Conectamos el modelo a la información que necesita (documentos, base de datos, CRM).</li>
  <li>Definimos instrucciones claras y barreras de seguridad sobre qué puede y qué no puede hacer.</li>
  <li>Medimos el resultado durante unas semanas y ajustamos.</li>
</ul>
<p>Ese último punto es clave: una automatización con IA no se "instala y se olvida", se afina. Las primeras semanas son de observación, y casi siempre descubrimos casos límite que conviene corregir.</p>

<h2>Seguridad y privacidad de tus datos</h2>
<p>Una duda legítima de cualquier empresa es: "si uso IA, ¿adónde van mis datos?". Es una pregunta que hay que hacerse siempre. Trabajamos con configuraciones que no usan tus conversaciones para reentrenar modelos, evaluamos qué información sale realmente de tu organización y, cuando el caso lo exige, planteamos soluciones que se ejecutan en tu propia infraestructura. La IA no debería obligarte a renunciar al control de tu información.</p>

<h2>El asistente como compañero de trabajo</h2>
<p>La mejor forma de entender Claude no es como un oráculo que lo sabe todo, sino como un compañero muy rápido y muy paciente al que delegas el primer borrador, la tarea aburrida o la búsqueda tediosa, y al que siempre revisas. Usado así, libera horas que tu equipo puede dedicar a lo que de verdad necesita una persona: el trato con el cliente, las decisiones y la creatividad.</p>
<p>En DuoQIT no vendemos "IA" como concepto abstracto. Empezamos por un problema concreto de tu negocio, medimos el antes y el después, y solo seguimos adelante si los números cuadran. Si tienes una tarea que sospechas que se podría automatizar con un asistente inteligente, cuéntanosla y te decimos con franqueza si merece la pena.</p>
`,
  },
  {
    slug: "integrar-ia-generativa-procesos-negocio",
    topic: "ia",
    title: "Cómo integrar IA generativa en tus procesos sin morir en el intento",
    excerpt:
      "La mayoría de proyectos de IA fracasan no por la tecnología, sino por el enfoque. Esta es la metodología que usamos para que una integración de IA dé resultados de verdad.",
    author: "Equipo DuoQIT",
    date: "2026-05-15",
    body: `
<p>Muchas empresas se lanzan a "poner IA" sin saber muy bien para qué, y a los tres meses tienen una herramienta que nadie usa. El problema casi nunca es el modelo: es el enfoque. La IA generativa funciona muy bien cuando se aplica a un problema bien definido y muy mal cuando se compra como solución mágica para todo. Aquí está la metodología que seguimos para que no te pase.</p>

<h2>Empieza por el problema, no por la herramienta</h2>
<p>El error más común es enamorarse de la tecnología. La pregunta no es "¿cómo uso la IA?", sino "¿qué tarea me cuesta dinero o tiempo y se repite mucho?". Una buena candidata cumple tres condiciones: ocurre con frecuencia, consume horas de personas cualificadas y sigue un patrón razonablemente predecible.</p>
<p>Redactar respuestas a las mismas preguntas, clasificar correos entrantes, extraer datos de facturas o generar resúmenes de reuniones son ejemplos perfectos. "Mejorar la empresa con IA" no lo es: es demasiado vago para ejecutarse.</p>

<h2>Mide el punto de partida</h2>
<p>No puedes saber si un proyecto funciona si no sabes de dónde partes. Antes de tocar nada, anotamos cuánto se tarda hoy en esa tarea, cuántos errores se cometen y cuánto cuesta. Esa foto inicial es la que después permite decir, con números, si la inversión ha valido la pena. Sin esa línea base, cualquier valoración es una opinión.</p>

<h2>Empieza pequeño y controlado</h2>
<p>Un buen proyecto de IA empieza con un piloto acotado: un proceso, un equipo, unas semanas. Esto tiene dos ventajas. La primera, que el riesgo es bajo: si algo no funciona, lo descubres barato. La segunda, que aprendes cómo se comporta el modelo con tus datos reales, que casi nunca son tan limpios como uno imagina.</p>
<ul>
  <li>Define un alcance concreto y un criterio de éxito medible.</li>
  <li>Mantén a una persona revisando los resultados al principio.</li>
  <li>Recoge los casos en los que falla: son oro para mejorar.</li>
</ul>

<h2>Dale contexto: la IA no adivina tu negocio</h2>
<p>Un modelo de lenguaje sabe mucho del mundo en general y nada de tu empresa en particular. Por eso la magia real no está en el modelo, sino en <strong>conectarlo a tu información</strong>: tus documentos, tu catálogo, tu histórico de clientes. Una técnica habitual para esto es lo que se conoce como RAG, que permite que la IA responda basándose en tus propios datos en lugar de en su conocimiento genérico. El resultado pasa de "respuestas correctas pero genéricas" a "respuestas útiles para tu caso".</p>

<h2>Pon barreras de seguridad</h2>
<p>Integrar IA en un proceso real exige decidir qué puede hacer sola y qué no. Las reglas que aplicamos casi siempre:</p>
<ul>
  <li>Las decisiones con impacto legal, económico o de seguridad pasan por una persona.</li>
  <li>El sistema nunca inventa datos críticos: si no los tiene, lo dice.</li>
  <li>Todo lo que genera queda registrado para poder revisarlo.</li>
  <li>El usuario final sabe que está interactuando con un sistema automático.</li>
</ul>
<p>Estas barreras no frenan la IA; la hacen confiable, que es lo que permite usarla en serio.</p>

<h2>Forma a tu equipo</h2>
<p>La tecnología es la mitad del proyecto; la otra mitad son las personas que la van a usar. Un asistente de IA mal explicado genera desconfianza ("viene a quitarme el trabajo") o mal uso (esperar de él cosas que no puede hacer). Dedicamos siempre una parte del proyecto a enseñar al equipo qué pedirle, cómo revisar lo que produce y cuándo no fiarse. Un equipo que entiende la herramienta la aprovecha diez veces más.</p>

<h2>Itera: el primer resultado nunca es el definitivo</h2>
<p>La IA generativa no es un software tradicional que se entrega y queda fijo. Es un sistema que mejora con el uso. Las instrucciones se refinan, se añaden ejemplos de casos difíciles y se ajustan las barreras a medida que aparecen situaciones nuevas. Los proyectos que tratan la IA como algo vivo, que se cuida, son los que acaban dando resultados sostenidos.</p>

<h2>El resultado: horas recuperadas</h2>
<p>Cuando se hace bien, la integración de IA no sustituye personas: las libera de la parte mecánica de su trabajo. El equipo deja de copiar y pegar, de redactar lo mismo veinte veces o de buscar información dispersa, y dedica ese tiempo a lo que de verdad mueve el negocio. Esa es la métrica que de verdad importa, y es la que medimos en cada proyecto que ponemos en marcha.</p>
`,
  },
  {
    slug: "rag-ia-responder-con-datos-de-tu-empresa",
    topic: "ia",
    title: "RAG: cómo hacer que la IA responda con los datos de tu empresa",
    excerpt:
      "Un modelo de lenguaje no conoce tu negocio. La técnica RAG le permite responder a partir de tus documentos, con precisión y citando la fuente. Te explicamos cómo funciona.",
    author: "Equipo DuoQIT",
    date: "2026-04-30",
    body: `
<p>Imagina un asistente de IA que conoce al dedillo tus manuales, tu catálogo, tus contratos y tu histórico de tickets, y que responde cualquier pregunta sobre ello en segundos citando de dónde ha sacado la información. Eso no es ciencia ficción: es lo que permite una técnica llamada <strong>RAG</strong>, y es probablemente la forma más útil de aplicar IA en una empresa hoy.</p>

<h2>El problema que resuelve</h2>
<p>Un modelo de lenguaje se entrena con una enorme cantidad de texto general, pero no sabe nada específico de tu empresa: ni tus precios, ni tus procedimientos, ni lo que pasó con un cliente concreto. Si le preguntas por ello, o admite que no lo sabe o, peor, se lo inventa con seguridad. Ninguna de las dos opciones sirve para un negocio.</p>
<p>Podrías reentrenar el modelo con tus datos, pero es caro, lento y hay que repetirlo cada vez que la información cambia. RAG ofrece un camino mucho más práctico.</p>

<h2>Qué significa RAG</h2>
<p>RAG son las siglas en inglés de "generación aumentada por recuperación". Suena técnico, pero la idea es de sentido común. En lugar de esperar que el modelo se sepa todo de memoria, le damos acceso a una biblioteca con tu información y, cada vez que le preguntas algo, el sistema hace dos cosas:</p>
<ul>
  <li><strong>Recupera</strong> los fragmentos de tus documentos más relevantes para la pregunta.</li>
  <li><strong>Genera</strong> la respuesta basándose en esos fragmentos, no en su conocimiento genérico.</li>
</ul>
<p>Es como la diferencia entre hacer un examen de memoria y hacerlo con los apuntes delante. Con los apuntes, las respuestas son más precisas y se puede comprobar de dónde salen.</p>

<h2>Cómo funciona por dentro, sin tecnicismos</h2>
<p>El proceso tiene dos fases. La primera ocurre una vez: tomamos tus documentos, los troceamos en fragmentos manejables y los convertimos en una representación que la máquina puede comparar por significado, no solo por palabras exactas. Eso se guarda en una base de datos especial.</p>
<p>La segunda fase ocurre con cada pregunta: el sistema busca en esa base los fragmentos cuyo significado más se parece a lo que has preguntado, se los entrega al modelo junto con tu pregunta, y el modelo redacta una respuesta usándolos como fuente. Todo en uno o dos segundos.</p>

<h2>Por qué buscar "por significado" cambia las cosas</h2>
<p>Un buscador tradicional encuentra palabras exactas. Si preguntas por "vacaciones" pero el documento dice "días libres retribuidos", no lo encuentra. La búsqueda por significado entiende que ambas cosas hablan de lo mismo. Esto hace que el asistente encuentre la respuesta correcta aunque la pregunta y el documento usen palabras distintas, que es lo que pasa siempre en la vida real.</p>

<h2>La gran ventaja: respuestas con fuente</h2>
<p>Como la respuesta se construye a partir de fragmentos concretos, el sistema puede decirte <strong>de qué documento y de qué parte</strong> ha sacado cada cosa. Esto cambia por completo la confianza: ya no es "la IA dice que...", sino "según el manual de calidad, página 12...". El usuario puede verificarlo, y eso es lo que permite usar la herramienta en contextos serios.</p>

<h2>Casos donde brilla</h2>
<ul>
  <li><strong>Soporte interno:</strong> un asistente que responde dudas del equipo sobre procedimientos, normativa o herramientas.</li>
  <li><strong>Atención al cliente:</strong> respuestas precisas basadas en tu documentación real, no en generalidades.</li>
  <li><strong>Consulta de documentación técnica:</strong> manuales extensos que se vuelven preguntables en lenguaje natural.</li>
  <li><strong>Onboarding:</strong> los nuevos encuentran respuestas sin tener que interrumpir a un compañero.</li>
</ul>

<h2>Lo que hay que cuidar</h2>
<p>RAG no es magia: la calidad de las respuestas depende de la calidad de tus documentos. Si la información está desactualizada o es contradictoria, el asistente lo reflejará. Por eso parte del trabajo es ayudar a ordenar y mantener al día esa base de conocimiento. También conviene definir qué hace el sistema cuando no encuentra respuesta: lo correcto es que diga "no tengo esa información", nunca que improvise.</p>

<h2>En resumen</h2>
<p>RAG es, hoy, la manera más sensata de poner IA al servicio de una empresa: precisa, verificable, fácil de actualizar y sin necesidad de reentrenar nada. Si tienes mucha documentación y tu equipo pierde tiempo buscando en ella, es probablemente el primer proyecto de IA que deberías plantearte. En DuoQIT lo montamos sobre tu propia información y conectado a tus herramientas, para que la respuesta llegue donde tu equipo ya trabaja.</p>
`,
  },
  {
    slug: "prompts-que-funcionan-guia-practica",
    topic: "ia",
    title: "Prompts que funcionan: guía práctica para hablar con la IA",
    excerpt:
      "La diferencia entre una respuesta mediocre y una excelente casi siempre está en cómo preguntas. Principios concretos para sacar lo mejor de un modelo de lenguaje.",
    author: "Equipo DuoQIT",
    date: "2026-04-12",
    body: `
<p>La misma IA puede darte una respuesta inútil o una excelente, y muchas veces la única diferencia es cómo le has preguntado. A la instrucción que le das al modelo se le llama <strong>prompt</strong>, y aprender a escribir buenos prompts es una habilidad que se paga sola en tiempo ahorrado. No requiere saber programar: requiere claridad. Estos son los principios que enseñamos a los equipos con los que trabajamos.</p>

<h2>1. Da contexto antes de pedir</h2>
<p>El error número uno es pedir sin explicar. "Escríbeme un email" puede salir de mil maneras. "Escribe un email para un cliente que lleva tres meses sin pagar una factura, con tono firme pero cordial, recordándole el importe y proponiendo pagar en dos plazos" tiene una sola dirección. Cuanto más sepa el modelo sobre la situación, el destinatario y el objetivo, mejor acierta. El contexto no es opcional: es la mitad del prompt.</p>

<h2>2. Sé específico con el formato</h2>
<p>Si quieres una lista, pídela. Si quieres tres opciones, dilo. Si quieres máximo 100 palabras, indícalo. El modelo no adivina el formato que tienes en la cabeza; te da el más probable. Decir "dame cinco titulares de menos de diez palabras cada uno, en tono cercano" produce exactamente eso, y te ahorra la ronda de "no, así no".</p>

<h2>3. Asígnale un papel</h2>
<p>Empezar con "actúa como..." orienta mucho la respuesta. "Actúa como un experto en atención al cliente", "actúa como un corrector de estilo exigente" o "actúa como un asesor fiscal que explica las cosas de forma sencilla" cambian el tono, el vocabulario y el nivel de detalle. Es una forma rápida de calibrar la respuesta hacia donde la necesitas.</p>

<h2>4. Muestra un ejemplo</h2>
<p>Si tienes claro cómo debe ser el resultado, enséñaselo. "Reescribe estas descripciones de producto con este estilo:" seguido de un ejemplo bien hecho vale más que tres párrafos de instrucciones. El modelo es excelente imitando patrones: dale uno bueno y lo replicará con consistencia en todo lo demás.</p>

<h2>5. Itera, no te conformes con la primera respuesta</h2>
<p>La primera respuesta es un punto de partida, no la entrega final. Lo normal es afinar: "más corto", "menos formal", "quita la introducción", "céntrate en el segundo punto". Conversar con el modelo, corrigiéndolo paso a paso, da resultados mucho mejores que esperar el acierto perfecto a la primera. Trátalo como un colaborador al que diriges, no como un botón mágico.</p>

<h2>6. Pídele que piense antes de responder</h2>
<p>Para tareas que requieren razonamiento —analizar un texto, comparar opciones, resolver un problema con varios pasos— funciona muy bien pedirle que <strong>explique su razonamiento antes de dar la conclusión</strong>. "Analiza primero los pros y contras y luego recomienda" suele dar respuestas más sólidas que pedir la conclusión directa. Le das espacio para pensar y los errores se reducen.</p>

<h2>7. Dile lo que NO quieres</h2>
<p>A veces es tan útil marcar los límites como el objetivo. "Sin tecnicismos", "no inventes datos que no te he dado", "no incluyas introducción ni despedida", "evita el lenguaje comercial exagerado". Estas restricciones recortan justo lo que más molesta de las respuestas genéricas.</p>

<h2>Un patrón que casi nunca falla</h2>
<p>Si quieres una plantilla mental sencilla, combina estos elementos en orden:</p>
<ul>
  <li><strong>Papel:</strong> "Actúa como..."</li>
  <li><strong>Contexto:</strong> la situación y el objetivo.</li>
  <li><strong>Tarea:</strong> qué quieres exactamente.</li>
  <li><strong>Formato:</strong> cómo quieres el resultado.</li>
  <li><strong>Restricciones:</strong> qué evitar.</li>
</ul>
<p>No hace falta usar siempre los cinco, pero tenerlos en mente convierte una petición vaga en una instrucción que el modelo puede ejecutar bien.</p>

<h2>Un cuidado importante</h2>
<p>Por bueno que sea tu prompt, revisa siempre lo que genera la IA antes de usarlo, sobre todo si contiene datos, cifras o afirmaciones que un cliente va a leer. Un buen prompt aumenta muchísimo la probabilidad de acierto, pero no sustituye el último filtro humano. Esa combinación —buenas instrucciones más revisión— es la que convierte la IA en una herramienta de trabajo fiable en lugar de una ruleta. Si quieres, en DuoQIT formamos a tu equipo para que la saque partido desde el primer día.</p>
`,
  },
];
