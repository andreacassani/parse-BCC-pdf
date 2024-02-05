# parse-BCC-pdf

Parser per gli estratti conto della Carta di Credito BCC da .pdf a .txt con tabulazione.

- [Introduzione](#introduzione)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Licenza](#licenza)
- [Contribuire](#contribuire)

## Introduzione

Questo script utilizza [npm-pdfreader](https://github.com/adrienjoly/npm-pdfreader) per leggere gli estratti conto in formato PDF della BCC e fornire un file di testo con tabulazioni che può essere poi incollato su un foglio di calcolo o altro.

## Installazione

Clona la repo e poi:

```
npm install
```

## Utilizzo

Aggiungi un estratto conto BCC in formato PDF nella cartella `in/` quindi fai partire lo script con:

```
npm start
```

Troverai il file di testo nella cartella `out/` una volta terminato.

## Licenza

Lo script è sotto licenza [GNU General Public License v3.0](https://github.com/andreacassani/parse-BCC-pdf/blob/main/LICENSE).

## Contribuire

Per conribuire a questo progetto puoi aprire una nuova [Issue](https://github.com/andreacassani/parse-BCC-pdf/issues) oppure una [Pull request](https://github.com/andreacassani/parse-BCC-pdf/pulls).
