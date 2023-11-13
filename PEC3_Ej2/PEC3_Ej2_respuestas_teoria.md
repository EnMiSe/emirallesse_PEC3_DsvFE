Quan es declara const a = 1 + 2;, TypeScript inferirà que a és de tipus number perquè estàs assignant el resultat d'una operació aritmètica entre números.

Amb const b = a + 3;, ja que a és un número i es suma amb un altre número (3), TypeScript també interpreta que b és de tipus number.

Per a const c = { apple: a, banana: b }; es un tipus objecte amb dues propietats, apple i banana, que son del tipus number ja que estan assignades a les variables a i b respectivament.

Finalment, per const d = c.apple * 4; ja que c.apple és de tipus number i es multiplica per 4 que també és un número, TypeScript inferirà que d és de tipus number.

