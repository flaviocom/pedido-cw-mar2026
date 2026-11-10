# Rascunhos e catálogo do pedido
Registro em 10/11/2026, 10:26 SP.

> Entendimento perfeito. Pode codar.

- Alternar dois pedidos, recarregar e recuperar os dois. Salvar no mesmo Histórico.
- Abrir todas as seções no primeiro uso mobile e manter a última escolha após recarregar.
- Conferir os nomes I a V e comparar a embalagem do Gel Facial Esfoliante com a foto do Drive.

| ID | Entrega | Depende de | Prova | Dono | Status |
|---|---|---|---|---|---|
| M | Pedido publicado | E1, E2 | GitHub Pages ao vivo | Codex | Aberto |
| E1 | Rascunhos e seções mobile | C1 | Dois clientes e recarga mobile | Codex | Aberto |
| E2 | Catálogo | C2 | Nome e imagem na tabela pública | Codex | Aberto |
| C1 | Persistência e interface | N1 | Rascunho antigo, novo e Histórico | Codex | Aberto |
| C2 | Cadastro e foto | N2 | Comparação com Drive | Codex | Aberto |
| N1 | Alterar script.js, index.html e style.css | Código atual | node --check script.js | Codex | Aberto |
| N2 | Conferir produto e arquivo fonte | Drive | Comparação visual | Codex | Aberto |

Consumidores mapeados: inicialização, inputs e cálculo, limpeza, restauração do Histórico, tabela de produtos, relatórios impressos e seções responsivas.

Prova local: 2 rascunhos alternados com recarga, migração da chave antiga, 5 seções abertas no primeiro uso, Pagamento fechada e reaberta com preferência persistente, 5 nomes padronizados e foto nova 600 × 600 com object-fit contain. Próximo: publicar e repetir no GitHub Pages.

### Revisão independente e preservação dos rascunhos

> Resolva os problemas detectados.

Critérios de pronto
- Uma edição na segunda aba do navegador preserva o rascunho criado na primeira após recarregar.
- Carregar o Histórico abre outro rascunho e preserva o atendimento ativo.
- Rascunhos existentes e a preferência das seções no celular continuam disponíveis.

Consumidores: inicialização e recuperação, edição e gravação, lista de abas, restauração do Histórico. Cada rascunho usa uma chave própria. A seleção ativa usa armazenamento da sessão da aba. O Histórico conserva seu formato.

Evidência inicial: no GitHub Pages, Aurora desapareceu após editar Brisa em outra aba. Servindo o script corrigido ao mesmo navegador, a lista manteve Brisa e Aurora. A validação em produção da correção depende da publicação desta revisão.
Prova do Histórico: a versão publicada substituiu o rascunho ativo por Brisa. Com o script corrigido, Aurora abriu em outro rascunho e a lista preservou Brisa e Rascunho em curso.
