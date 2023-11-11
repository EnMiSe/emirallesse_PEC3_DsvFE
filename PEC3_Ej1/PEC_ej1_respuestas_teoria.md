Es declara una variable dog sense tipus específic.
S'assigna un objecte a dog amb propietats kind (cadena) i weight (número).
S'assigna un nou objecte a dog amb kind com a boolean i weight com a número.
La funció baby accepta dos paràmetres i retorna un nou objecte que combina les propietats dels dos objectes passats com a arguments.

S'introdueix una interface Dog que defineix el tipus de les propietats que han de tenir els objectes Dog.
Es declara una variable dog del tipus Dog.
S'assigna un objecte a dog conforme a l'interface Dog.
La segona assignació a dog seria un error de compilació en TypeScript, ja que true no és un string.
La funció baby està tipada per acceptar i retornar objectes del tipus Dog.

Principals avantatges de l'ús de TypeScript sobre JavaScript són els següents:
TypeScript afegeix un sistema de tipat estàtic. Això vol dir que les variables, paràmetres i valors de retorn tenen tipus definits, el que ajuda a detectar errors durant la fase de desenvolupament, abans de l'execució del codi.
Amb TypeScript, els objectes i els paràmetres de funcions poden ser tipats, cosa que redueix la probabilitat d'errors en temps d'execució, ja que es poden detectar assignacions incorrectes i usos incorrectes de les variables i funcions.
També es permet definir interfaces i classes, així com característiques de la programació orientada a objectes com l'herència, que no són tan directes o explícites en JavaScript pur.
Amb els tipus definits, els editors de codi poden proporcionar millors suggeriments automàtics i eines de refactorització, que poden millorar significativament la productivitat del desenvolupador.
Es permet definir propietats privades i públiques en classes, cosa que pot ajudar a encapsular millor el codi.
Permet als desenvolupadors crear components que poden treballar amb diversos tipus, millorant la reutilització del codi i la seva flexibilitat.
El codi TypeScript es compila a JavaScript, i durant aquesta compilació es poden atrapar errors que en JavaScript puro no serien detectats fins a l'execució.
