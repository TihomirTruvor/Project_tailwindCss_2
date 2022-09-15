tailwind.config = {
    content: ['./*.html'],
    darkMode: 'class', // тёмная тема
      theme: {
        fontFamily: { 
          redHat: ['"Red Hat Display"'] // подключаем шрифт GoogleFonts
        },
        container: {
          padding: '20px',
          center: true
        },
        extend: { // дополнительные свойства
          colors: {
            lightblack: '#4D4244',
            lightred: '#FF0D38',
            darkred: '#D70026',
            lightgray: '#747474',
            darkgray: '#272727'
          },
          padding: {
            bigPadding: '40px'
          },
          screens: { //для адаптивности
            sm: {'max':'480px'},
            md: {'max':'768px'},
            lg: {'max':'992px'}
          }
        }
      },
      plugins: []
    }