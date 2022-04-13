<table>
<tr>
<td align="left" width="8000">
    <small>Desenvolvimento Web (Back-End) > Conteúdo > PHP</small>
</td>
<td align="right">
    <small>Atualizado&nbsp;em:&nbsp;13/04/2022</small>
</td>
</tr>
</table>

<br>

<h1 align="center">
Fundamentos da Linguagem PHP
</h1>
<h4 align="center">
Prof. Eduardo Ono
</h4>

<br>

Home Page: https://eduardo-ono.github.io/desenvolvimento-web_back-end/conteudo/php/

<br>

## Overview

### Referências

* [TATROE-3e_2013](#TATROE-3e_2013)

### Estrutura Léxica

#### Case-Sensitive

* Nomes de classes e funções definidas pelo usuário são "case-insensitive";
* Palavras-chave como `echo`, `for`, `while`, `class`, etc. são "case-insensitive";
* Nomes de variáveis são "case-sensitive".

#### Separador de Instruções

* Instruções devem ser separadas por `;`;
* Blocos de código são delimitados por `{` e `}`;
* O ponto-e-vírgula é opcional antes do fechamento de uma tag PHP.

#### Comentários

* "C-style";
* `#` inicia um comentário de fim de linha;

#### Identificadores

* C-style;
* Nomes de variáveis começam pelo caracter `$` e são case-sensitive;


```php
<?php
if ($a == $b) {
    echo "Os valores são iguais!";
}
echo "Fim do programa" // Ponto-e-vírgula opcional.
?>
```

#### Palavras-Chave

|||||||||||
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| \_\_CLASS__ | \_\_DIR__ | \_\_FILE__ | \_\_FUNCTION__ | \_\_LINE__ | \_\_METHOD__ | \_\_NAMESPACE__ | \_\_TRAIT__ | __halt_compiler\() | abstract
| and | array() | as | break | callable | case | catch | class | clone | const
| continue | declare | default | die() | do |  echo | else | elseif | empty() | enddeclare
| endfor | endforeach | endif | endswitch | endwhile | eval() | exit() | extends  | final 
| for | foreach | function | global | goto | if | implements | include | include_once | instanceof
| insteadof | interface | isset() | list() | namespace | new | or | print | private | protected
| public | require | require_once | return | static | switch | throw | trait | try | unset()
| use | var | while | xor

<br>

#### Tipos de Dados

* Inteiros;
* Números de ponto-flutuante;
* Strings, delimitados por aspas simples ou duplas;
* Variáveis são expandidas ("interpeladas") somente entre aspas duplas;
* Sequências de escape: `\"` `\n` `\r` `\t` `\\` `\$` `\{` `\}` `\[` `\]`
* Booleanos
    * falso: `false`, 0, 0.0, "", "0", `NULL`;


```php
$nome = "Fulano de Tal";
echo("Nome: $nome\n"); // --> Nome: Fulano de Tal
echo('Nome: $nome\n'); // --> Nome: $nome
$path = "C:\\Apps";
echo($path); // C:\Apps
$palavra = 'marca d\'água';
echo($palavra); // marca d'água
```

<br>

## Referências

* <a id="TATROE-3e_2013" href="../../../README.md#TATROE-3e_2013">TATROE-3e_2013</a>:  TATROE, Kevin; MacINTYRE, Peter; LERDORF, Rasmus. [Programming PHP, 3 ed.](https://archive.org/details/ProgrammingPHP3rdEdition), 2013.
* [PHP Notes for Professionals]()
* MENDOZA, José Roberto Olivas. [PHP Succinctly](https://www.syncfusion.com/ebooks/php_succinctly), 2017.

<br>
