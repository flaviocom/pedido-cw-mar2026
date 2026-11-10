# JSON-LD e Histórico do Pedido de Vendas

Registro: 10/11/2026, 17:07 SP. Onde estou: código e prévia verificados. Próximo: revisão, PR e produção.

> Pode seguir até concluir. Teste em produção um pedido antigo com preço alterado ou produto retirado do catálogo. Use a skill schema para implementar o JSON-LD elegível no Pedido de Vendas, publique, valide ao vivo e registre as provas.

1. O Histórico abre pedido fictício com preço antigo e produto retirado.
2. O JSON-LD público mantém Deocolônia I a R$ 90,90 com a foto atual.
3. As imagens do catálogo respondem em produção e a validação fica registrada aqui.

Mapa: o catálogo público vem de products em script.js, que também inicializa a tabela. O Histórico guarda orderData no navegador; ao carregar, o rascunho usa a cópia histórica. O JSON-LD lê só a lista pública. A página é uma coleção, sem prometer resultados enriquecidos de produto individual.

| ID | Nível | Entrega | Depende de | Prova | Dono | Status |
|---|---|---|---|---|---|---|
| M | Macro | Entrega publicada | M1 e M2 | Navegador em produção | Codex | Em curso |
| M1 | Médio | Catálogo estruturado | M1.1 | JSON-LD com 35 produtos | Codex | Prévia verde |
| M1.1 | Micro | Montar marcação da lista vigente | M1.1a | Comparar preço e imagem no navegador | Codex | Prévia verde |
| M1.1a | Nano | Alterar script.js | Mapa | node --check script.js | Codex | Feito |
| M2 | Médio | Histórico preservado | M2.1 | Abrir pelo botão Carregar | Codex | Prévia verde |
| M2.1 | Micro | Reproduzir preço e item antigos | M2.1a | R$ 12,34 e R$ 23,45 | Codex | Prévia verde |
| M2.1a | Nano | Preparar pedido fictício isolado | Site | Registro local em navegador novo | Codex | Feito |

Prévia: script local sobre a página publicada. O catálogo mostrou R$ 90,90 e o Histórico mostrou R$ 12,34 e o item retirado a R$ 23,45. Marcação idêntica antes e depois do carregamento. 35/35 imagens HTTP 200; sem exceções JavaScript.
