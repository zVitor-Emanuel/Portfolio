// Este código adiciona um evento de clique ao elemento com o id 'emailButton'
document.getElementById('sendMessageButton').addEventListener('click', sendMail);

// Esta é a função que será chamada quando o botão com id 'emailButton' for clicado
function sendMail (e) {
    // Previne o comportamento padrão do clique em um botão dentro de um formulário.
    e.preventDefault();
    
    // Obtém os valores dos campos de entrada do formulário com base em seus respectivos IDs.
    const mail = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;
    

    // Verifica se todos os campos (e-mail, mensagem e nome) foram preenchidos pelo usuário.
    if (mail && message && name) {
        // Se todos os campos estiverem preenchidos, usa a biblioteca 'Email.js'
        // para enviar o e-mail com os detalhes fornecidos pelo usuário.
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "enviaremail48@gmail.com",
            Password: "06E475A9F54E3CDC8274D81E43BE69897698",
            To: "vitoremanueldev2@gmail.com",
            From: "enviaremail48@gmail.com",
            Subject: document.getElementById('subject').value,
            Body: `Nome: ${name} /// Email: ${mail} /// \n \n ${message}`,
          }).then(() => {
            // Após o envio bem-sucedido, exibe um alerta informando que a mensagem foi enviada
            alert('Mensagem enviada!');
            // E recarrega a página, para limpar os campos e permitir que o usuário envie mais e-mails.
            location.reload();
          });
    } else {
        // Se algum dos campos estiver em branco, exibe um alerta informando que todos os campos devem ser preenchidos.
        alert('Preencha todos os campos!');
    }    
}