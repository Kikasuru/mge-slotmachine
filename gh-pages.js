const ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Kikasuru/mge-slotmachine.git',
        user: {
            name: 'Kikasuru',
            email: 'tgvaporeon@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)