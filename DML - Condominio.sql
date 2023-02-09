USE mydb;
DROP database mydb;


INSERT INTO proprietarios (CPF, NOME, TELEFONE, EMAIL, DT_NASCIMENTO, STATUS)
VALUES
('657.823.689-51', 'Fernanda Sousa', '(61) 98345-6789', 'fernanda.sousa@email.com', '1990-05-23', 'morador'),
('724.931.568-10', 'Maurício Souza', '(61) 98765-4321', 'mauricio.souza@email.com', '1985-03-12', 'sindico'),
('092.741.852-64', 'Julia Silva', '(61) 98123-4678', 'julia.silva@email.com', '1992-01-15', 'morador'),
('903.478.589-06', 'Ricardo Ferreira', '(61) 98901-2345', 'ricardo.ferreira@email.com', '1987-07-24', 'morador'),
('701.853.274-53', 'Ana Paula', '(61) 98234-5678', 'ana.paula@email.com', '1991-06-08', 'morador'),
('652.109.874-03', 'Vitor Oliveira', '(61) 98789-0123', 'vitor.oliveira@email.com', '1986-09-15', 'subsindico'),
('291.708.465-50', 'Fábio Santos', '(61) 98654-3210', 'fabio.santos@email.com', '1989-11-01', 'morador'),
('403.670.908-51', 'Gabriela Cruz', '(61) 98012-3456', 'gabriela.cruz@email.com', '1993-02-14', 'morador'),
('508.673.102-04', 'Rafael Ferreira', '(61) 987654-3210', 'rafael.ferreira@email.com', '1988-12-22', 'morador'),
('603.741.567-08', 'Catarina Silva', '(61) 96581-0123', 'catarina.silva@email.com', '1991-04-30', 'morador');

INSERT INTO gestao (ID_GESTAO, CPF_SINDICO, CPF_SUBSINDICO, DT_INICIO, DT_FIM, ATOS)
VALUES
(1, '903.478.589-06', '092.741.852-64', '2014-01-01', '2015-12-31', 'Organização de eventos comunitários'),
(2, '724.931.568-10', '291.708.465-50', '2016-01-01', '2017-12-31', 'Reuniões regulares com moradores'),
(3, '291.708.465-50', '652.109.874-03', '2018-01-01', '2019-12-31', 'Implementação de novo sistema de segurança'),
(4, '652.109.874-03', '403.670.908-51', '2020-01-01', '2021-12-31', 'Realização de obras de manutenção'),
(5, '724.931.568-10', '652.109.874-03', '2022-01-01', '2023-12-31', '...');

INSERT INTO unidades (ID_UNIDADE, CPF_PROPRIETARIO, BLOCO, NUMERO, NUM_VAGA, PLACA_VEICULO)
VALUES
(10236, '657.823.689-51', 'A', '101', 'A11', 'JUY-6545'),
(10365, '724.931.568-10', 'B', '302', 'B32', 'YTB-0098'),
(10321, '092.741.852-64', 'C', '401', 'C41', 'TRC-4435'),
(10567, '903.478.589-06', 'D', '104', 'D14', 'WQS-5438'),
(10985, '701.853.274-53', 'E', '205', 'E25', 'YTG-7755'),
(10943, '652.109.874-03', 'F', '506', 'F56', 'JIO-8766'),
(10432, '291.708.465-50', 'A', '107', 'A17', 'HGA-8767'),
(10922, '403.670.908-51', 'B', '708', 'B78', 'BPO-9362'),
(10332, '508.673.102-04', 'C', '209', 'C29', 'FEC-1239'),
(10112, '603.741.567-08', 'D', '110', 'D10', 'FSD-2134'),
(10144, '603.741.567-08', 'E', '303', 'E33', 'KLM-5478'),
(10322, '291.708.465-50', 'F', '110', 'F10', 'PAL-7655'),
(10453, '092.741.852-64', 'A', '205', 'A25', 'LPO-9811'),
(10229, '724.931.568-10', 'B', '103', 'B13', 'JJK-1000'),
(10363, '508.673.102-04', 'C', '402', 'C42', 'PTR-3300');

INSERT INTO reunioes (ID_REUNIAO, ID_GESTAO, TITULO, LOCAL, DATA, HORARIO, PAUTA)
VALUES
(1, 1, 'Reunião nº 01 de 2014', 'Salão de Festas do Bloco A', '2014-03-01', '19:00:00', 'Aprovação do orçamento anual e discussão de despesas para o próximo ano'),
(2, 2, 'Reunião nº 02 de 2016', 'Salão de Festas do Bloco B', '2016-03-10', '20:00:00', 'Discutir problemas de infraestrutura, como vazamentos, manutenção de elevadores e outros'),
(3, 5, 'Reunião nº 04 de 2022', 'Salão de Festas do Bloco C', '2022-05-15', '18:00:00', 'Aprovação de novas regras do condomínio, incluindo horários de uso da piscina e regras para animais de estimação'),
(4, 5, 'Reunião nº 01 de 2023', 'Salão de Festas do Bloco D', '2023-01-10', '19:30:00', 'Discutir melhorias na segurança do condomínio, incluindo contratação de novos vigilantes e instalação de câmeras de segurança'),
(5, 5, 'Reunião nº 02 de 2023', 'Salão de Festas do Bloco E', '2023-01-25', '20:15:00', 'Discutir eventos futuros no condomínio, incluindo comemorações de festas juninas e piqueniques de verão');

INSERT INTO presenca_reuniao (ID_UNIDADE, ID_REUNIAO, NOME, OBS)
VALUES
(10236, 3, 'Fernanda Sousa', 'Proprietária'),
(10363, 3, 'Guilherme Ferreira', 'Primo do Proprietário'),
(10322, 3, 'Fábio Santos', 'Proprietário'),
(10229, 3, 'Maurício Souza', 'Síndico'),
(10229, 2, 'Fatima Souza', 'Moradora'),
(10322, 2, 'Fábio Santos', 'Subsíndico'),
(10321, 2, 'Julia Silva', 'Moradora');


INSERT INTO areas_comuns (ID_AREA, NOME, REGRAS, CAPACIDADE)
VALUES
(01, 'Salão de Festas - Central', 'Não pode subir nas mesas', '100 Pessoas'),
(02, 'Churrasqueira 1 - Piscina', 'Não pode som automotivo', '30 Pessoas'),
(03, 'Churrasqueira 2 - Piscina', 'Não pode som automotivo', '20 Pessoas'),
(04, 'Churrasqueira 3 - Piscina', 'Não pode som automotivo', '30 Pessoas'),
(05, 'Churrasqueira 4 - Piscina', 'Não pode som automotivo', '20 Pessoas'),
(06, 'Portaria - Entrada Principal', 'Dirija devagar', 'Sem limite'),
(10, 'Elevador - Bloco A', 'Não pode pular', '6 Pessoas'),
(11, 'Salão de Festas - Bloco A', 'Não pode subir nas mesas', '30 Pessoas'),
(12, 'Area Gourmet - Bloco A', 'Não pode som automotivo', '20 Pessoas'),
(13, 'Jardim - Bloco A', 'Não pise na grama', 'Sem limite'),
(14, 'Hall - Bloco A', 'Não grite', 'Sem limite'),
(20, 'Elevador - Bloco B', 'Não pode pular', '6 Pessoas'),
(21, 'Salão de Festas - Bloco B', 'Não pode subir nas mesas', '30 Pessoas'),
(22, 'Area Gourmet - Bloco B', 'Não pode som automotivo', '20 Pessoas'),
(23, 'Jardim - Bloco B', 'Não pise na grama', 'Sem limite'),
(24, 'Hall - Bloco B', 'Não grite', 'Sem limite'),
(30, 'Elevador - Bloco c', 'Não pode pular', '6 Pessoas'),
(31, 'Salão de Festas - Bloco C', 'Não pode subir nas mesas', '30 Pessoas'),
(32, 'Area Gourmet - Bloco C', 'Não pode som automotivo', '20 Pessoas'),
(33, 'Jardim - Bloco C', 'Não pise na grama', 'Sem limite'),
(34, 'Hall - Bloco C', 'Não grite', 'Sem limite'),
(40, 'Elevador - Bloco D', 'Não pode pular', '6 Pessoas'),
(41, 'Salão de Festas - Bloco D', 'Não pode subir nas mesas', '30 Pessoas'),
(42, 'Area Gourmet - Bloco D', 'Não pode som automotivo', '20 Pessoas'),
(43, 'Jardim - Bloco D', 'Não pise na grama', 'Sem limite'),
(44, 'Hall - Bloco D', 'Não grite', 'Sem limite'),
(50, 'Elevador - Bloco E', 'Não pode pular', '6 Pessoas'),
(51, 'Salão de Festas - Bloco E', 'Não pode subir nas mesas', '30 Pessoas'),
(52, 'Area Gourmet - Bloco E', 'Não pode som automotivo', '20 Pessoas'),
(53, 'Jardim - Bloco E', 'Não pise na grama', 'Sem limite'),
(54, 'Hall - Bloco E', 'Não grite', 'Sem limite'),
(60, 'Elevador - Bloco F', 'Não pode pular', '6 Pessoas'),
(61, 'Salão de Festas - Bloco F', 'Não pode subir nas mesas', '30 Pessoas'),
(62, 'Area Gourmet - Bloco F', 'Não pode som automotivo', '20 Pessoas'),
(63, 'Jardim - Bloco F', 'Não pise na grama', 'Sem limite'),
(64, 'Hall - Bloco F', 'Não grite', 'Sem limite');

INSERT INTO reservas (ID_UNIDADE, ID_AREA, NOME_RESP, QTD_PESSOAS, DESCRICAO, DT_HORARIO, DURACAO)
VALUES
(10321, 01, 'Júlia Silva', '70 Pessoas', 'Aniversário', '2018-05-22 10:00:00', '6 Horas'),
(10321, 32, 'Júlia Silva', '15 Pessoas', 'Churrasco', '2023-01-01 08:00:00', '12 Horas'),
(10922, 20, 'Gabriela Cruz', '30 Pessoas', 'Reunião Hinode', '2022-10-30 19:00:001', '4 Horas'),
(10567, 42, 'Ricardo Ferreira', '18 Pessoas', 'Churrasco', '2021-12-03 12:00:00', '8 Horas'),
(10567, 03, 'Ricardo Ferreira', '40 Pessoas', 'Churrasco', '2023-01-01 11:00:00', '8 Horas'),
(10144, 01, 'Catarina Silva', '90 Pessoas', 'Confraternização', '2022-12-20 17:00:00', '6 Horas');

INSERT INTO ocorrencias (ID_UNIDADE, ID_GESTAO, ID_AREA, TITULO, DESCRICAO, NOME, DT_HORA)
VALUES
(10567, 4, 40, 'Elevador Quebrado', 'Elevador quebrou', 'Ricardo Ferreira', '2022-03-01'),
(10321, 4, 34, 'Limpeza', 'Água derramada', 'Júlia Silva', NOW()),
(10922, 4, 23, 'Arvore caída', 'Arvore caiu', 'Gabriela Cruz', NOW()),
(10144, 3, 50, 'Elevador Quebrado', 'Elevador quebrou', 'Catarina Silva', NOW()),
(10985, 3, 50, 'Elevador Quebrado', 'Elevador quebrou', 'Ana Paula', NOW()),
(10321, 3, 31, 'Manutenção', 'Parede descascada', 'Júlia Silva', NOW()),
(10229, 5, 20, 'Elevador Quebrado', 'Elevador quebrou', 'Maurício Souza', NOW()),
(10943, 5, 64, 'Limpeza', 'Refrigerante derramado', 'Vitor Oliveira', NOW()),
(10144, 5, 50, 'Elevador Quebrado', 'Elevador quebrou', 'Catarina Silva', NOW()),
(10321, 5, 32, 'Torneira Quebrada', 'Torneira da pia vazando', 'Júlia Silva', NOW());

INSERT INTO tipo_servico (ID_TIPO, DESCRICAO)
VALUES 
(01, 'LIMPEZA'),
(02, 'JARDINAGEM'),
(03, 'REFORMA'),
(04, 'ELÉTRICO'),
(05, 'LIMPEZA PISCINA'),
(06, 'PINTURA'),
(07,'DEDETIZAÇÃO'),
(08, 'MANUTENÇÃO ELEVADOR'),
(09, 'RECARGA EXTINTORES'),
(10, 'TECNOLOGIA');

INSERT INTO prazos (ID_PRAZO, DATA_INICIO, DATA_FIM, PERIODICIDADE, QTD_DIAS, DT_ULT_REALIZACAO)
VALUES
(1, '2021-05-01', '2021-05-01', 'Anual', 365, '2020-04-30'),
(2, '2021-07-22', '2021-07-30', 'Sob Demanda', 9, '2021-07-30'),
(3, '2022-03-01', '2022-03-01', 'Diária', 1, '2020-08-31'),
(4, '2022-09-21', '2022-09-21', 'Diária', 1, '2021-05-30'),
(5, '2022-10-05', '2022-11-05', 'Mensal', 30, '2022-09-05'),
(6, '2022-11-05', '2022-12-05', 'Mensal', 30, '2022-10-05'),
(7, '2023-05-03', '2022-05-03', 'Anual', 365, '2022-05-04'),
(8, '2023-05-03', '2022-06-03', 'Mensal', 30, '2023-04-03'),
(9, '2023-06-03', '2022-07-03', 'Mensal', 30, '2023-05-03'),
(10, '2023-07-03', '2022-08-03', 'Mensal', 30, '2023-06-03');

INSERT INTO fornecedores (CNPJ, NOME, TELEFONE, EMAIL, ENDERECO, CIDADE, RESPONSAVEL, TEL_RESP)
VALUES
('55.877.303/0001-89', 'Service Extintores', '(61) 3002-3001', 'extintores@service.com', 'QS 302 conjunto B loja 08', 'Riacho Fundo', 'Patrícia Koslov', '(61) 99341-0002'),
('60.698.417/0001-00', 'Global Limpeza', '(61) 3354-9874', 'global@global.com', 'QND 24 lote 03', 'Taguatinga', 'José Pedro', '(61) 99883-0981'),
('50.329.877/0001-07', 'Jardinagem do Edu', '(61) 99851-9741', 'edu@jardins.com', 'QSW 33 lote 01', 'Park Way', 'Eduardo Mendes', '(61) 91331-0001'),
('24.271.334/0001-68', 'C&T Reformas', '(61) 3321-0909', 'contato@reformas.com', 'SQS 302 bloco E lote 01', 'Asa Sul', 'Henrico Gusmão', '(61) 97632-2231'),
('63.012.414/0001-50', 'Targus Segurança', '(61) 3030-9876', 'targus@seguranca.com', 'SIA Trecho 01 lote 31', 'SIA', 'Fernanda Lopes', '(61) 99331-0232'),
('72.542.449/0001-92', 'TWE Serviços de Limpeza', '(61) 3210-3111', 'twe@limpeza.com', 'SAAN Trecho 04 lote 02', 'SAAN', 'Maria Freitas', '(61) 99341-2265'),
('23.337.141/0001-08', 'OIKOS Tecnologia', '(61) 3902-1212', 'oikos@tecnologia.com', 'SGAN 903 lote 01', 'Asa Norte', 'Gabriela Silva', '(61) 98922-7601');

INSERT INTO orcamentos (ID_ORCAMENTO, CNPJ, ID_PRAZO, ID_TIPO, DATA, VALOR, DESCRICAO)
VALUES
(1, '55.877.303/0001-89', 1, 09, '2021-04-28', 3200.00, 'Recarga de 30 extintores tipo A'),
(2, '24.271.334/0001-68', 2, 03, '2021-07-21', 6000.00, 'Reforma da entrada principal do condomínio'),
(3, '23.337.141/0001-08', 3, 08, '2022-03-01', 500.00, 'Conserto do Elevador 2 do bloco C'),
(4, '23.337.141/0001-08', 4, 08, '2022-09-21', 500.00, 'Conserto do Elevador 1 do bloco A'),
(5, '50.329.877/0001-07', 5, 02, '2022-10-05', 2500.00, 'Pagamento mensal do serviço de jardinagem'),
(6, '50.329.877/0001-07', 6, 02, '2022-11-05', 2600.00, 'Pagamento mensal do serviço de jardinagem'),
(7, '55.877.303/0001-89', 7, 09, '2023-05-03', 3600.00, 'Recarga de 30 extintores do tipo A'),
(8, '60.698.417/0001-00', 8, 01, '2023-05-03', 11500.00, 'Pagamento mensal do serviço de limpeza'),
(9, '60.698.417/0001-00', 9, 01, '2023-06-03', 11500.00, 'Pagamento mensal do serviço de limpeza'),
(10, '60.698.417/0001-00', 10, 01, '2023-07-03', 11500.00, 'Pagamento mensal do serviço de limpeza');


INSERT INTO servicos (ID_SERVICO, ID_TIPO, ID_PRAZO, CNPJ, ID_GESTAO, ID_ORCAMENTO, DT_PAG, RESPONSAVEL)
VALUES
(1, 09, 1, '55.877.303/0001-89', 4, 1, '2021-05-01', 'Vitor Oliveira'),
(2, 03, 2, '24.271.334/0001-68', 4, 2, '2021-07-21', 'Gabriela Cruz'),
(3, 08, 3, '23.337.141/0001-08', 5, 3, '2022-03-02', 'Maurício Souza'),
(4, 08, 4, '23.337.141/0001-08', 5, 4, '2022-09-22', 'Vitor Oliveira'),
(5, 02, 5, '50.329.877/0001-07', 5, 5, '2022-10-05', 'Maurício Souza'),
(6, 02, 6, '50.329.877/0001-07', 5, 6, '2022-11-05', 'Maurício Souza'),
(7, 09, 7, '55.877.303/0001-89', 5, 7, '2023-05-03', 'Vitor Oliveira'),
(8, 01, 8, '60.698.417/0001-00', 5, 8, '2023-05-03', 'Maurício Souza');

INSERT INTO servicos_feitos (ID_SERVICO, ID_AREA)
VALUES
(8, 06), (8, 11), (8, 22), (8, 31), (8, 42), (8, 51), (8, 62),
(5, 13), (5, 23), (5, 33), (5, 43), (5, 53), (5, 63), (3, 30), 
(4, 10);


select *
from proprietarios
WHERE ID_ORCAMENTO = 2;