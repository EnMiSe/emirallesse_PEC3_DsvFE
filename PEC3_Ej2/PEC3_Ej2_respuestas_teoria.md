Quan es declara const a = 1 + 2;, TypeScript inferirà que a és de tipus number perquè estàs assignant el resultat d'una operació aritmètica entre números.

Amb const b = a + 3;, ja que a és un número i es suma amb un altre número (3), TypeScript també interpreta que b és de tipus number.

Per a const c = { apple: a, banana: b }; es un tipus objecte amb dues propietats, apple i banana, que son del tipus number ja que estan assignades a les variables a i b respectivament.

Finalment, per const d = c.apple * 4; ja que c.apple és de tipus number i es multiplica per 4 que també és un número, TypeScript inferirà que d és de tipus number.

![descrip img](ruta)


/* Qüestions plantejades*/

1. Resposta pregunta 1:
const a = 1042;
Tipus: number
El valor assignat és un literal numèric, per tant TypeScript infereix que la variable a és de tipus number.

const b = 'apples and oranges';
Tipus: string
El valor assignat està entre cometes, indicant que és un literal de cadena de text, així que TypeScript infereix que b és de tipus string.

const c = 'pineapples';
Tipus: string
Igual que amb b, el valor assignat és un literal de cadena, per tant c és inferit com a string.

const d = [true, true, false];
Tipus: boolean[]
El valor assignat és un array que conté només valors booleans, per això TypeScript infereix que d és un array de booleans, boolean[].

const e = { type: 'ficus' };
Tipus: { type: string }
El valor assignat és un objecte amb una propietat type que té un valor de cadena de text. TypeScript infereix la forma de l'objecte, amb type com a propietat de tipus string.

const f = [1, false];
Tipus: (number | boolean)[]
El valor assignat és un array que conté un número i un boolean. TypeScript utilitza una unió de tipus per a representar que l'array pot contenir tant números com booleans.

const g = [3];
Tipus: number[]
Tot i que hi ha només un valor en l'array, aquest és un número, així que TypeScript inferirà que g és un array de números.

const h = null;
Tipus: any o null depenent de la configuració del compilador de TypeScript.
Si l'opció strictNullChecks està desactivada, TypeScript pot inferir el tipus any, permetent que h sigui assignat a qualsevol altre tipus més endavant. Si està activada, s'assignarà el tipus null.

2. Resposta pregunta 2:
i = 4; // Error TS2588: Cannot assign to 'i' because it is a constant.
Motiu: Aquí es tracta d'assignar un nou valor a una constant (i). Les constants en TypeScript (declarades amb const) no poden ser reassignades després de la seva inicialització. Aquesta és una regla de l'idioma per prevenir canvis accidentals al valor de les constants.

j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
Motiu: El mètode push s'està cridant en un array que ha estat inferit com un array de números (number[]). Passar una cadena de text ('5') com argument viola la definició del tipus d'array esperat, que només accepta números.

let k: never = 4; // Error TS2322: Type '4' is not assignable to type 'never'.
Motiu: El tipus never és un tipus especial en TypeScript que representa un tipus de valor que mai ocorre. Assignar-li qualsevol valor, inclosos els literals numèrics com 4, és un error perquè s'està suposant que la variable no hauria de tenir mai cap valor.

let m = l * 2; // Error TS2571: Object is of type 'unknown'.
Motiu: La variable l ha estat declarada amb el tipus unknown, que és un tipus que TypeScript utilitza per indicar que una variable pot contenir qualsevol valor, però no es permet operar amb ell sense una verificació de tipus més específica. Intentar fer una operació aritmètica amb una variable de tipus unknown sense primer comprovar o restringir el tipus d'aquesta produeix un error perquè TypeScript no pot assegurar-se que l és un número. Abans d'utilitzar l en una operació, necessitaries assegurar que l és de tipus number mitjançant una comprovació de tipus o asserció de tipus (type assertion).

-----------------------------FALTA-----------------------------------------------------

3. Resposta pregunta 3:
Les interfícies són utilitzades per a definir objectes que no necessiten una implementació per part de l'usuari, mentre que les classes són utilitzades quan necessites crear instàncies concretes o quan es vol incloure implementacions específiques, juntament amb la definició de l'estructura.