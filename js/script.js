    function toggleAnswer(element) {
      const answer = element.nextElementSibling;
      const toggle = element.querySelector('.faq-toggle');

      if (answer.classList.contains('collapsed')) {
        answer.classList.remove('collapsed');
        toggle.classList.add('rotated');
        toggle.textContent = '▲';
      } else {
        answer.classList.add('collapsed');
        toggle.classList.remove('rotated');
        toggle.textContent = '▼';
      }
    }

    // Funcionalidade de busca
    document.getElementById('searchInput').addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        const keywords = item.getAttribute('data-keywords') || '';

        if (question.includes(searchTerm) || answer.includes(searchTerm) || keywords.includes(searchTerm)) {
          item.style.display = 'block';
          // Expandir automaticamente se houver busca
          if (searchTerm.length > 2) {
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            answer.classList.remove('collapsed');
            toggle.classList.add('rotated');
            toggle.textContent = '▲';
          }
        } else {
          item.style.display = 'none';
        }
      });

      // Mostrar/ocultar cabeçalhos de categoria
      const categoryHeaders = document.querySelectorAll('.category-header');
      categoryHeaders.forEach(header => {
        let hasVisibleItems = false;
        let nextElement = header.nextElementSibling;

        while (nextElement && !nextElement.classList.contains('category-header')) {
          if (nextElement.classList.contains('faq-item') && nextElement.style.display !== 'none') {
            hasVisibleItems = true;
            break;
          }
          nextElement = nextElement.nextElementSibling;
        }

        header.style.display = hasVisibleItems ? 'block' : 'none';
      });
    });

    // Expandir todas as respostas inicialmente para melhor experiência
    document.addEventListener('DOMContentLoaded', function() {
      const answers = document.querySelectorAll('.faq-answer');
      answers.forEach(answer => {
        answer.classList.add('collapsed');
      });
    });