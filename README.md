# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar MailTrap para dev env;
- Utilizar Amazon SES em prod;
- O envio emails deve acontecer em segundo plano (background job);

**RN**

- O link enviado deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha;


# Atualização de perfil

**RF**

- O usuário deve poder atualizar nome email e senha;

**RNF**

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve colocar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações devem ser armazenadas no Mongo DB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuario deve poder listar todos os prestadores cadastrados;
- O usuário deve poder visualizar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar os horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento

**RNF**

- A listagem de prestadores deve ser armazenada em cache.

**RN**

- Cada agendamento deve durar uma hora;
- Os agendamentos devem estar disponíveis de 8h as 18h (primeiro 8 e segundo 17);
- O usuário não pode agendar num horário ocupado;
- O usuário não pode agendar num horário passado;
- O usuário não pode agendar serviços consigo mesmo;